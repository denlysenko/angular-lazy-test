System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "externalHelpers": true,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "*": "build/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  bundles: {
    "bundles/main": [
      "components/application/index.js",
      "components/application/config/error-handling.js",
      "components/application/application-controller.js",
      "components/application/config/routing.js",
      "components/application/application-route.js",
      "components/application/stylesheets/application.css!github:systemjs/plugin-css@0.1.20.js",
      "components/application/config/constants.json!github:systemjs/plugin-json@0.1.0.js",
      "components/application/config/states.json!github:systemjs/plugin-json@0.1.0.js",
      "components/application/application.html!github:systemjs/plugin-text@0.0.2.js",
      "components/index-state/index.js",
      "components/index-state/index-state-controller.js",
      "components/index-state/index-route.js",
      "components/index-state/index-state.css!github:systemjs/plugin-css@0.1.20.js",
      "components/index-state/index-state.html!github:systemjs/plugin-text@0.0.2.js",
      "github:systemjs/plugin-text@0.0.2.js",
      "github:systemjs/plugin-text@0.0.2/text.js",
      "github:systemjs/plugin-json@0.1.0.js",
      "github:systemjs/plugin-json@0.1.0/json.js",
      "github:systemjs/plugin-css@0.1.20.js",
      "github:systemjs/plugin-css@0.1.20/css.js",
      "github:ocombe/oclazyload@1.0.9.js",
      "github:ocombe/oclazyload@1.0.9/dist/ocLazyLoad.js",
      "github:christopherthielen/ui-router-extras@0.0.14.js",
      "github:christopherthielen/ui-router-extras@0.0.14/release/ct-ui-router-extras.js",
      "github:angular/bower-angular@1.5.0.js",
      "github:angular/bower-angular@1.5.0/angular.js",
      "github:angular-ui/ui-router@0.2.18.js",
      "github:angular-ui/ui-router@0.2.18/angular-ui-router.js"
    ],
    "bundles/index": [
      "index.js"
    ],
    "bundles/components/articles": [
      "components/articles/index.js",
      "components/articles/articles.css!github:systemjs/plugin-css@0.1.20.js",
      "components/articles/articles-controller.js",
      "components/articles/articles-service.js",
      "components/articles/article-controller.js",
      "components/articles/article-update-controller.js",
      "components/articles/articles-directive.js",
      "components/articles/articles-route.js",
      "components/articles/articles.html!github:systemjs/plugin-text@0.0.2.js",
      "components/articles/article.html!github:systemjs/plugin-text@0.0.2.js",
      "components/articles/article-update.html!github:systemjs/plugin-text@0.0.2.js"
    ],
    "bundles/angular-lazy": [
      "github:matoilic/angular-lazy@0.2.2.js",
      "github:matoilic/angular-lazy@0.2.2/angular-lazy.js",
      "github:matoilic/angular-lazy@0.2.2/component-loader-service.js",
      "github:matoilic/angular-lazy@0.2.2/system-service.js",
      "github:matoilic/angular-lazy@0.2.2/routing-configuration.js"
    ],
    "bundles/lodash": [
      "npm:lodash@4.5.1.js",
      "npm:lodash@4.5.1/lodash.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:buffer@3.6.0.js",
      "npm:process@0.11.2.js",
      "npm:buffer@3.6.0/index.js",
      "npm:process@0.11.2/browser.js",
      "npm:base64-js@0.0.8.js",
      "npm:ieee754@1.1.6.js",
      "npm:isarray@1.0.0.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:isarray@1.0.0/index.js"
    ],
    "bundles/angular-resource": [
      "github:angular/bower-angular-resource@1.5.0.js",
      "github:angular/bower-angular-resource@1.5.0/angular-resource.js"
    ]
  },
  buildCSS: true,

  map: {
    "angular": "github:angular/bower-angular@1.5.0",
    "angular-lazy": "github:matoilic/angular-lazy@0.2.2",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.0",
    "angular-resource": "github:angular/bower-angular-resource@1.5.0",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.18",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "clean-css": "npm:clean-css@3.4.9",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "json": "github:systemjs/plugin-json@0.1.0",
    "lodash": "npm:lodash@4.5.1",
    "oclazyload": "github:ocombe/oclazyload@1.0.9",
    "text": "github:systemjs/plugin-text@0.0.2",
    "ui-router-extras": "github:christopherthielen/ui-router-extras@0.0.14",
    "github:angular-ui/ui-router@0.2.18": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-mocks@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-resource@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:christopherthielen/ui-router-extras@0.0.14": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:matoilic/angular-lazy@0.2.2": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clean-css@3.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@4.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
