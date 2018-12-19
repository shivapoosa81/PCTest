module.exports = {
    isEnable: function(selector){
        if($(selector).hasClass('disabled') || $(selector).attr('disabled') == 'disabled') {
            return false;
        }
        else {
            return true;
        }
    },

    regExCheck: function(selector,pattern){
        var reg = new RegExp(pattern);
        if(reg.test($(selector).val())){
            return true;
        }
        else{
            return false;
        }

    },

    getTextByCss : function(selector){
        return element(by.css(selector)).getText();
    }


}