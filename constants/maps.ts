import { BackendFeatures, BackendLibraries, CodeConsistencyFeatures, CodeConsistencyOptions, DeploymentFeatures, DeploymentOptions, FrontendFeatures, FrontendLibraries, Platform } from "./enums";

export const CODE_CONSISTENCY_MAP = new Map<CodeConsistencyFeatures, CodeConsistencyOptions[]>([
  [CodeConsistencyFeatures.LINTING, [
    CodeConsistencyOptions.ESLINT
  ]],
  [CodeConsistencyFeatures.FORMATTING, [
    CodeConsistencyOptions.PRETTIER
  ]],
  [CodeConsistencyFeatures.GIT_HOOKS, [
    CodeConsistencyOptions.HUSKY,
    CodeConsistencyOptions.LEFTHOOK
  ]],
  [CodeConsistencyFeatures.COMMIT_MESSAGES, [
    CodeConsistencyOptions.COMMIT_LINT
  ]]
]);

export const DEPLOYMENT_MAP = new Map<DeploymentFeatures, DeploymentOptions[]>([
  [DeploymentFeatures.CLOUD_PROVIDER, [
    DeploymentOptions.AWS,
    DeploymentOptions.GOOGLE,
    DeploymentOptions.AZURE,
    DeploymentOptions.VERCEL,
    DeploymentOptions.RENDER,
    DeploymentOptions.NETLIFY,
    DeploymentOptions.HEROKU,
    DeploymentOptions.FIREBASE,
    DeploymentOptions.CLOUDFLARE,
    DeploymentOptions.DIGITALOCEAN,
    DeploymentOptions.CUSTOM
  ]],
  [DeploymentFeatures.DEPLOYMENT_STRATEGY, [
    DeploymentOptions.AUTOMATED,
    DeploymentOptions.DOCKER,
    DeploymentOptions.KUBERNETES,
    DeploymentOptions.SERVERLESS
  ]],
  [DeploymentFeatures.SCALING_STRATEGY, [
    DeploymentOptions.HORIZONTAL,
    DeploymentOptions.VERTICAL
  ]],
  [DeploymentFeatures.CLOUD_PROVIDER_TYPE, [
    DeploymentOptions.TRADITIONAL,
    DeploymentOptions.AUTOMATED
  ]]
]);

export const BACKEND_MAP = new Map<BackendFeatures, BackendLibraries[]>([
  [BackendFeatures.LANGUAGE, [BackendLibraries.JAVASCRIPT, BackendLibraries.TYPESCRIPT]],
  [BackendFeatures.FRAMEWORK, [BackendLibraries.EXPRESS, BackendLibraries.NEST, BackendLibraries.DENO, BackendLibraries.BUN, BackendLibraries.CUSTOM]],
  [BackendFeatures.ORM, [BackendLibraries.PRISMA, BackendLibraries.DRIZZLE, BackendLibraries.MONGOOSE, BackendLibraries.CUSTOM]],
  [BackendFeatures.DATABASE, [BackendLibraries.POSTGRES, BackendLibraries.MONGODB, BackendLibraries.MYSQL, BackendLibraries.SQLITE, BackendLibraries.REDIS, BackendLibraries.CUSTOM]],
  [BackendFeatures.API_STRUCTURE, [BackendLibraries.REST, BackendLibraries.APOLLO_GRAPHQL, BackendLibraries.SOCKET_IO, BackendLibraries.TRPC]],

  [BackendFeatures.TESTING, [BackendLibraries.VITEST, BackendLibraries.CUSTOM, BackendLibraries.FAKER]],
  [BackendFeatures.VALIDATION, [BackendLibraries.YUP, BackendLibraries.ZOD, BackendLibraries.CUSTOM]],
  [BackendFeatures.AUTHENTICATION, [BackendLibraries.CLERK, BackendLibraries.FIREBASE_AUTH, BackendLibraries.CUSTOM]],
  [BackendFeatures.MEDIA_SERVER, [BackendLibraries.AWS_S3, BackendLibraries.CLOUDINARY, BackendLibraries.CUSTOM, BackendLibraries.SELF, BackendLibraries.FIREBASE_CLOUD_STORAGE]],
  [BackendFeatures.DOCUMENTATION, [BackendLibraries.SWAGGER, BackendLibraries.CUSTOM]],
])

export const PLATFORM_MAP = new Map<Platform, FrontendLibraries[]>([
  [Platform.WEB, [FrontendLibraries.NEXT, FrontendLibraries.REACT, FrontendLibraries.HYDROGEN]],
  [Platform.DESKTOP_BASED_CROSS_PLATFORM, [FrontendLibraries.ELECTRON, FrontendLibraries.TAURI]],
  [Platform.MOBILE_BASED_CROSS_PLATFORM, [FrontendLibraries.REACT_NATIVE]],
])

// Frontend Map remains unchanged
export const FRONTEND_MAP = new Map<FrontendFeatures, FrontendLibraries[]>([
  [FrontendFeatures.LANGUAGE, [FrontendLibraries.JAVASCRIPT, FrontendLibraries.TYPESCRIPT]],
  [FrontendFeatures.FRAMEWORK, [
    FrontendLibraries.NEXT,
    FrontendLibraries.REACT,
    FrontendLibraries.REACT_NATIVE,
    FrontendLibraries.HYDROGEN,
    FrontendLibraries.TAURI,
    FrontendLibraries.ELECTRON
  ]],
  [FrontendFeatures.BUNDLER, [FrontendLibraries.VITE, FrontendLibraries.DEFAULT_BUNDLER]],

  [FrontendFeatures.CSS, [FrontendLibraries.TAILWIND_CSS, FrontendLibraries.VANILLA_CSS]],
  [FrontendFeatures.API_STRUCTURE, [FrontendLibraries.REST, FrontendLibraries.APOLLO_GRAPHQL, FrontendLibraries.SOCKET_IO]],
  [FrontendFeatures.DATA_FETCHING, [FrontendLibraries.REACT_QUERY, FrontendLibraries.SWR]],
  [FrontendFeatures.STATE_MANAGEMENT, [FrontendLibraries.REDUX, FrontendLibraries.ZUSTAND, FrontendLibraries.REACT_CONTEXT]],
  [FrontendFeatures.FORM_HANDLING, [FrontendLibraries.REACT_HOOK_FORM, FrontendLibraries.TANSTACK_FORM, FrontendLibraries.CUSTOM, FrontendLibraries.FORMIK]],
  [FrontendFeatures.TESTING, [FrontendLibraries.VITEST, FrontendLibraries.PLAYWRIGHT, FrontendLibraries.CYPRESS, FrontendLibraries.REACT_TESTING_LIBRARY, FrontendLibraries.CUSTOM, FrontendLibraries.FAKER]],
  [FrontendFeatures.VALIDATION, [FrontendLibraries.YUP, FrontendLibraries.ZOD, FrontendLibraries.CUSTOM]],
  [FrontendFeatures.AUTHENTICATION, [FrontendLibraries.CLERK, FrontendLibraries.NEXT_AUTH, FrontendLibraries.FIREBASE_AUTH, FrontendLibraries.CUSTOM]],
  [FrontendFeatures.UI_LIBRARIES, [FrontendLibraries.SHADCN, FrontendLibraries.MUI, FrontendLibraries.CUSTOM]],
  [FrontendFeatures.STYLING, [FrontendLibraries.SWIPER, FrontendLibraries.LOTTIE, FrontendLibraries.REACT_ICONS, FrontendLibraries.FRAMER, FrontendLibraries.MOTION, FrontendLibraries.CHART_JS, FrontendLibraries.TYPE_ANIMATION, FrontendLibraries.SCROLL_FEED, FrontendLibraries.REACT_FLOW, FrontendLibraries.REACT_VERTICAL_TIMELINE_COMPONENT]],
  [FrontendFeatures.DOCUMENTATION, [FrontendLibraries.STORY_BOOK, FrontendLibraries.CUSTOM]],
]);