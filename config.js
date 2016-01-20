System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: false,
  typescriptOptions: {
    "tsconfig": "tsconfig.json",
    "typeCheck": "strict"
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "src": {
      "main": "main",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.js": {
          "loader": "ts"
        },
        "*.css": {
          "loader": "css"
        }
      }
    }
  },

  map: {
    "testcheck": "npm:testcheck@0.1.4",
    "toastr": "github:CodeSeven/toastr@2.1.2",
    "ts": "github:frankwallis/plugin-typescript@2.4.7",
    "github:CodeSeven/toastr@2.1.2": {
      "css": "github:systemjs/plugin-css@0.1.20",
      "jquery": "github:components/jquery@2.2.0"
    },
    "github:frankwallis/plugin-typescript@2.4.7": {
      "typescript": "npm:typescript@1.7.5"
    }
  }
});
