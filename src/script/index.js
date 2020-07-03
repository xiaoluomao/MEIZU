console.log("index.js加载成功");



var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 自动切换
    autoplay: {
        delay: 3000,//3秒切换一次
    },
});





