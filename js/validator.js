$(function(){
    var Validator = function(val,rule){
        this.is_valid = function(new_val){
            var attr;
            if(new_val != undefined){
                val = new_val;
            }

            if(!rule.required && !val){
                return true;
            }
            for(attr in rule){
                if(attr === 'required')
                continue;
               var r = this['validate_'+attr]();
               if(!r) return false;
            }
            return true;
        }

        this.validate_max = function(){
            pre_max_min();
            return val <= rule.max;
        }

        this.validate_min = function(){
            pre_max_min();
            return val >= rule.min;
        }

        this.validate_maxlength = function(){
            prelength();
            return val.length <= rule.maxlength;
        }

        this.validate_minlength = function(){
            prelength();
            return val.length >= rule.minlength;
        }

        this.validate_numeric = function(){
            return $.isNumeric(val);
        }

        this.validate_required = function(){
            var real = $.trim(val);
            if (!real && real !== 0) {
                return false;
            }
            return true;
        }

        this.validate_pattern =function(){
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }

        /*转数值 */
        function pre_max_min(){
            val = parseFloat(val);
        }
        /*转字符串 */
        function prelength(){
            val = val.toString();
        }
    }
    window.Validator=Validator;
});