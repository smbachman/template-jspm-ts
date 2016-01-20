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
      "main": "index",
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
    "assert": "github:jspm/nodelibs-assert@0.1.0",
    "testcheck": "npm:testcheck@0.1.4",
    "toastr": "github:CodeSeven/toastr@2.1.2",
    "ts": "github:frankwallis/plugin-typescript@2.4.7",
    "github:CodeSeven/toastr@2.1.2": {
      "css": "github:systemjs/plugin-css@0.1.20",
      "jquery": "github:components/jquery@2.2.0"
    },
    "github:frankwallis/plugin-typescript@2.4.7": {
      "typescript": "npm:typescript@1.7.5"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
