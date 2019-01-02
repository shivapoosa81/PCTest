import {browser} from 'protractor';
import { Given, When, Then, And, BeforeAll, After, AfterAll, setDefaultTimeOut} from 'cucumber';
const chai = require("chai");
require("chai").use(require("chai-as-promised"));
const expect = require('chai').expect;

import * as pageObject from "../pages/angularPO.js";

Given(/^angular URL$/, function(){
pageObject.login();

});

Then(/^check label is available$/, async function(){
///console.log(pageObject.getLabel());

return expect(pageObject.getLabel()).to.eventually.equal("GET STARTED");
});