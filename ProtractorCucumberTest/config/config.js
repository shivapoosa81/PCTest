const path = require("path");

exports.config = {

    params:{
        javaScripttility: require('../utils/JavaScriptUtility.js'),
        pageObject: require('../pages/angularJasminePO.js'),
        selectors: require("../selectors/selectorFields.json"),
        search: require("../testdata/search.js"),
        baseUrl: 'https://angular.io/'
    },

    //seleniumAddress: "http://localhost:4444/wd/hub",

    capabilities: {
        browserName: process.env.TEST_BROWSER_NAME || "chrome",
        chromeOptions: {
            args: ['start-maximized'],
            useAutomationExtension: false
        }
    },
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: true,
    allScriptsTimeout: 6000000,
    ignoreUncaughtExceptions: true,
    getPageTimeout: 6000000,
    framework: 'jasmine2',
    //frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../jasmine/*.js"],

    onPrepare: function(){
        //global.browser = browser;
        global.object = browser.params;
        global.selectors = object.selectors;
        console.log(object.search.employees);
        global.pageObject = object.pageObject;
        console.log(selectors.s1);
        browser.ignoreSynchronization = true;
        browser.iggnoreUncaughtExceptions = true;
        browser.manage().window().maximize();
        require('babel-register');

        var AllureReporter = require("jasmine-allure-reporter");
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function(png){
                allure.createAttachment('Screenshot', function(){
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            });
        });
    },


    jasmineNodeOpts: {

        showTiming: true,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 300000

    },

    onComplete: function(){

    }
}