$(function(){
    // var tests = new Validator('abc1', {
    //     max: 10,
    //     min: 5,
    //     maxlength: 6,
    //     pattern:'^[a-zA-Z0-9]*$'
    // });

    // var result = tests.validate_max();
    // var result = tests.validate_min();
    // var result = tests.validate_maxlength();
    // var result = tests.validate_numeric();
    // var result = tests.validate_required();
    // var result = tests.validate_pattern();
    // console.log(result);


    var $inputs = $('[data-rule]');
    var $form = $('#signup');
    var inputs = [];
    $inputs.each(function (index,node){
        inputs.push(new Input(node));
    })

    $form.on('submit',function(ev){
        ev.preventDefault();
        $inputs.trigger('keyup');
        for(var i=0;i<inputs.length;i++){
            var item=inputs[i];
            var r = item.validator.is_valid();

            if(!r){
                alert('不ok');
                return;
            }
        }
        alert('objk');
    })
});