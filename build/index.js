"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const constants_1 = require("./constants");
class CodeTemplator {
    constructor() {
        this.monorepoTools = [constants_1.MonorepoTool.NIX, constants_1.MonorepoTool.TURBO_REPO];
        this.packageManagers = [constants_1.PackageManager.NPM, constants_1.PackageManager.PNPM, constants_1.PackageManager.YARN];
        this.platforms = [constants_1.Platform.DESKTOP, constants_1.Platform.WEB, constants_1.Platform.ANDROID, constants_1.Platform.IOS, constants_1.Platform.CROSS_PLATFORM];
        this.architectures = [constants_1.ProjectArchitecture.BACKEND_ONLY, constants_1.ProjectArchitecture.FRONTEND_ONLY, constants_1.ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC, constants_1.ProjectArchitecture.MICROSERVICE_MONOREPO, constants_1.ProjectArchitecture.MICROSERVICE_POLY_REPO];
    }
    askProjectQuestions() {
        return __awaiter(this, void 0, void 0, function* () {
            // Initial project configuration
            const baseConfig = yield inquirer_1.default.prompt([
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
                case constants_1.ProjectArchitecture.BACKEND_ONLY:
                    const backendConfig = yield this.handleMicroServiceConfiguration();
                    return Object.assign(Object.assign({}, baseConfig), backendConfig);
                case constants_1.ProjectArchitecture.MICROSERVICE_MONOREPO:
                case constants_1.ProjectArchitecture.MICROSERVICE_POLY_REPO:
                    const monorepoConfig = yield this.handleMicroServiceConfiguration();
                    return Object.assign(Object.assign({}, baseConfig), monorepoConfig);
                case constants_1.ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC:
                    const monolithicConfig = yield this.handleMicroServiceConfiguration();
                    return Object.assign(Object.assign({}, baseConfig), monolithicConfig);
                case constants_1.ProjectArchitecture.FRONTEND_ONLY:
                    const frontendConfig = yield this.handleMicroServiceConfiguration();
                    return Object.assign(Object.assign({}, baseConfig), frontendConfig);
                default:
                    console.log("Please select a correct option!");
                    break;
            }
            return baseConfig;
        });
    }
    handleMicroServiceConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            // Monorepo tool selection
            const { monorepoTool } = yield inquirer_1.default.prompt({
                type: 'list',
                name: 'monorepoTool',
                message: 'Select monorepo tool:',
                choices: this.monorepoTools
            });
            const { serviceCount } = yield inquirer_1.default.prompt({
                type: 'number',
                name: 'serviceCount',
                message: 'How many services do you want to create?',
                validate: (value) => value && value > 0 ? true : 'Please enter a number greater than 0'
            });
            const services = [];
            for (let i = 0; i < serviceCount; i++) {
                const serviceConfig = yield this.configureService(i + 1);
                services.push(serviceConfig);
            }
            return { monorepoTool, serviceCount, services };
        });
    }
    configureService(serviceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type } = yield inquirer_1.default.prompt({
                type: 'list',
                name: 'type',
                message: `Configure Service ${serviceNumber}:`,
                choices: [constants_1.ProjectArchitecture.BACKEND_ONLY, constants_1.ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC, constants_1.ProjectArchitecture.FRONTEND_ONLY]
            });
            switch (type) {
                case constants_1.ProjectArchitecture.BACKEND_ONLY:
                    const backendConfig = yield this.configureBackendService();
                    return { type, config: backendConfig };
                case constants_1.ProjectArchitecture.FRONTEND_ONLY:
                    const frontendConfig = yield this.configureFrontendService();
                    return { type, config: frontendConfig };
                case constants_1.ProjectArchitecture.FRONTEND_BACKEND_MONOLITHIC:
                    const monolithConfig = yield this.configureMonolithService();
                    return { type, config: monolithConfig };
                default:
                    break;
            }
            return { type };
        });
    }
    configureMonolithService() {
        return __awaiter(this, void 0, void 0, function* () {
            const backendConfig = yield this.configureBackendService();
            const frontendConfig = yield this.configureFrontendService();
            return Object.assign(Object.assign({}, backendConfig), frontendConfig);
        });
    }
    configureFrontendService() {
        return __awaiter(this, void 0, void 0, function* () {
            const { FE_platform } = yield inquirer_1.default.prompt([
                {
                    type: 'list',
                    name: 'FE_platform',
                    message: `Specify platform for the app`,
                    choices: this.platforms
                }
            ]);
            let features = {};
            const featureEntries = Array.from(constants_1.FRONTEND_MAP.entries());
            for (const [feature, options] of featureEntries) {
                const { selectedOption } = yield inquirer_1.default.prompt({
                    type: 'list',
                    name: 'selectedOption',
                    message: `Select a library/tool for ${feature}:`,
                    choices: options,
                });
                features[feature] = selectedOption;
            }
            return {
                FE_libraries: features,
                FE_platform
            };
        });
    }
    configureBackendService() {
        return __awaiter(this, void 0, void 0, function* () {
            const { BE_platform } = yield inquirer_1.default.prompt([
                {
                    type: 'list',
                    name: 'BE_platform',
                    message: `Specify platform for the app`,
                    choices: this.platforms
                }
            ]);
            let features = {};
            const featureEntries = Array.from(constants_1.BACKEND_MAP.entries());
            for (const [feature, options] of featureEntries) {
                const { selectedOption } = yield inquirer_1.default.prompt({
                    type: 'list',
                    name: 'selectedOption',
                    message: `Select a library/tool for ${feature}:`,
                    choices: options,
                });
                features[feature] = selectedOption;
            }
            return {
                BE_libraries: features,
                BE_platform
            };
        });
    }
    generateProject() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const config = yield this.askProjectQuestions();
                console.log('Generated Project Config:', JSON.stringify(config, null, 2));
                // Actual project generation logic would follow
            }
            catch (error) {
                console.error('Project generation error:', error);
            }
        });
    }
}
// CLI setup
commander_1.program
    .version('1.0.0')
    .description('Code Templating CLI')
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const templator = new CodeTemplator();
    yield templator.generateProject();
}));
commander_1.program.parse(process.argv);
