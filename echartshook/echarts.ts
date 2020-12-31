import * as React from "react";
import echarts from "echarts";


interface ChartProps {
    key: string;
    option: object | null;
    style: {
        width: string;
        height: string;
    };
    className?: string;

    onRender?(instance): void;
}

const Chart = (props: ChartProps): React.ReactElement => {

    // 掛載節點
    let chartDom = null;

    // 生命鉤子函數
    type Callback = () => void;
    React.useEffect((): Callback => {
        console.log("useEffect");

        // 加載狀態
        function showLoading(instance): void {
            instance.showLoading("default", {
                text: "",
                color: "#c23531",
                textColor: "#000000",
                maskColor: "rgba(255, 255, 255, 0.8)",
                zlevel: 0
            });
        }

        // 獲取實例對象
        let instance = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);

        // 大小自適應
        const resize = (): void => instance.resize();
        window.removeEventListener("resize", resize);
        window.addEventListener("resize", resize);

        // 默認加載狀態
        showLoading(instance);

        // 渲染圖表
        if (props.option) {
            if (instance) instance.hideLoading();
            instance.setOption(props.option);
        }

        // 回調函數返回實例
        if (props.onRender) props.onRender(instance);

        // 銷燬並清除狀態
        return (): void => {
            echarts.dispose(instance);
            window.removeEventListener("resize", resize);
        };

    }, [chartDom, props]);


    // 元素掛載到瀏覽器事件
    const refOnRender = (el): void => chartDom = el;
    
    // 返回組件
    return React.createElement("div", {
        ref: refOnRender,
        style: props.style,
        className: props.className
    });

};

// 導出組件模塊
export default Chart;