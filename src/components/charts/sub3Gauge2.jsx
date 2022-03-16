import ReactECharts from 'echarts-for-react';
import {graphic} from 'echarts'

const Gauge = ({data}) => {
    return <ReactECharts option={option(data)} style={{width:"100%", height:"100%"}}  className="gauge"/>
}

const option = (data) => {
   return {
    series: [
      {
        type: 'gauge',
        center: ['50%', '75%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber:1,
        radius: '130%',
        itemStyle: {
          color: '#59B7F2'
        },
        progress: {
          show: true,
          width: 20
        },
        pointer: {
          show: false
        },
        axisLine: {
          show:true,
          lineStyle: {
            width: 20,
            color: [[1, "#6A8892"]]
          }
        },
        axisTick: {
          show:false,
        },
        splitLine: {
          show:false,
        },
        axisLabel: {
          show:true,
          distance: -20,
          color:"#aaa",
          formatter: '{a|{value}}',
          rich:{
            a: {
              color: 'white',
              padding:[25,0,0,0],
          },
          }
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 24,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 20,
          fontWeight: 'normal',
          formatter: '{value} %',
          color: '#59B7F2'
        },
        data: [
          {
            value: data
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '75%'],
        radius: '145%',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        itemStyle: {
          color: '#4a97ae60'
        },
        progress: {
          show: true,
          width: 8
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: data
          }
        ]
      }
    ]
   }
  };

  export default Gauge;