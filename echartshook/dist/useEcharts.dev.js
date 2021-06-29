"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

require("echarts/lib/chart/pie");

require("echarts/lib/chart/bar");

require("echarts/lib/chart/line");

require("echarts/lib/chart/custom");

require("echarts/lib/chart/pictorialBar");

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useEcharts(chartRef, config) {
  var chartInstance = null;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      chart = _useState2[0],
      setChart = _useState2[1];

  function renderChart() {
    var renderedInstance = _echarts["default"].getInstanceByDom(chartRef.current);

    if (renderedInstance) {
      chartInstance = renderedInstance;
    } else {
      chartInstance = _echarts["default"].init(chartRef.current);
    }

    chartInstance.setOption(config);

    var resize = function resize() {
      return chartInstance.resize();
    };

    window.removeEventListener('resize', resize);
    window.addEventListener('resize', resize);
    setChart(function () {
      return chartInstance;
    });
  }

  (0, _react.useEffect)(function () {
    renderChart();
    return function () {
      // eslint-disable-next-line no-unused-expressions
      chartInstance && chartInstance.dispose();
      setChart(function () {
        return chartInstance;
      });
    };
  }, []);
  return {
    chart: chart
  };
}

var _default = useEcharts;
exports["default"] = _default;