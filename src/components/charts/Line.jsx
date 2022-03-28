import ReactECharts from "echarts-for-react";

const Line = (props) => {
    const { critical, warn, major } = props;
    return (
        <ReactECharts
            option={{
                color: ["#ffea29", "#ff823a", "#f51212"],
                tooltip: {
                    trigger: "axis",
                },
                legend: {
                    show: true,
                    bottom: 0,
                    textStyle: {
                        color: "#b4c7da",
                        fontSize: 10,
                    },
                    itemStyle: {
                        opacity: 0,
                    },
                },
                grid: {
                    top: 15,
                    left: "10%",
                    right: 20,
                    bottom: 50,
                },
                xAxis: {
                    type: "time",
                    boundaryGap: false,
                    axisTick: {
                        lineStyle: {
                            color: "rgba(85,117,145,0.3)",
                        },
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        color: "#A6BACD",
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(85,117,145,0.3)",
                        },
                    },
                },
                yAxis: {
                    type: "value",
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(85,117,145,0.3)",
                        },
                    },
                    axisLabel: {
                        color: "#A6BACD",
                    },
                },
                series: [
                    {
                        type: "line",
                        name: "attention",
                        data: major,
                        symbolSize: 4,
                        symbol: "circle",
                        lineStyle: {
                            width: 1,
                        },
                    },
                    {
                        type: "line",
                        name: "trouble",
                        data: warn,
                        symbolSize: 4,
                        symbol: "circle",
                        lineStyle: {
                            width: 1,
                        },
                    },
                    {
                        type: "line",
                        name: "critical",
                        data: critical,
                        symbolSize: 4,
                        symbol: "circle",
                        lineStyle: {
                            width: 1,
                        },
                    },
                ],
            }}
            className="line"
            style={{ width: "100%", height: "100%" }}
        />
    );
};

export default Line;
