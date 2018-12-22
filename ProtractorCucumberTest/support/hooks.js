import {browser} from "protractor";

const { BeforeAll, Before, After, AfterAll } = require("cucumber");
var { setDefaultTimeout} = require('cucumber');

BeforeAll({timeout:1000000}, function(){
           setDefaultTimeout(1000000);
           browser.waitForAngularEnabled(true);
           browser.ignoreSynchronization = true;
           return browser.get('https://angular.io');
    });


AfterAll (function(){
    //browser.driver.get(object.looOutURL);
    browser.driver.close();
})


After({timeout:1000000}, function(){
    const attach = this.attach;
    return browser.takeScreenshot().then(function(png) {
        const decodedImage = new Buffer(png,'base64');
        return attach(decodedImage,"image/png");
    });
});
