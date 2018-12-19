import { browser } from 'protractor';
const EC = browser.ExpectedConditions;

export default class ElementHelper{
    constructor(){}
    waitForPresent(ele){
         return browser.wait(EC.presenceOf(ele));
    }

    waitForDisplay(ele){
        return browser.wait(ele.isDisplayed());
    }

    waitForLoader(ele){
        browser.wait(EC.visibilityOf(element(by.css(''))));
        browser.wait(EC.visibilityOf($(by.css(''))));

    }

}