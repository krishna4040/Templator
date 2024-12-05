import { program } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import {
  ProjectArchitecture,
  MonorepoTool,
  PackageManager,
  Platform,
  FrontendLibraries,
  BackendLibraries,
  FrontendFeatures,
  BackendFeatures,
  BACKEND_MAP,
  FRONTEND_MAP,
  PLATFORM_MAP,
} from './constants';

interface ServiceConfig {
  type: ProjectArchitecture;
  config?: FrontendService | BackendService | MonolithService
}

interface FrontendService {
  FE_platform: Platform
  FE_libraries: Record<FrontendFeatures, FrontendLibraries>
}

interface BackendService {
  BE_platform: Platform
  BE_libraries: Record<BackendFeatures, BackendLibraries>
}

type MonolithService = FrontendService & BackendService

interface ProjectConfig {
  architecture: ProjectArchitecture;
  packageManager: PackageManager;
  monorepoTool?: MonorepoTool;
  serviceCount?: number;
  services?: ServiceConfig[];
}

class CodeTemplator {

  private monorepoTools = [MonorepoTool.NIX, MonorepoTool.TURBO_REPO]
  private packageManagers = [PackageManager.NPM, PackageManager.PNPM, PackageManager.YARN]
  private platforms = [Platform.WEB, Platform.DESKTOP_BASED_CROSS_PLATFORM, Platform.MOBILE_BASED_CROSS_PLATFORM]
  private architectures = [ProjectArchitecture.BACKEND_ONLY, ProjectArchitecture.FRONTEND_ONLY, ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC, ProjectArchitecture.MICROSERVICE_MONOREPO, ProjectArchitecture.MICROSERVICE_POLY_REPO]

  private async askProjectQuestions(): Promise<ProjectConfig> {
    // Initial project configuration
    const baseConfig = await inquirer.prompt<ProjectConfig>([
      {
        type: 'list',
        name: 'architecture',
        message: 'Select project architecture:',
        choices: this.architectures
      },
      {
        type: 'list',
        name: 'packageManager',
        message: 'Choose package manager:',
        choices: this.packageManagers
      }
    ]);

    switch (baseConfig.architecture) {
      case ProjectArchitecture.BACKEND_ONLY:
        const backendConfig = await this.configureBackendService();
        return { ...baseConfig, ...backendConfig };
      case ProjectArchitecture.MICROSERVICE_MONOREPO:
      case ProjectArchitecture.MICROSERVICE_POLY_REPO:
        const monorepoConfig = await this.handleMicroServiceConfiguration();
        return { ...baseConfig, ...monorepoConfig };
      case ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC:
        const monolithicConfig = await this.configureMonolithService();
        return { ...baseConfig, ...monolithicConfig };
      case ProjectArchitecture.FRONTEND_ONLY:
        const frontendConfig = await this.configureFrontendService();
        return { ...baseConfig, ...frontendConfig };
      default:
        console.log("Please select a correct option!");
        break;
    }

    return baseConfig;
  }

  private async handleMicroServiceConfiguration(): Promise<Partial<ProjectConfig>> {
    // Monorepo tool selection
    const { monorepoTool } = await inquirer.prompt({
      type: 'list',
      name: 'monorepoTool',
      message: 'Select monorepo tool:',
      choices: this.monorepoTools
    });

    const { serviceCount } = await inquirer.prompt({
      type: 'number',
      name: 'serviceCount',
      message: 'How many services do you want to create?',
      validate: (value) => value && value > 0 ? true : 'Please enter a number greater than 0'
    });

    const services: ServiceConfig[] = [];
    for (let i = 0; i < serviceCount; i++) {
      const serviceConfig = await this.configureService(i + 1);
      services.push(serviceConfig);
    }

    return { monorepoTool, serviceCount, services };
  }

  private async configureService(serviceNumber: number): Promise<ServiceConfig> {
    const { type } = await inquirer.prompt<{ type: ProjectArchitecture }>({
      type: 'list',
      name: 'type',
      message: `Configure Service ${serviceNumber}:`,
      choices: [ProjectArchitecture.BACKEND_ONLY, ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC, ProjectArchitecture.FRONTEND_ONLY]
    })

    switch (type) {
      case ProjectArchitecture.BACKEND_ONLY:
        const backendConfig = await this.configureBackendService();
        return { type, config: backendConfig };
      case ProjectArchitecture.FRONTEND_ONLY:
        const frontendConfig = await this.configureFrontendService();
        return { type, config: frontendConfig };
      case ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC:
        const monolithConfig = await this.configureMonolithService();
        return { type, config: monolithConfig };
      default:
        break;
    }

    return { type };
  }

  private async configureMonolithService(): Promise<MonolithService> {
    const backendConfig = await this.configureBackendService();
    const frontendConfig = await this.configureFrontendService();
    return { ...backendConfig, ...frontendConfig };
  }

  private async configureFrontendService(): Promise<FrontendService> {
    const { FE_platform } = await inquirer.prompt<FrontendService>([
      {
        type: 'list',
        name: 'FE_platform',
        message: `Specify platform for the app`,
        choices: this.platforms
      }
    ])

    let features: Partial<Record<FrontendFeatures, FrontendLibraries>> = {}

    const featureEntries = Array.from(FRONTEND_MAP.entries());

    switch (FE_platform) {
      case Platform.DESKTOP_BASED_CROSS_PLATFORM:
        features = await this.configureDesktopBasedCrossPlatformService(featureEntries, features)
        break;
      case Platform.WEB:
        features = await this.configureWebService(featureEntries, features)
        break
      case Platform.MOBILE_BASED_CROSS_PLATFORM:
        features = await this.configureMobileBasedCrossPlatformService(featureEntries, features)
        break
      default:
        console.log("Please select a correct option!");
        break;
    }

    return {
      FE_libraries: features as Record<FrontendFeatures, FrontendLibraries>,
      FE_platform
    };
  }

  private async configureBackendService(): Promise<BackendService> {
    let features: Partial<Record<BackendFeatures, BackendLibraries>> = {}

    const featureEntries = Array.from(BACKEND_MAP.entries());

    for (const [feature, options] of featureEntries) {
      const { selectedOption } = await inquirer.prompt({
        type: 'list',
        name: 'selectedOption',
        message: `Select a library/tool for ${feature}:`,
        choices: options,
      });

      features[feature] = selectedOption;
    }

    return {
      BE_libraries: features as Record<BackendFeatures, BackendLibraries>,
      BE_platform: Platform.RUNTIME
    };
  }

  private async configureDesktopBasedCrossPlatformService(featureEntries: [FrontendFeatures, FrontendLibraries[]][], features: Partial<Record<FrontendFeatures, FrontendLibraries>>): Promise<Partial<Record<FrontendFeatures, FrontendLibraries>>> {
    for (const [feature, options] of featureEntries) {
      let configuredOptions = options

      if (feature === FrontendFeatures.FRAMEWORK) {
        configuredOptions = PLATFORM_MAP.get(Platform.DESKTOP_BASED_CROSS_PLATFORM) ?? []
      }

      const { selectedOption } = await inquirer.prompt({
        type: 'list',
        name: 'selectedOption',
        message: `Select a library/tool for ${feature}:`,
        choices: configuredOptions,
      });

      features[feature] = selectedOption;
    }

    return features
  }

  private async configureMobileBasedCrossPlatformService(featureEntries: [FrontendFeatures, FrontendLibraries[]][], features: Partial<Record<FrontendFeatures, FrontendLibraries>>): Promise<Partial<Record<FrontendFeatures, FrontendLibraries>>> {
    for (const [feature, options] of featureEntries) {

      let configuredOptions = options

      if (feature === FrontendFeatures.FRAMEWORK) {
        configuredOptions = PLATFORM_MAP.get(Platform.MOBILE_BASED_CROSS_PLATFORM) ?? []
      }

      const { selectedOption } = await inquirer.prompt({
        type: 'list',
        name: 'selectedOption',
        message: `Select a library/tool for ${feature}:`,
        choices: configuredOptions,
      });

      features[feature] = selectedOption;
    }

    return features
  }

  private async configureWebService(featureEntries: [FrontendFeatures, FrontendLibraries[]][], features: Partial<Record<FrontendFeatures, FrontendLibraries>>): Promise<Partial<Record<FrontendFeatures, FrontendLibraries>>> {
    for (const [feature, options] of featureEntries) {

      let configuredOptions = options

      if (feature === FrontendFeatures.FRAMEWORK) {
        configuredOptions = PLATFORM_MAP.get(Platform.WEB) ?? []
      }

      const { selectedOption } = await inquirer.prompt({
        type: 'list',
        name: 'selectedOption',
        message: `Select a library/tool for ${feature}:`,
        choices: configuredOptions,
      });

      features[feature] = selectedOption;
    }

    return features
  }

  async generateProject(): Promise<void> {
    try {
      const config = await this.askProjectQuestions();
      console.log('Generated Project Config:', JSON.stringify(config, null, 2));
      // Actual project generation logic would follow
    } catch (error) {
      console.error('Project generation error:', error);
    }
  }
}

// CLI setup
program
  .version('1.0.0')
  .description('Code Templating CLI')
  .action(async () => {
    const templator = new CodeTemplator();
    await templator.generateProject();
  });

program.parse(process.argv);