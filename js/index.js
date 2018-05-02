$(function(){
    var tests = new Validator('abcefgff', {
        max: 10,
        min: 5,
        maxlength: 6
    });

    // var result = tests.validate_max();
    // var result = tests.validate_min();
    var result = tests.validate_maxlength();
    console.log(result);
});