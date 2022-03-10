import ReactECharts from 'echarts-for-react';
import {graphic} from 'echarts'

const Gauge = ({data}) => {
    return <ReactECharts option={option(data)}  className="gauge"/>
}

const option = (data) => {
   return {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius:"125%",
      center: ['50%', '80%'],
        axisLine: {
          lineStyle: {
            width: 12,
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
        splitLine: {
          distance: -12,
          length: 12,
          lineStyle: {
            color: '#041019',
            width: 2
          }
        },
        axisLabel: {
          show:false
        },
        detail:{
          show:false
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