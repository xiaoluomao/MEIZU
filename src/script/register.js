console.log("index.js加载成功");


function registerSend() {
    // 注册
    $('#toRegister').click(function () {

        $.ajax({
            url: '../main.php',
            type: 'post',
            data: {
                type: 'register',
                user: $(".userName").val,
                password: $("password").val
            },
            // cache: false,//不读取缓存
            // dataType: 'text',//返回的数据类型
            success: function (data) {
                // $('.show').text(data);
                console.log(data);
            },
            error: function (err) {
                console.log(err);
            }

        })
    });
}



