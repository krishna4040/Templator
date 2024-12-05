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
  EXPO = 'expo'
}

// Frontend Map remains unchanged
export const FRONTEND_MAP = new Map<FrontendFeatures, FrontendLibraries[]>([
  [FrontendFeatures.LANGUAGE, [FrontendLibraries.JAVASCRIPT, FrontendLibraries.TYPESCRIPT]],
  [FrontendFeatures.DATA_FETCHING, [FrontendLibraries.REACT_QUERY, FrontendLibraries.SWR]],
  [FrontendFeatures.API_STRUCTURE, [FrontendLibraries.REST, FrontendLibraries.APOLLO_GRAPHQL, FrontendLibraries.SOCKET_IO]],
  [FrontendFeatures.FORM_HANDLING, [FrontendLibraries.REACT_HOOK_FORM, FrontendLibraries.TANSTACK_FORM, FrontendLibraries.CUSTOM, FrontendLibraries.FORMIK]],
  [FrontendFeatures.STATE_MANAGEMENT, [FrontendLibraries.REDUX, FrontendLibraries.ZUSTAND, FrontendLibraries.REACT_CONTEXT]],
  [FrontendFeatures.CSS, [FrontendLibraries.TAILWIND_CSS, FrontendLibraries.VANILLA_CSS]],
  [FrontendFeatures.TESTING, [FrontendLibraries.VITEST, FrontendLibraries.PLAYWRIGHT, FrontendLibraries.CYPRESS, FrontendLibraries.REACT_TESTING_LIBRARY, FrontendLibraries.CUSTOM]],
  [FrontendFeatures.UI_LIBRARIES, [FrontendLibraries.SHADCN, FrontendLibraries.MUI, FrontendLibraries.CUSTOM]],
  [FrontendFeatures.VALIDATION, [FrontendLibraries.YUP, FrontendLibraries.ZOD, FrontendLibraries.CUSTOM]],
  [FrontendFeatures.BUNDLER, [FrontendLibraries.VITE, FrontendLibraries.DEFAULT_BUNDLER]],
  [FrontendFeatures.FRAMEWORK, [
    FrontendLibraries.NEXT,
    FrontendLibraries.REACT,
    FrontendLibraries.REACT_NATIVE,
    FrontendLibraries.HYDROGEN,
    FrontendLibraries.TAURI,
    FrontendLibraries.ELECTRON
  ]],
  [FrontendFeatures.AUTHENTICATION, [FrontendLibraries.CLERK, FrontendLibraries.NEXT_AUTH, FrontendLibraries.FIREBASE_AUTH, FrontendLibraries.CUSTOM]],
  [FrontendFeatures.STYLING, [FrontendLibraries.SWIPER, FrontendLibraries.LOTTIE, FrontendLibraries.REACT_ICONS, FrontendLibraries.FRAMER, FrontendLibraries.MOTION, FrontendLibraries.CHART_JS, FrontendLibraries.TYPE_ANIMATION, FrontendLibraries.SCROLL_FEED, FrontendLibraries.REACT_FLOW, FrontendLibraries.REACT_VERTICAL_TIMELINE_COMPONENT]],
]);

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
  SELF = 'self'
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
  OTHER = 'other'
}

export const BACKEND_MAP = new Map<BackendFeatures, BackendLibraries[]>([
  [BackendFeatures.LANGUAGE, [BackendLibraries.JAVASCRIPT, BackendLibraries.TYPESCRIPT]],
  [BackendFeatures.TESTING, [BackendLibraries.VITEST, BackendLibraries.CUSTOM]],
  [BackendFeatures.VALIDATION, [BackendLibraries.YUP, BackendLibraries.ZOD, BackendLibraries.CUSTOM]],
  [BackendFeatures.FRAMEWORK, [BackendLibraries.EXPRESS, BackendLibraries.NEST, BackendLibraries.DENO, BackendLibraries.BUN, BackendLibraries.CUSTOM]],
  [BackendFeatures.AUTHENTICATION, [BackendLibraries.CLERK, BackendLibraries.FIREBASE_AUTH, BackendLibraries.CUSTOM]],
  [BackendFeatures.ORM, [BackendLibraries.PRISMA, BackendLibraries.DRIZZLE, BackendLibraries.MONGOOSE, BackendLibraries.CUSTOM]],
  [BackendFeatures.DATABASE, [BackendLibraries.POSTGRES, BackendLibraries.MONGODB, BackendLibraries.MYSQL, BackendLibraries.SQLITE, BackendLibraries.REDIS, BackendLibraries.CUSTOM]],
  [BackendFeatures.API_STRUCTURE, [BackendLibraries.REST, BackendLibraries.APOLLO_GRAPHQL, BackendLibraries.SOCKET_IO, BackendLibraries.TRPC]],
  [BackendFeatures.MEDIA_SERVER, [BackendLibraries.AWS_S3, BackendLibraries.CLOUDINARY, BackendLibraries.CUSTOM, BackendLibraries.SELF, BackendLibraries.FIREBASE_CLOUD_STORAGE]],
])

export const PLATFORM_MAP = new Map<Platform, FrontendLibraries[]>([
  [Platform.WEB, [FrontendLibraries.NEXT, FrontendLibraries.REACT, FrontendLibraries.HYDROGEN, FrontendLibraries.VITE]],
  [Platform.DESKTOP_BASED_CROSS_PLATFORM, [FrontendLibraries.REACT_NATIVE, FrontendLibraries.EXPO]],
  [Platform.MOBILE_BASED_CROSS_PLATFORM, [FrontendLibraries.ELECTRON, FrontendLibraries.TAURI]],
])
