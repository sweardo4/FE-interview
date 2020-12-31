// 以组件的形式改写echart 图表生成方式
import React, { useEffect } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/axisPointer';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/grid';

const Chart = (props) => {
  let chartDom = null;
  useEffect(() => {
    function showLoading(instance) {
      instance.showLoading('default', {
        text: '',
        color: '#c23531',
        textColor: '#000000',
        maskColor: 'rgba(255, 255, 255, 0.8)',
        zlevel: 0,
      });
    }
    const instance = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);
    const resize = () => instance.resize();
    window.removeEventListener('resize', resize);
    window.addEventListener('resize', resize);
    showLoading(instance);
    if (props.option) {
      if (instance) instance.hideLoading();
      instance.setOption(props.option);
    }
    // 回调函数返回示例
    if (props.onRender) props.onRender(instance);
    // 销毁清除
    return () => {
      echarts.dispose(instance);
      window.removeEventListener('resize', resize);
    };
  }, [chartDom, props]);

  // 元素挂在到浏览器
  const refOnRender = (el) => chartDom = el;

  // 返回组件
  return React.createElement('div', {
    ref: refOnRender,
    style: props.style,
    className: props.className,
  });
};

export default Chart;
