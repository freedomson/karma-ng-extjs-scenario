module.exports = function(config) {
  config.set({
 
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../../../',
 
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    plugins: [
        'karma-ng-extjs-scenario'
        // , 'karma-ng-scenario'
        , 'karma-jasmine'
        , 'karma-chrome-launcher'
        , 'karma-firefox-launcher'],
    frameworks: [
        // 'ng-midway-tester'
        // 'ng-scenario'        
       'ng-extjs-scenario'
    ]
    ,
            
    urlRoot : '/__karma/', 
    // list of files / patterns to load in the browser
    files : [
	'src/test/webapp/**/*.js'//,
        //'node_modules/ng-midway-tester/src/ngMidwayTester.js'
	],
 
    proxies : { '/': 'http://localhost:7070/'},   
 
    // list of files to exclude
    exclude: [
      '**/karma.*.js'
    ],
 
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
 
    },
 
    // test results reporter to use
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
 
    // web server port
    port: 9876,
 
    // enable / disable colors in the output (reporters and logs)
    colors: true,
 
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
 
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
 
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // Chrome
    browsers: ['chrome_without_security'/*,'Firefox'*/],
    customLaunchers: {
        chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security']
        }
    },  
 
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};

