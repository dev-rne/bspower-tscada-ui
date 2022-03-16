import ReactECharts from 'echarts-for-react';

const Line = ({data}) => {
    return <ReactECharts option={option(data)}  className="line" style={{width:'100%',height:"100%"}}/>
}

const option = (data) => {
  const seriesData = data.map(list => {
    return {
      type:'line',
      name: list.title,
      data: list.data,
      symbolSize:4,
      symbol:"circle",
      lineStyle:{
        width:1
      }
    }
  })
   return {
    tooltip: {
      trigger: 'axis'
    },
    legend:{
      show:true,
      bottom:0,
      textStyle:{
        color: '#b4c7da',
        fontSize:10
      },
      itemStyle:{
        opacity:0
      }
    },
    grid:{
      top:15,
      left:'10%',
      right:20,
      bottom:'25%',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [1029,1030,1031,1101,1102,1103,1104],
      axisTick: {
        lineStyle: {
            color: 'rgba(85,117,145,0.3)',
        },
      },
      splitLine: {
          show: false,
      },
      axisLabel: {
          color: '#A6BACD',
      },
      axisLine: {
        lineStyle: {
            color: 'rgba(85,117,145,0.3)',
        },
    },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false,
    },
    splitLine: {
        lineStyle: {
            color: 'rgba(85,117,145,0.3)',
        },
    },
    axisLabel: {
        color: '#A6BACD',
    },
    },
    series: seriesData
   }
  };

  export default Line;