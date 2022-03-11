import ReactECharts from 'echarts-for-react';

const Scatter = ({ major, warn, critical }) => {
    return (
        <ReactECharts
            option={option({ major, warn, critical })}
            style={{
                height: '100%',
                width: '100%',
            }}
        />
    );
};

const borderColor = ['#CABE5D', '#DB7142', '#DB4242'];

const itemStyle = (i) => {
    return {
        color: '#030D14',
        borderColor: borderColor[i],
        borderWidth: 1,
    };
};

const option = ({ major, warn, critical }) => {
    return {
        xAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                lineStyle: {
                    color: 'rgba(85,117,145,0.2)',
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                color: '#A6BACD',
            },
        },
        grid: {
            top: '7%',
            left: '5%',
            bottom: '10%',
            right: '2%',
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(85,117,145,0.2)',
                },
            },
            axisLabel: {
                color: '#A6BACD',
            },
        },
        series: [
            {
                type: 'scatter',
                data: major,
                itemStyle: itemStyle(0),
                symbolSize: 10,
            },
            {
                type: 'scatter',
                data: warn,
                itemStyle: itemStyle(1),
                symbolSize: 10,
            },
            {
                type: 'scatter',
                data: critical,
                itemStyle: itemStyle(2),
                symbolSize: 10,
            },
        ],
    };
};

export default Scatter;
