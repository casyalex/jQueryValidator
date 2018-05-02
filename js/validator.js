$(function(){
    var Validator = function(val,rule){
        this.is_valid = function(){

        }
        this.validate_max = function(){
            val = parseFloat(val);
            return val <= rule.max;
        }
        this.validate_min = function () {
            val = parseFloat(val);
            return val >= rule.min;
        }
        this.validate_maxlength = function () {
            val = val.toString();
            return val.length <= rule.maxlength;
        }
    }
    window.Validator=Validator;
});