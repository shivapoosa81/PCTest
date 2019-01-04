
var using = require('jasmine-data-provider');
describe('test',function() {

    var recon = {'desc1': {"acnumber": "1"}};
    using(recon, function (reconData, desc) {
        it(desc, function () {
            console.log(reconData.acnumber);
            console.log();
        });
    });
});
