var user_Boolean = false;
var password_Boolean = false;
var varconfirm_Boolean = false;
var Mobile_Boolean = false;
$('.username').blur(function() {
    if ((/^[a-z0-9_-]{3,6}$/).test($(".username").val())) {
        $('.user_tips').html("✔").css("color", "green");
        user_Boolean = true;
    } else {
        $('.user_hint').html("输入错误请输入长度3~6位").css("color", "red");
        user_Boolean = false;
    }
});
// password
$('.reg_password').blur(function() {
    if ((/^[a-z0-9_-]{5,10}$/).test($(".reg_password").val())) {
        $('.password_hint').html("✔").css("color", "green");
        password_Boolean = true;
    } else {
        $('.password_hint').html("请输入5~10个以字母开头，可带数字，'-','.'字符串").css("color", "red");
        password_Boolean = false;
    }
})


// password_confirm
$('.reg_confirm').blur(function() {
    if (($(".reg_password").val()) == ($(".reg_confirm").val())) {
        $('.confirm_hint').html("✔").css("color", "green");
        varconfirm_Boolean = true;
    } else {
        $('.confirm_hint').html("两次密码输入不一致").css("color", "red");
        varconfirm_Boolean = false;
    }
});


// Mobile
$('.reg_mobile').blur(function() {
    if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())) {
        $('.mobile_hint').html("✔").css("color", "green");
        Mobile_Boolean = true;
    } else {
        $('.mobile_hint').html("电话号码输入格式不正确").css("color", "red");
        Mobile_Boolean = false;
    }
});


// click
//$('.red_button').click(function() {
//    if (user_Boolean && password_Boolea && varconfirm_Boolean && emaile_Boolean && Mobile_Boolean == true) {
//
//    } else {
//        alert("请把信息填写完整");
//    }
//})