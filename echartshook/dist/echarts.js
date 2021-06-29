"use strict";
exports.__esModule = true;
var React = require("react");
var echarts_1 = require("echarts");
var Chart = function (props) {
    // 掛載節點
    var chartDom = null;
    React.useEffect(function () {
        console.log("useEffect");
        // 加載狀態
        function showLoading(instance) {
            instance.showLoading("default", {
                text: "",
                color: "#c23531",
                textColor: "#000000",
                maskColor: "rgba(255, 255, 255, 0.8)",
                zlevel: 0
            });
        }
        // 獲取實例對象
        var instance = echarts_1["default"].getInstanceByDom(chartDom) || echarts_1["default"].init(chartDom);
        // 大小自適應
        var resize = function () { return instance.resize(); };
        window.removeEventListener("resize", resize);
        window.addEventListener("resize", resize);
        // 默認加載狀態
        showLoading(instance);
        // 渲染圖表
        if (props.option) {
            if (instance)
                instance.hideLoading();
            instance.setOption(props.option);
        }
        // 回調函數返回實例
        if (props.onRender)
            props.onRender(instance);
        // 銷燬並清除狀態
        return function () {
            echarts_1["default"].dispose(instance);
            window.removeEventListener("resize", resize);
        };
    }, [chartDom, props]);
    // 元素掛載到瀏覽器事件
    var refOnRender = function (el) { return chartDom = el; };
    // 返回組件
    return React.createElement("div", {
        ref: refOnRender,
        style: props.style,
        className: props.className
    });
};
// 導出組件模塊
exports["default"] = Chart;
