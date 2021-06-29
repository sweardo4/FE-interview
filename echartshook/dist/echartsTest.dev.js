"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

require("echarts/lib/chart/pie");

require("echarts/lib/chart/bar");

require("echarts/lib/chart/line");

require("echarts/lib/component/tooltip");

require("echarts/lib/component/legend");

require("echarts/lib/component/title");

require("echarts/lib/component/dataZoom");

require("echarts/lib/component/axisPointer");

require("echarts/lib/component/visualMap");

require("echarts/lib/component/markPoint");

require("echarts/lib/component/markLine");

require("echarts/lib/component/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// 以组件的形式改写echart 图表生成方式
var Chart = function Chart(props) {
  var chartDom = null;
  (0, _react.useEffect)(function () {
    function showLoading(instance) {
      instance.showLoading('default', {
        text: '',
        color: '#c23531',
        textColor: '#000000',
        maskColor: 'rgba(255, 255, 255, 0.8)',
        zlevel: 0
      });
    }

    var instance = _echarts["default"].getInstanceByDom(chartDom) || _echarts["default"].init(chartDom);

    var resize = function resize() {
      return instance.resize();
    };

    window.removeEventListener('resize', resize);
    window.addEventListener('resize', resize);
    showLoading(instance);

    if (props.option) {
      if (instance) instance.hideLoading();
      instance.setOption(props.option);
    } // 回调函数返回示例


    if (props.onRender) props.onRender(instance); // 销毁清除

    return function () {
      _echarts["default"].dispose(instance);

      window.removeEventListener('resize', resize);
    };
  }, [chartDom, props]); // 元素挂在到浏览器

  var refOnRender = function refOnRender(el) {
    return chartDom = el;
  }; // 返回组件


  return _react["default"].createElement('div', {
    ref: refOnRender,
    style: props.style,
    className: props.className
  });
};

var _default = Chart;
exports["default"] = _default;