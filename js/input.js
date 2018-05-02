$(function(){
    window.Input = function(selector){
        var $ele,
            $error_ele,
            rule = {
                required: true
            },
            self = this;

        this.load_validator = function (){
            var val=this.get_val();
            this.validator = new Validator(val,rule);
        }

        this.get_val = function (){
            return $ele.val();
        }

        function init(){
            find_ele();
            get_error_ele();
            parse_rule();
            self.load_validator();
            listen();
        };

        function listen(){
            $ele.on('keyup',function (){
               var val = self.validator.is_valid(self.get_val());
               if(!val){
                   $error_ele.show();
               }else{
                   $error_ele.hide();
               }
            })
        }

        function get_error_ele(){
            $error_ele = $(get_error_selector());
        }

        function get_error_selector() {
            return '#' + $ele.attr('name') + '-input-error';
        }
       
        function find_ele(){
            if (selector instanceof jQuery) {
                $ele = selector;
            } else {
                $ele = $(selector);
            }
        }

        function parse_rule(){
            var rule_string = $ele.data('rule');
            if (!rule_string) return;

            var rule_arr=rule_string.split('|');
            for (let i = 0; i < rule_arr.length; i++) {
                var item = rule_arr[i];
                var item_arr = item.split(':');
                rule[item_arr[0]]=JSON.parse(item_arr[1]);
            }
        };
        
        init();
    }
});