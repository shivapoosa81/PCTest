const path = require("path");

exports.config = {

    params:{
        javaScripttility: require('../utils/JavaScriptUtility.js'),
        selectors: require("../selectors/selectorFields.json"),
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
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../features/*.feature"],

    onPrepare: function(){
        global.object = browser.params;
        global.selectors = object.selectors;
        global.pageObject = object.pageObject;
        console.log(selectors.s1);
        browser.ignoreSynchronization = true;
        browser.iggnoreUncaughtExceptions = true;
        browser.manage().window().maximize();
        require('babel-register');
    },

    plugins: [
        {
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                displayDuration: true,
                durationInMS: true
            }
        }
    ],

    cucumberOpts: {

    strict: true,
    format: ["json:../ProtractorCucumberTest/reports/json/cucumber-report.json"],
    require: ["../stepdefs/*.js","../support/*.js"],
    tags:"@test",
    profile:false,
    'no-source': true

},

onComplete: function(){

}
}