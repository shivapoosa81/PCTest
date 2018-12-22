import {browser} from 'protractor';
import { Given, When, Then, And, BeforeAll, After, AfterAll, setDefaultTimeOut} from 'cucumber';
const chai = require("chai");
require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

import {pageObject} from "../pages/angularPO.js";
const pageObject1 = require("../pages/angularJasminePO");

Given(/^angular URL$/, function(){
console.log(pageObject.login());
console.log(pageObject1.login1());
});

When(/^I search for the label$/, function(){

});

Then(/^check label is available$/,function(){

});