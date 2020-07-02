console.log("index.js加载成功");


function register() {
    $("#toRegister").click(function () {
        $.ajax({
            type: 'get',
            url: 'C:/Users/Administrator/Desktop/meizu/src/php/register.php',

            data:{
                userName:$(".register-btn").eq(0).val(),
                password:$().eq(1).val(),
                // :$().eq(0).val(),
            }
        })
    })
}