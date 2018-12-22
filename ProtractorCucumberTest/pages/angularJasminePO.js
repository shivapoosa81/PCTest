module.exports = {
         login1: function() {
             const EC = protractor.ExpectedConditions;
            console.log("hello....................");
           browser.get(object.baseUrl);
             element(by.css(".button.hero-cta")).click();

        }
}

