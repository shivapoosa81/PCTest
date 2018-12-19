import {browser} from "protractor";

const { BeforeAll, Before, After, AfterAll } = require("cucumber");
var { setDefaultTimeput} = requore('cucumber');
import loginPageObject from '../pages/login.po';

BeforeAll({timeout:1000000}, function(){
           setDefaultTimeput(1000000);
           browser.waitForAngularEnabled(true);
           browser.ignoreSynchronization = true;
           return browser.get('');
    });


AfterAll (function(){
    browser.driver.get(object.looOutURL);
    browser.driver.close();
})


AfterAll({timeout:1000000}, function(){
    const attach = this.attach;
    return browser.takeScreenshot().then(function(png) {

        const decodedImage = new Buffer(png,'base64');
        return attach(decodedImage,"image/png");
    });
});
