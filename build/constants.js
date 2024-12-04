"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BACKEND_MAP = exports.BackendFeatures = exports.BackendLibraries = exports.FRONTEND_MAP = exports.FrontendLibraries = exports.FrontendFeatures = exports.MonorepoTool = exports.PackageManager = exports.ProjectArchitecture = exports.Platform = exports.ProjectType = void 0;
var ProjectType;
(function (ProjectType) {
    ProjectType["BLOG_APP"] = "blog-app";
    ProjectType["LANDING_PAGE"] = "landing-page";
    ProjectType["SASS"] = "sass";
    ProjectType["E_COMMERCE"] = "e-commerce";
    ProjectType["DEFAULT"] = "default";
    ProjectType["DASHBOARD"] = "dashboard";
})(ProjectType || (exports.ProjectType = ProjectType = {}));
var Platform;
(function (Platform) {
    Platform["WEB"] = "web";
    Platform["ANDROID"] = "android";
    Platform["IOS"] = "ios";
    Platform["CROSS_PLATFORM"] = "cross-platform";
    Platform["DESKTOP"] = "desktop";
})(Platform || (exports.Platform = Platform = {}));
var ProjectArchitecture;
(function (ProjectArchitecture) {
    ProjectArchitecture["FRONTEND_ONLY"] = "frontend-only";
    ProjectArchitecture["BACKEND_ONLY"] = "backend-only";
    ProjectArchitecture["FRONTEND_BACKEND_MONOLITHIC"] = "frontend-backend-monolithic";
    ProjectArchitecture["MICROSERVICE_MONOREPO"] = "microservice-monorepo";
    ProjectArchitecture["MICROSERVICE_POLY_REPO"] = "microservice-poly-repo";
})(ProjectArchitecture || (exports.ProjectArchitecture = ProjectArchitecture = {}));
var PackageManager;
(function (PackageManager) {
    PackageManager["NPM"] = "npm";
    PackageManager["PNPM"] = "pnpm";
    PackageManager["YARN"] = "yarn";
})(PackageManager || (exports.PackageManager = PackageManager = {}));
var MonorepoTool;
(function (MonorepoTool) {
    MonorepoTool["NIX"] = "nix";
    MonorepoTool["TURBO_REPO"] = "turbo-repo";
})(MonorepoTool || (exports.MonorepoTool = MonorepoTool = {}));
var FrontendFeatures;
(function (FrontendFeatures) {
    FrontendFeatures["LANGUAGE"] = "language";
    FrontendFeatures["STYLING"] = "styling";
    FrontendFeatures["DATA_FETCHING"] = "data-fetching";
    FrontendFeatures["UI_LIBRARIES"] = "ui-libraries";
    FrontendFeatures["FORM_HANDLING"] = "form-handling";
    FrontendFeatures["VALIDATION"] = "validation";
    FrontendFeatures["STATE_MANAGEMENT"] = "state-management";
    FrontendFeatures["TESTING"] = "testing";
    FrontendFeatures["AUTHENTICATION"] = "authentication";
    FrontendFeatures["FRAMEWORK"] = "framework";
    FrontendFeatures["BUNDLER"] = "bundler";
    FrontendFeatures["API_STRUCTURE"] = "api-structure";
})(FrontendFeatures || (exports.FrontendFeatures = FrontendFeatures = {}));
var FrontendLibraries;
(function (FrontendLibraries) {
    FrontendLibraries["TYPESCRIPT"] = "typescript";
    FrontendLibraries["JAVASCRIPT"] = "javascript";
    FrontendLibraries["TAILWIND_CSS"] = "tailwind-css";
    FrontendLibraries["VANILLA_CSS"] = "vanilla-css";
    FrontendLibraries["REACT_QUERY"] = "react-query";
    FrontendLibraries["SWR"] = "swr";
    FrontendLibraries["REACT_ROUTER"] = "react-router-dom";
    FrontendLibraries["SHADCN"] = "shadcn";
    FrontendLibraries["MUI"] = "MUI";
    FrontendLibraries["REACT_ADMIN"] = "react-admin";
    FrontendLibraries["REACT_HOOK_FORM"] = "react-hook-form";
    FrontendLibraries["ZOD"] = "zod";
    FrontendLibraries["YUP"] = "yup";
    FrontendLibraries["REDUX"] = "redux";
    FrontendLibraries["ZUSTAND"] = "zustand";
    FrontendLibraries["REACT_CONTEXT"] = "react-context";
    FrontendLibraries["VITEST"] = "vitest";
    FrontendLibraries["PLAYWRIGHT"] = "playwright";
    FrontendLibraries["CYPRESS"] = "cypress";
    FrontendLibraries["REACT_TESTING_LIBRARY"] = "react-testing-library";
    FrontendLibraries["TANSTACK_ROUTER"] = "tanstack-router";
    FrontendLibraries["TANSTACK_FORM"] = "tanstack-form";
    FrontendLibraries["FORMIK"] = "formik";
    FrontendLibraries["NEXT"] = "next";
    FrontendLibraries["REACT"] = "react";
    FrontendLibraries["REACT_NATIVE"] = "react-native";
    FrontendLibraries["HYDROGEN"] = "hydrogen";
    FrontendLibraries["VUE"] = "vue";
    FrontendLibraries["PREACT"] = "preact";
    FrontendLibraries["LIT"] = "lit";
    FrontendLibraries["SVELTE"] = "svelte";
    FrontendLibraries["SOLID"] = "solid";
    FrontendLibraries["QUICK"] = "quick";
    FrontendLibraries["ANGULAR"] = "angular";
    FrontendLibraries["ELECTRON"] = "electron";
    FrontendLibraries["CUSTOM"] = "custom";
    FrontendLibraries["VITE"] = "vite";
    FrontendLibraries["TAURI"] = "tauri";
    FrontendLibraries["CLERK"] = "clerk";
    FrontendLibraries["NEXT_AUTH"] = "next-auth";
    FrontendLibraries["FIREBASE_AUTH"] = "firebase-auth";
    FrontendLibraries["DEFAULT_BUNDLER"] = "default-bundler";
    FrontendLibraries["SOCKET_IO"] = "socket-io";
    FrontendLibraries["AXIOS"] = "axios";
    FrontendLibraries["APOLLO_GRAPHQL"] = "apollo-graphql";
})(FrontendLibraries || (exports.FrontendLibraries = FrontendLibraries = {}));
// Frontend Map remains unchanged
exports.FRONTEND_MAP = new Map([
    [FrontendFeatures.LANGUAGE, [FrontendLibraries.JAVASCRIPT, FrontendLibraries.TYPESCRIPT]],
    [FrontendFeatures.DATA_FETCHING, [FrontendLibraries.REACT_QUERY, FrontendLibraries.SWR]],
    [FrontendFeatures.API_STRUCTURE, [FrontendLibraries.AXIOS, FrontendLibraries.APOLLO_GRAPHQL, FrontendLibraries.SOCKET_IO]],
    [FrontendFeatures.FORM_HANDLING, [FrontendLibraries.REACT_HOOK_FORM, FrontendLibraries.TANSTACK_FORM, FrontendLibraries.CUSTOM]],
    [FrontendFeatures.STATE_MANAGEMENT, [FrontendLibraries.REDUX, FrontendLibraries.ZUSTAND, FrontendLibraries.REACT_CONTEXT]],
    [FrontendFeatures.STYLING, [FrontendLibraries.TAILWIND_CSS, FrontendLibraries.VANILLA_CSS]],
    [FrontendFeatures.TESTING, [FrontendLibraries.VITEST, FrontendLibraries.PLAYWRIGHT, FrontendLibraries.CYPRESS, FrontendLibraries.REACT_TESTING_LIBRARY, FrontendLibraries.CUSTOM]],
    [FrontendFeatures.UI_LIBRARIES, [FrontendLibraries.SHADCN, FrontendLibraries.MUI, FrontendLibraries.CUSTOM]],
    [FrontendFeatures.VALIDATION, [FrontendLibraries.YUP, FrontendLibraries.ZOD, FrontendLibraries.CUSTOM]],
    [FrontendFeatures.BUNDLER, [FrontendLibraries.VITE, FrontendLibraries.DEFAULT_BUNDLER]],
    [FrontendFeatures.FRAMEWORK, [
            FrontendLibraries.NEXT,
            FrontendLibraries.ANGULAR,
            FrontendLibraries.ELECTRON,
            FrontendLibraries.REACT,
            FrontendLibraries.REACT_NATIVE,
            FrontendLibraries.PREACT,
            FrontendLibraries.ANGULAR,
            FrontendLibraries.LIT,
            FrontendLibraries.SVELTE,
            FrontendLibraries.SOLID,
            FrontendLibraries.TAURI,
            FrontendLibraries.HYDROGEN
        ]],
    [FrontendFeatures.AUTHENTICATION, [FrontendLibraries.CLERK, FrontendLibraries.NEXT_AUTH, FrontendLibraries.FIREBASE_AUTH, FrontendLibraries.CUSTOM]],
]);
var BackendLibraries;
(function (BackendLibraries) {
    BackendLibraries["EXPRESS"] = "express";
    BackendLibraries["NEST"] = "nest";
    BackendLibraries["BULL_MQ"] = "bull-mq";
    BackendLibraries["ZOD"] = "zod";
    BackendLibraries["YUP"] = "yup";
    BackendLibraries["TYPESCRIPT"] = "typescript";
    BackendLibraries["JAVASCRIPT"] = "javascript";
    BackendLibraries["CLERK"] = "clerk";
    BackendLibraries["FIREBASE_AUTH"] = "firebase-auth";
    BackendLibraries["DENO"] = "deno";
    BackendLibraries["BUN"] = "bun";
    BackendLibraries["CUSTOM"] = "custom";
    BackendLibraries["VITEST"] = "vitest";
    BackendLibraries["PRISMA"] = "prisma";
    BackendLibraries["DRIZZLE"] = "drizzle";
    BackendLibraries["MONGOOSE"] = "mongoose";
    BackendLibraries["POSTGRES"] = "postgres";
    BackendLibraries["MONGODB"] = "mongodb";
    BackendLibraries["MYSQL"] = "mysql";
    BackendLibraries["SQLITE"] = "sqlite";
    BackendLibraries["REDIS"] = "redis";
    BackendLibraries["SOCKET_IO"] = "socket-io";
    BackendLibraries["APOLLO_GRAPHQL"] = "apollo-graphql";
    BackendLibraries["REST"] = "rest";
    BackendLibraries["TRPC"] = "TRPC";
    BackendLibraries["FIREBASE_CLOUD_STORAGE"] = "firebase-cloud-storage";
    BackendLibraries["CLOUDINARY"] = "cloudinary";
    BackendLibraries["AWS_S3"] = "aws-s3";
    BackendLibraries["SELF"] = "self";
})(BackendLibraries || (exports.BackendLibraries = BackendLibraries = {}));
var BackendFeatures;
(function (BackendFeatures) {
    BackendFeatures["LANGUAGE"] = "language";
    BackendFeatures["VALIDATION"] = "validation";
    BackendFeatures["TESTING"] = "testing";
    BackendFeatures["AUTHENTICATION"] = "authentication";
    BackendFeatures["FRAMEWORK"] = "framework";
    BackendFeatures["ORM"] = "orm";
    BackendFeatures["DATABASE"] = "database";
    BackendFeatures["API_STRUCTURE"] = "api-structure";
    BackendFeatures["MEDIA_SERVER"] = "media-server";
    BackendFeatures["OTHER"] = "other";
})(BackendFeatures || (exports.BackendFeatures = BackendFeatures = {}));
exports.BACKEND_MAP = new Map([
    [BackendFeatures.LANGUAGE, [BackendLibraries.JAVASCRIPT, BackendLibraries.TYPESCRIPT]],
    [BackendFeatures.TESTING, [BackendLibraries.VITEST, BackendLibraries.CUSTOM]],
    [BackendFeatures.VALIDATION, [BackendLibraries.YUP, BackendLibraries.ZOD, BackendLibraries.CUSTOM]],
    [BackendFeatures.FRAMEWORK, [BackendLibraries.EXPRESS, BackendLibraries.NEST, BackendLibraries.DENO, BackendLibraries.BUN, BackendLibraries.CUSTOM]],
    [BackendFeatures.AUTHENTICATION, [BackendLibraries.CLERK, BackendLibraries.FIREBASE_AUTH, BackendLibraries.CUSTOM]],
    [BackendFeatures.ORM, [BackendLibraries.PRISMA, BackendLibraries.DRIZZLE, BackendLibraries.MONGOOSE, BackendLibraries.CUSTOM]],
    [BackendFeatures.DATABASE, [BackendLibraries.POSTGRES, BackendLibraries.MONGODB, BackendLibraries.MYSQL, BackendLibraries.SQLITE, BackendLibraries.REDIS, BackendLibraries.CUSTOM]],
    [BackendFeatures.API_STRUCTURE, [BackendLibraries.REST, BackendLibraries.APOLLO_GRAPHQL, BackendLibraries.SOCKET_IO, BackendLibraries.TRPC]],
    [BackendFeatures.MEDIA_SERVER, [BackendLibraries.AWS_S3, BackendLibraries.CLOUDINARY, BackendLibraries.CUSTOM, BackendLibraries.SELF, BackendLibraries.FIREBASE_CLOUD_STORAGE]],
]);
