console.log("login.js加载成功");
// $(function () {}

// 登录
$('#toLogin').click(function () {
    $.ajax({
        url: '../mian.php',
        type: 'get',
        data: {
            type: 'login',
            userName: userName.value,
            password: password.value
        },
        cache: false,//不读取缓存
        dataType: 'text',//返回的数据类型
        success: function (data) {
            $('.show').text(data);
        },
        error: function (err) {
            console.log(err);
        }

    })
});

// 注册
$('#toRegister').click(function () {
    $.ajax({
        url: '../main.php',
        type: 'get',
        data: {
            type: 'register',
            user: userName.value,
            password: password.value
        },
        cache: false,//不读取缓存
        dataType: 'text',//返回的数据类型
        success: function (data) {
            $('.show').text(data);
        },
        error: function (err) {
            console.log(err);
        }

    })
});

// // 刷新
// $('#nextStep').click(function(){

// });
// // 记住登录状态
// $('.check_unchk').click(function(){

// });

// // 忘记密码
// $('.go2forgetpwd').click(function(){

// });

