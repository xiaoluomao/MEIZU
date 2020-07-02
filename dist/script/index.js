"use strict";

console.log("index.js加载成功"); // let h1 = document.querySelector('.wrap h1');
// h1.onclick = function (){
//     alert(12345);
// };
// 侧边栏
// $('.meizu-hezder-link-down').on('mouseenter')

$.ajax({
  type: 'get',
  url: 'C:/Users/Administrator/Desktop/meizu/src/data/nav.json',
  success: function success(data) {
    var sideArr = data.sideNav; // 清空上一次的记录数据

    lists.innerHTML = '';

    for (var i = 0; i < sideArr.length; i++) {
      var node = $(1);
      lists.innerHTML += '<li>' + json.s[i] + '</li>';
    }
  }
});
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  // 垂直切换选项
  loop: true,
  // 循环模式选项
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination'
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // 如果需要滚动条
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
  // 自动切换
  autoplay: {
    delay: 3000 //1秒切换一次

  }
});