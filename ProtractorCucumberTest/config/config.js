const path = require("path");
const jsonReports = process.cwd()+"reports/json";
const Reporter = require("../support/reporter");
const reporter = require("cucumberjs-allure-reporter");


exports.config = {

    allScriptsTimeout: 6000000,
    getPageTimeout: 6000000,
    JasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 300000
    },
    seleniumAddress: "http://localhost:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: true,
    capabilities: {
        browserName: process.env.TEST_BROWSER_NAME || "chrome",
        version: 68x64,
        chromeOptions: {
            args: ['start-maximized'],
            useAutomationExtension: false
        }
    },

    plugins: [
        {
            package: 'protractor-multiple-cucumber-html-reporter-plgin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true
            }
        }
    ],
    directConnect: true,
    framework: 'jasmime2',
    //framework: 'custom',
    //frameworkPath: require.resolve("protractor-cucumber-framework"),
    //specs: ["test1.feature"],
    //exclude: ["test2.feature"],
    //resultJsonOutputFile: "../reports/json/protractor_report.json",
    exclude: ['stepdef/exclude1.js','stepdef/exclude2.js'],

    suites:{
        "test1" : ['stepdef/test1.js','stepdef/test2.js'],
        "test3" : ['stepdef/test3.js','stepdef/test4.js']
    },
    params:{
        functionUtility: require('./util/testutil.js'),
        selectors: require('./util/selectedFields.json'),
        baseUrl: 'https://www.google.com'
    },
    onPrepare: function(){
        global.object = global.paramas;
        global.selectors = onject.selectors;
        // browser.ignoreSynchronization = true;
        // browser.iggnoreUncaughtExceptions = true;
        // browser.manage().window().maximize();
        // require('babel-register');
        // Reporter.createDirectory(jsonReports);
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(function(done)
        {
            browser.takeScreenshot().then(function(png){
                allure.createAttachment('screenshot',function(){
                    return new Buffer(png, 'base64')
                },'image/png')();
                done();
                })
            });
        }
    },

    cucumberOpts:
    {

      strict: true,
      format: ['json:../reports/json/cucumber-report.json'],
      require: ["../stepdef/*.js",""]
      tags:"@test",
      profile:false,
      'no-source': true

    },

    onComplete: function(){
    Reporter.createHTMLReport();
    Reporter.createAllureXML();
}
}