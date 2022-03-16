import ReactECharts from 'echarts-for-react';
import {graphic} from 'echarts'

const Gauge = ({data}) => {
    return <ReactECharts option={option(data)}  style={{width:"100%", height:"100%"}} className="gauge"/>
}

const option = (data) => {
   return {
    series: [
      {
        type: 'gauge',
        min: 0,
        max: 130,
        startAngle: 180,
        endAngle: 0,
        splitNumber:1,
        radius:"130%",
        center: ['50%', '75%'],
        axisLine: {
          lineStyle: {
            width: 15,
            color: [
                [1, graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#ED3232'
                  },
                  {
                    offset: 0.25,
                    color: '#F19D20'
                  },
                  {
                    offset: 0.5,
                    color: '#F4E414'
                  },
                  {
                    offset: 0.75,
                    color: '#A0DE3C'
                  },
                  {
                    offset: 1,
                    color: '#4CD863'
                  }
                ])]
            ]
          }
        },
        pointer: {
          icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
          width: 5,
          length: '55%',
          offsetCenter: [0, '5%'],
          itemStyle: {
            color: '#eee',
          }
        },
        axisTick: {
          show:false
        },
        splitLine: {show:false
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
        detail:{
          show:false
        },
        data: [
          {
            value: data
          }
        ]
      },
      {
        type: 'gauge',
        min: 0,
        max: 130,
        startAngle: 162,
        endAngle: 18,
        splitNumber:8,
        radius:"130%",
        center: ['50%', '75%'],
        axisLine: {
          show:false
        },
        splitLine: {
          distance: -10,
          length: 15,
          lineStyle: {
            color: '#153149a1',
            width: 2
          }
        },
        axisLabel: {
          show:false,
        },
      }
    ]
   }
  };

  export default Gauge;