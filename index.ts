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
} from './constants';

interface ServiceConfig {
  type: ProjectArchitecture;
  config?: FrontendService | BackendService | MonolithService
}

interface FrontendService {
  platform: Platform
  libraries: FrontendLibraries[]
}

interface BackendService {
  platform: Platform
  libraries: BackendLibraries[]
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
  private platforms = [Platform.DESKTOP, Platform.WEB, Platform.ANDROID, Platform.IOS, Platform.CROSS_PLATFORM]
  private architectures = [ProjectArchitecture.BACKEND_ONLY, ProjectArchitecture.FRONTEND_ONLY, ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC]

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
        const backendConfig = await this.handleMicroServiceConfiguration();
        return { ...baseConfig, ...backendConfig };
      case ProjectArchitecture.MICROSERVICE_MONOREPO:
      case ProjectArchitecture.MICROSERVICE_POLY_REPO:
        const monorepoConfig = await this.handleMicroServiceConfiguration();
        return { ...baseConfig, ...monorepoConfig };
      case ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC:
        const monolithicConfig = await this.handleMicroServiceConfiguration();
        return { ...baseConfig, ...monolithicConfig };
      case ProjectArchitecture.FRONTEND_ONLY:
        const frontendConfig = await this.handleMicroServiceConfiguration();
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
    const { type } = await inquirer.prompt({
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
        const monolithConfig = await this.configureBackendService();
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
    throw new Error("Method not implemented.");
  }

  private async configureBackendService(): Promise<BackendService> {
    throw new Error("Method not implemented.");
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