"use strict";

console.log("login.js加载成功"); // 登录

$('#toLlogin').click(function () {
  if ($("#userName").val().trim() == "") {
    $("#userName").text("账户不能为空");
    return;
  } else if ($("#password").val().trim() == "") {
    $("#password").text("密码不能为空");
    return;
  } else {
    $.ajax({
      url: 'http://127.0.0.1:5500/dist/php/mian.php',
      type: 'get',
      data: {
        userName: $("#userName").val(),
        password: $("#password").val()
      },
      success: function success(data) {
        var go = JSON.parse(data);

        if (go.stat == -1) {
          alert(go.msg);
        }

        if (go.stat == 200) {
          // alert(go.msg);
          window.location.href = "http://127.0.0.1:5500/dist/html/index.html";
        } // $("#password").val('');
        // $("#userName").val('');

      }
    });
  }
});