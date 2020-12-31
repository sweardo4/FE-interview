// useECharts.js
/**
 * 引入必要组件配置 其他未引入内容将不被打包
 */
import { useEffect, useState } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/custom';
import 'echarts/lib/chart/pictorialBar';

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/axisPointer';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/grid';


function useEcharts(chartRef, config) {
  let chartInstance = null;
  const [chart, setChart] = useState();
  function renderChart() {
    const renderedInstance = echarts.getInstanceByDom(chartRef.current);
    if (renderedInstance) {
      chartInstance = renderedInstance;
    } else {
      chartInstance = echarts.init(chartRef.current);
    }
    chartInstance.setOption(config);
    const resize = () => chartInstance.resize();
    window.removeEventListener('resize', resize);
    window.addEventListener('resize', resize);
    setChart(() => chartInstance);
  }
  useEffect(() => {
    renderChart();
    return () => {
      // eslint-disable-next-line no-unused-expressions
      chartInstance && chartInstance.dispose();
      setChart(() => chartInstance);
    };
  }, []);
  return {
    chart,
  };
}

export default useEcharts;
