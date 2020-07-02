console.log("main.js加载成功");

// // 配置要引入的模块路径

require.config({
    path: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery-cookie",
        "parabola": "parabola"

    },
    shim: {
        // 依赖关系
        "jquery-cookie": ["jquery"],
        // 某个模块不遵从AMD, 声明define
        "parabola": {
            // 和普通函数一样使用
            exports: "_"
            // 
        }
    }
});