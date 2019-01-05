//import {pageObject} from "../pages/angularPO.js"; //does not work in jasmine
const pageObject1 = require("../pages/angularJasminePO");
var rmeote = require("selenium-webdriver/remote");

describe('angular test',function(){

   it('angular web page',function(){
       browser.get(object.baseUrl);
       object.pageObject.login1();
       //pageObject.login();
       pageObject1.login1();

       element.all(by.css("").count().then(function(count){


       }));

       element.all(by.css("").each(function(item){
            expect(item.getText()).to.equal("");

       }));

       browser.setFileDetector(new remote.FileDetector());

       element(by.css("")).getText().then(function (text){
           var temp = text;
       });


   });
});