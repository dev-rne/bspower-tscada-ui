import ReactEcharts from "echarts-for-react";
import React, { Fragment, useState } from "react";

const MainCenter = (props) => {
    const { height, width, type, value, conf, alarmMsg, alarmAddress } = props;
    const [clickIdx, setClickIdx] = useState(-1);

    const aniArrSet = () => {
        if (value.path === "WEST") {
            return [
                {
                    coords: [
                        [333, 150],
                        [0, 150],
                    ],
                    lineStyle: {
                        curveness: 0,
                    },
                },
                {
                    coords: [
                        [666, 300],
                        [333, 150],
                    ],
                    lineStyle: {
                        curveness: -0.2,
                    },
                },
                {
                    coords: [
                        [1000, 300],
                        [666, 300],
                    ],
                    lineStyle: {
                        curveness: 0,
                    },
                },
            ];
        } else if (value.path === "EAST") {
            return [
                {
                    coords: [
                        [333, 150],
                        [0, 150],
                    ],
                    lineStyle: {
                        curveness: 0,
                    },
                },
                {
                    coords: [
                        [666, 0],
                        [333, 150],
                    ],
                    lineStyle: {
                        curveness: 0.2,
                    },
                },
                {
                    coords: [
                        [1000, 0],
                        [666, 0],
                    ],
                    lineStyle: {
                        curveness: 0,
                    },
                },
            ];
        } else {
            return [];
        }
    };

    const colorSet = (str) => {
        // let color = "#999";
        // if (value.path === str) color = "#0066ff";
        // if (alarmAddress !== undefined) {
        //     const idx = alarmAddress.indexOf(str);
        //     if (idx >= 0) {
        //         if (alarmMsg.indexOf("LOS") >= 0) color = "#ff4e4b";
        //         if (alarmMsg.indexOf("SD") >= 0) color = "#a6a801";
        //     }
        // }
        return "#0066ff";
    };
    const comNameSet = (name, idx) => {
        let nameArr = name.split("_");
        if (nameArr.length > 1) {
            return nameArr[idx];
        } else {
            return "";
        }
    };

    return (
        <Fragment>
            <div
                style={{
                    position: "absolute",
                    marginTop: 20,
                    width: "100%",
                    height: 285,
                    backgroundColor: "rgba(0,0,0,0.2)",
                    visibility: "visible",
                    borderRadius: 4,
                }}
            />
            <ReactEcharts
                style={{
                    width: width === undefined ? "100%" : width,
                    height: height === undefined ? "325px" : height,
                }}
                option={{
                    title: {
                        // text: 'OSWU S6-P1',
                        text: "",
                        textStyle: {
                            color: "#999",
                            fontWeight: "normal",
                            fontSize: 36,
                            width: 300,
                            height: 200,
                        },
                        // textAlign: 'center',
                        // textVerticalAlign: 'middle',
                        left: "center",
                        top: "middle",
                    },
                    tooltip: {
                        show: false,
                    },
                    xAxis: {
                        show: false,
                        type: "value",
                    },
                    yAxis: {
                        show: false,
                        type: "value",
                    },
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: "quinticInOut",
                    series: [
                        {
                            type: "graph",
                            zlevel: 5,
                            // layout: 'none',
                            color: "#0066ff",
                            // symbol: "roundRect",
                            symbol: "image://http://localhost:3000/cctv/station-icon.png",
                            //symbolSize: 50,
                            symbolSize: [92, 77],
                            roam: false,
                            label: {
                                show: true,
                            },
                            edgeSymbol: ["arrow", "circle"],
                            edgeSymbolSize: [10, 4],
                            edgeLabel: {
                                fontSize: 20,
                            },
                            // itemStyle: {
                            //     shadowColor: "#0066ff",
                            //     shadowBlur: 15,
                            // },
                            draggable: false,
                            coordinateSystem: "cartesian2d",
                            data: [
                                {
                                    name: "전송장비",
                                    x: 100,
                                    y: 300,
                                    value: [0, 150],
                                    // fixed: true,
                                    label: {
                                        align: "center",
                                        // formatter: ['{a|전송장비}', '{b|+2dBm}'].join('\n'),
                                        formatter: [
                                            // '{a|전송장비}',
                                            // '{b|}',
                                            `{a|${"전송장비"}}`,
                                            `{b|${"sss"}}`,
                                            // '{b|}',
                                        ].join("\n"),
                                        rich: {
                                            a: {
                                                color: "white",
                                                lineHeight: 0,
                                            },
                                            b: {
                                                color: "white",
                                                lineHeight: 70,
                                                fontSize: 14,
                                            },
                                        },
                                    },
                                },
                                {
                                    name: "P1 COM",
                                    x: 300,
                                    y: 300,
                                    value: [333, 150],
                                    // fixed: true,
                                    itemStyle: {},
                                    label: {
                                        align: "center",
                                        // formatter: ['{a|감시장비 P2 COM}', '{b|+2dBm}'].join('\n'),
                                        // formatter: ['{a|감시장비 P2 COM}', '{b|}'].join('\n'),
                                        formatter: [
                                            // `{a|${conf.comName !== null ? conf.comName : 'COM'}}`,
                                            `{a|${"COM"}}`,
                                            `{b|${"10"}}`,
                                        ].join("\n"),
                                        rich: {
                                            a: {
                                                color: "white",
                                                lineHeight: 0,
                                            },
                                            b: {
                                                color: "white",
                                                lineHeight: 70,
                                                fontSize: 14,
                                            },
                                        },
                                    },
                                },
                                {
                                    name: "P1 WEST",
                                    x: 500,
                                    y: 200,
                                    value: [666, 300],
                                    itemStyle: {
                                        color: colorSet("WEST"),
                                        shadowColor: colorSet("WEST"),
                                        // color: value.path === 'WEST' ? '#0066ff' : '#999',
                                        // shadowColor: value.path === 'WEST' ? '#0066ff' : '#999',
                                    },
                                    label: {
                                        align: "center",
                                        // formatter: ['{a|감시장비 P4 WEST}', '{b|{-2dBm}}'].join('\n'),
                                        formatter: [
                                            // '{a|감시장비 P4 WEST}',
                                            `{a|${"WEST"}}`,
                                            `{b|${"10"}}`,
                                        ].join("\n"),
                                        rich: {
                                            a: {
                                                color: "white",
                                                lineHeight: 0,
                                            },
                                            b: {
                                                color: "white",
                                                lineHeight: 70,
                                                fontSize: 14,
                                            },
                                        },
                                    },
                                },
                                {
                                    name: "P1 EAST",
                                    x: 500,
                                    y: 400,
                                    value: [666, 0],
                                    itemStyle: {
                                        color: colorSet("EAST"),
                                        shadowColor: colorSet("EAST"),
                                        // color: value.path === 'EAST' ? '#0066ff' : '#999',
                                        // shadowColor: value.path === 'EAST' ? '#0066ff' : '#999',
                                    },
                                    label: {
                                        align: "center",
                                        // formatter: ['{a|감시장비 P4 EAST}', '{b|-2dBm}'].join('\n'),
                                        formatter: [
                                            // '{a|감시장비 P4 EAST}',
                                            `{a|${"EAST"}}`,
                                            `{b|${"10"}}`,
                                        ].join("\n"),
                                        rich: {
                                            a: {
                                                color: "white",
                                                lineHeight: 0,
                                            },
                                            b: {
                                                color: "white",
                                                lineHeight: 70,
                                                fontSize: 14,
                                            },
                                        },
                                    },
                                },
                                {
                                    name: "선번 1",
                                    x: 700,
                                    y: 200,
                                    value: [1000, 300],
                                    itemStyle: {
                                        color: "#0066ff",
                                        shadowColor: "#0066ff",
                                    },
                                    label: {
                                        align: "center",
                                        // formatter: ['{a|OFD정보}', '{b|선번}'].join('\n'),
                                        formatter: [
                                            "{a|OFD정보}",
                                            `{b|${"선번"}}`,
                                        ].join("\n"),
                                        rich: {
                                            a: {
                                                color: "white",
                                                lineHeight: 0,
                                            },
                                            b: {
                                                color: "white",
                                                lineHeight: 70,
                                                fontSize: 14,
                                            },
                                        },
                                    },
                                },
                                {
                                    name: "선번 2",
                                    x: 700,
                                    y: 400,
                                    value: [1000, 0],
                                    itemStyle: {
                                        color: "#0066ff",
                                        shadowColor: "#0066ff",
                                    },
                                    label: {
                                        align: "center",
                                        // formatter: ['{a|OFD정보}', '{b|선번}'].join('\n'),
                                        formatter: [
                                            "{a|OFD정보}",
                                            `{b|${"선번"}}`,
                                        ].join("\n"),
                                        rich: {
                                            a: {
                                                color: "white",
                                                lineHeight: 0,
                                            },
                                            b: {
                                                color: "white",
                                                lineHeight: 70,
                                                fontSize: 14,
                                            },
                                        },
                                    },
                                },
                            ],
                            // links: [],
                            links: [
                                // {
                                //     source: "main start",
                                //     target: "main end",
                                //     // symbolSize: [5, 20],
                                //     label: {
                                //         show: false,
                                //     },
                                //     lineStyle: {
                                //         color: "#06b844",
                                //     },
                                // },
                                // {
                                //     source: "sub start",
                                //     target: "sub end",
                                //     // symbolSize: [5, 20],
                                //     label: {
                                //         show: false,
                                //     },
                                // },
                                {
                                    source: "전송장비",
                                    target: "P1 COM",
                                    label: {
                                        show: false,
                                    },
                                    lineStyle: {
                                        color: "rgba(255,255,255,0.2)",
                                        curveness: 0,
                                    },
                                },
                                {
                                    source: "P1 COM",
                                    target: "P1 WEST",
                                    label: {
                                        show: false,
                                    },
                                    lineStyle: {
                                        color: "rgba(255,255,255,0.2)",
                                        curveness: 0.1,
                                    },
                                },
                                {
                                    source: "P1 COM",
                                    target: "P1 EAST",
                                    label: {
                                        show: false,
                                    },
                                    lineStyle: {
                                        color: "rgba(255,255,255,0.2)",
                                        curveness: -0.1,
                                    },
                                },
                                {
                                    source: "P1 WEST",
                                    target: "선번 1",
                                    label: {
                                        show: false,
                                    },
                                    lineStyle: {
                                        color: "rgba(255,255,255,0.2)",
                                    },
                                },
                                {
                                    source: "P1 EAST",
                                    target: "선번 2",
                                    label: {
                                        show: false,
                                    },
                                    lineStyle: {
                                        color: "rgba(255,255,255,0.2)",
                                    },
                                },
                            ],
                            lineStyle: {
                                opacity: 0.9,
                                width: 2,
                                curveness: 0,
                            },
                        },
                        {
                            type: "lines",
                            coordinateSystem: "cartesian2d",
                            z: 1,
                            zlevel: 2,
                            animation: false,
                            effect: {
                                show: true,
                                period: 1.5,
                                trailLength: 0.01,
                                symbolSize: 5,
                                symbol: "circle",
                                loop: true,
                                color: "rgba(55,155,255,0.5)",
                            },
                            lineStyle: {
                                normal: {
                                    color: "#22AC38",
                                    width: 0,
                                    curveness: 0.1,
                                },
                            },
                            data: [
                                {
                                    coords: [
                                        [333, 150],
                                        [0, 150],
                                    ],
                                    lineStyle: {
                                        curveness: 0,
                                    },
                                },
                                {
                                    coords: [
                                        [666, 300],
                                        [333, 150],
                                    ],
                                    lineStyle: {
                                        curveness: -0.1,
                                    },
                                },
                                {
                                    coords: [
                                        [1000, 300],
                                        [666, 300],
                                    ],
                                    lineStyle: {
                                        curveness: 0,
                                    },
                                },
                            ],
                        },
                    ],
                }}
            />
        </Fragment>
    );
};
export default MainCenter;
