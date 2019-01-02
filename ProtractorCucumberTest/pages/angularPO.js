import {element} from "protractor";

const EC = browser.ExpectedConditions;

export function login() {
    browser.get(object.baseUrl);
}


export function getLabel(){
     return element(by.css(".card .text-headline")).getText();
}

// export default class angularPO {
//
//         async getLabel(){
//              await element(by.css(".card .text-headline")).getText();
//         }
//
//}