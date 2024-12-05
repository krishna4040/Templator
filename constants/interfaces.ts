import { BackendFeatures, BackendLibraries, FrontendFeatures, FrontendLibraries, MonorepoTool, PackageManager, Platform, ProjectArchitecture } from "./enums";

export interface ServiceConfig {
  type: ProjectArchitecture;
  config?: FrontendService | BackendService | MonolithService
}

export interface FrontendService {
  FE_platform: Platform
  FE_libraries: Record<FrontendFeatures, FrontendLibraries | FrontendLibraries[]>
}

export interface BackendService {
  BE_platform: Platform
  BE_libraries: Record<BackendFeatures, BackendLibraries | BackendLibraries[]>
}

export type MonolithService = FrontendService & BackendService

export interface ProjectConfig {
  architecture: ProjectArchitecture;
  packageManager: PackageManager;
  monorepoTool?: MonorepoTool;
  serviceCount?: number;
  services?: ServiceConfig[];
}

export type Input = 'checkbox' | 'list' | 'number' | 'select'
