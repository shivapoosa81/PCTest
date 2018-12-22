//import {pageObject} from "../pages/angularPO.js"; //does not work in jasmine
const pageObject1 = require("../pages/angularJasminePO");

describe('angular test',function(){

   it('angular web page',function(){
       browser.get(object.baseUrl);
       object.pageObject.login1();
       //pageObject.login();
       pageObject1.login1();
   });
});