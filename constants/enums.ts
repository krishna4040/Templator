export enum ProjectType {
  BLOG_APP = 'blog-app',
  LANDING_PAGE = 'landing-page',
  SASS = 'sass',
  E_COMMERCE = 'e-commerce',
  DEFAULT = 'default',
  DASHBOARD = 'dashboard'
}

export enum Platform {
  WEB = 'web',
  MOBILE_BASED_CROSS_PLATFORM = 'mobile-based-cross-platform',
  DESKTOP_BASED_CROSS_PLATFORM = 'desktop-based-cross-platform',
  RUNTIME = 'runtime'
}

export enum ProjectArchitecture {
  FRONTEND_ONLY = 'frontend-only',
  BACKEND_ONLY = 'backend-only',
  FRONTEND_BACKEND_MONOLITHIC = 'frontend-backend-monolithic',
  MICROSERVICE_MONOREPO = 'microservice-monorepo',
  MICROSERVICE_POLY_REPO = 'microservice-poly-repo',
}

export enum PackageManager {
  NPM = 'npm',
  PNPM = 'pnpm',
  YARN = 'yarn',
}

export enum MonorepoTool {
  NIX = 'nix',
  TURBO_REPO = 'turbo-repo',
}

export enum FrontendFeatures {
  LANGUAGE = 'language',
  CSS = 'css',
  DATA_FETCHING = 'data-fetching',
  UI_LIBRARIES = 'ui-libraries',
  FORM_HANDLING = 'form-handling',
  VALIDATION = 'validation',
  STATE_MANAGEMENT = 'state-management',
  TESTING = 'testing',
  AUTHENTICATION = 'authentication',
  FRAMEWORK = 'framework',
  BUNDLER = 'bundler',
  API_STRUCTURE = 'api-structure',
  STYLING = 'styling',
  DOCUMENTATION = 'documentation'
}

export enum FrontendLibraries {
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  TAILWIND_CSS = 'tailwind-css',
  VANILLA_CSS = 'vanilla-css',
  REACT_QUERY = 'react-query',
  SWR = 'swr',
  REACT_ROUTER = 'react-router-dom',
  SHADCN = 'shadcn',
  MUI = 'MUI',
  REACT_ADMIN = 'react-admin',
  REACT_HOOK_FORM = 'react-hook-form',
  ZOD = 'zod',
  YUP = 'yup',
  REDUX = 'redux',
  ZUSTAND = 'zustand',
  REACT_CONTEXT = 'react-context',
  VITEST = 'vitest',
  PLAYWRIGHT = 'playwright',
  CYPRESS = 'cypress',
  REACT_TESTING_LIBRARY = 'react-testing-library',
  TANSTACK_ROUTER = 'tanstack-router',
  TANSTACK_FORM = 'tanstack-form',
  FORMIK = 'formik',
  NEXT = 'next',
  REACT = 'react',
  REACT_NATIVE = 'react-native',
  HYDROGEN = 'hydrogen',
  ELECTRON = 'electron',
  CUSTOM = 'custom',
  VITE = 'vite',
  TAURI = 'tauri',
  CLERK = 'clerk',
  NEXT_AUTH = 'next-auth',
  FIREBASE_AUTH = 'firebase-auth',
  DEFAULT_BUNDLER = 'default-bundler',
  SOCKET_IO = 'socket-io',
  REST = 'rest',
  APOLLO_GRAPHQL = 'apollo-graphql',
  SWIPER = 'swiper',
  CHART_JS = 'char-js',
  LOTTIE = 'lottie',
  REACT_ICONS = 'react-icons',
  REACT_SPRING = 'react-spring',
  FRAMER = 'framer',
  MOTION = 'motion',
  TYPE_ANIMATION = 'type-animation',
  REACT_VERTICAL_TIMELINE_COMPONENT = "react-vertical-timeline-component",
  SCROLL_FEED = 'scroll-feed',
  REACT_FLOW = 'react-flow',
  EXPO = 'expo',
  STORY_BOOK = 'storybook',
  FAKER = 'faker'
}

export enum BackendLibraries {
  EXPRESS = 'express',
  NEST = 'nest',
  BULL_MQ = 'bull-mq',
  ZOD = 'zod',
  YUP = 'yup',
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  CLERK = 'clerk',
  FIREBASE_AUTH = 'firebase-auth',
  DENO = 'deno',
  BUN = 'bun',
  CUSTOM = 'custom',
  VITEST = 'vitest',
  PRISMA = 'prisma',
  DRIZZLE = 'drizzle',
  MONGOOSE = 'mongoose',
  POSTGRES = 'postgres',
  MONGODB = 'mongodb',
  MYSQL = 'mysql',
  SQLITE = 'sqlite',
  REDIS = 'redis',
  SOCKET_IO = 'socket-io',
  APOLLO_GRAPHQL = 'apollo-graphql',
  REST = 'rest',
  TRPC = 'TRPC',
  FIREBASE_CLOUD_STORAGE = 'firebase-cloud-storage',
  CLOUDINARY = 'cloudinary',
  AWS_S3 = 'aws-s3',
  SELF = 'self',
  SWAGGER = 'swagger',
  FAKER = 'faker',
}

export enum BackendFeatures {
  LANGUAGE = 'language',
  VALIDATION = 'validation',
  TESTING = 'testing',
  AUTHENTICATION = 'authentication',
  FRAMEWORK = 'framework',
  ORM = 'orm',
  DATABASE = 'database',
  API_STRUCTURE = 'api-structure',
  MEDIA_SERVER = 'media-server',
  DOCUMENTATION = 'documentation',
}

export enum DeploymentOptions {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
  AUTOMATED = 'automated',
  TRADITIONAL = 'traditional',
  DOCKER = 'docker',
  KUBERNETES = 'kubernetes',
  SERVERLESS = 'serverless',
  AWS = 'aws',
  GOOGLE = 'google',
  AZURE = 'azure',
  VERCEL = 'vercel',
  RENDER = 'render',
  NETLIFY = 'netlify',
  HEROKU = 'heroku',
  FIREBASE = 'firebase',
  CLOUDFLARE = 'cloudflare',
  DIGITALOCEAN = 'digital-ocean',
  CUSTOM = 'custom',
  GITHUB_ACTIONS = 'github-actions',
  GITLAB = 'gitlab',
  CIRCLECI = 'circleci',
  TRAVIS = 'travis',
  BITBUCKET = 'bitbucket',
  JENKINS = 'jenkins',
  AZURE_DEVOPS = 'azure-devops',
  GITLAB_CI = 'gitlab-ci',
}

export enum DeploymentFeatures {
  CLOUD_PROVIDER = 'cloud-provider',
  DEPLOYMENT_STRATEGY = 'deployment-strategy',
  SCALING_STRATEGY = 'scaling-strategy',
  CLOUD_PROVIDER_TYPE = 'cloud-provider-type',
}

export enum CodeConsistencyFeatures {
  LINTING = 'linting',
  FORMATTING = 'formatting',
  GIT_HOOKS = 'git-hooks',
  COMMIT_MESSAGES = 'commit-messages',
}

export enum CodeConsistencyOptions {
  HUSKY = 'husky',
  LEFTHOOK = 'left-hook',
  ESLINT = 'eslint',
  PRETTIER = 'prettier',
  COMMIT_LINT = 'commit-lint',
}
