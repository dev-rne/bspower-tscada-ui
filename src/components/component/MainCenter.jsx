import ReactEcharts from "echarts-for-react";
import React, { Fragment, useState } from "react";

const MainCenter = (props) => {
    const { height, width, type, value, conf, alarmMsg, alarmAddress } = props;
    const [clickIdx, setClickIdx] = useState(-1);
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
                    width: "100%",
                    backgroundColor: "transparent",
                    visibility: "visible",
                    borderRadius: 4,
                }}
            >
                <ReactEcharts
                    style={{
                        width: width === undefined ? "100%" : width,
                        height: height === undefined ? "400px" : height,
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
                                color: "#0066ff",
                                symbol: "roundRect",
                                symbolSize: [94, 78],
                                roam: false,
                                label: {
                                    show: true,
                                },
                                edgeSymbol: ["circle", "circle"],
                                edgeSymbolSize: [4, 4],
                                edgeLabel: {
                                    fontSize: 20,
                                },
                                draggable: false,
                                coordinateSystem: "cartesian2d",
                                data: [
                                    {
                                        name: "TSETSII",
                                        value: [0, 280],
                                        symbol: "image://../../cctv/station-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"TSETSII"}}`,
                                                `{b|${"STATION"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "BB1",
                                        value: [100, 280],
                                        symbol: "image://../../cctv/bb-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"BASE"}}`,
                                                `{b|${"STATION 1"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "SS1",
                                        value: [200, 280],
                                        symbol: "image://../../cctv/ss-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"SIDING"}}`,
                                                `{b|${"STATION 1"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "BB2",
                                        value: [300, 280],
                                        symbol: "image://../../cctv/bb-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"BASE"}}`,
                                                `{b|${"STATION 2"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "SS2",
                                        value: [400, 280],
                                        symbol: "image://../../cctv/ss-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"SIDING"}}`,
                                                `{b|${"STATION 2"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "BB3",
                                        value: [500, 210],
                                        symbol: "image://../../cctv/bb-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"BASE"}}`,
                                                `{b|${"STATION 3"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "SS3",
                                        value: [400, 140],
                                        symbol: "image://../../cctv/ss-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"SIDING"}}`,
                                                `{b|${"STATION 3"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "SS4",
                                        value: [300, 140],
                                        symbol: "image://../../cctv/ss-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"SIDING"}}`,
                                                `{b|${"STATION 4"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "BB4",
                                        value: [200, 140],
                                        symbol: "image://../../cctv/bb-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"BASE"}}`,
                                                `{b|${"STATION 4"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "SS5",
                                        value: [100, 140],
                                        symbol: "image://../../cctv/ss-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"SIDING"}}`,
                                                `{b|${"STATION 5"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "BB5",
                                        value: [0, 70],
                                        symbol: "image://../../cctv/bb-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"BASE"}}`,
                                                `{b|${"STATION 5"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "SS6",
                                        value: [100, 0],
                                        symbol: "image://../../cctv/ss-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"SIDING"}}`,
                                                `{b|${"STATION 6"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "BB6",
                                        value: [200, 0],
                                        symbol: "image://../../cctv/bb-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"BASE"}}`,
                                                `{b|${"STATION 6"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "BB7",
                                        value: [300, 0],
                                        symbol: "image://../../cctv/bb-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"BASE"}}`,
                                                `{b|${"STATION 7"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                    {
                                        name: "ZUUNBAYAN",
                                        value: [400, 0],
                                        symbol: "image://../../cctv/station-icon.png",
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"ZUUNBAYAN"}}`,
                                                `{b|${"STATION"}}`,
                                            ].join("\n"),
                                            rich: {
                                                a: { color: "white" },
                                                b: { color: "white" },
                                            },
                                        },
                                    },
                                ],
                                // links: [],
                                links: [
                                    {
                                        source: "TSETSII",
                                        target: "BB1",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
                                        },
                                    },
                                    {
                                        source: "BB1",
                                        target: "SS1",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
                                        },
                                    },
                                    {
                                        source: "SS1",
                                        target: "BB2",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
                                        },
                                    },
                                    {
                                        source: "BB2",
                                        target: "SS2",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
                                        },
                                    },
                                    {
                                        source: "SS2",
                                        target: "BB3",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0.3,
                                        },
                                    },
                                    {
                                        source: "BB3",
                                        target: "SS3",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0.3,
                                        },
                                    },
                                    {
                                        source: "SS3",
                                        target: "SS4",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
                                        },
                                    },
                                    {
                                        source: "SS4",
                                        target: "BB4",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
                                        },
                                    },
                                    {
                                        source: "BB4",
                                        target: "SS5",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
                                        },
                                    },
                                    {
                                        source: "SS5",
                                        target: "BB5",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: -0.3,
                                        },
                                    },
                                    {
                                        source: "BB5",
                                        target: "SS6",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: -0.3,
                                        },
                                    },
                                    {
                                        source: "SS6",
                                        target: "BB6",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
                                        },
                                    },
                                    {
                                        source: "BB6",
                                        target: "BB7",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
                                        },
                                    },
                                    {
                                        source: "BB7",
                                        target: "ZUUNBAYAN",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0,
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
                                            [0, 280],
                                            [100, 280],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                    {
                                        coords: [
                                            [100, 280],
                                            [200, 280],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                    {
                                        coords: [
                                            [200, 280],
                                            [300, 280],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                    {
                                        coords: [
                                            [300, 280],
                                            [400, 280],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                    {
                                        coords: [
                                            [400, 280],
                                            [500, 210],
                                        ],
                                        lineStyle: { curveness: 0.3 },
                                    },
                                    {
                                        coords: [
                                            [500, 210],
                                            [400, 140],
                                        ],
                                        lineStyle: { curveness: 0.3 },
                                    },
                                    {
                                        coords: [
                                            [400, 140],
                                            [300, 140],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                    {
                                        coords: [
                                            [300, 140],
                                            [200, 140],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                    {
                                        coords: [
                                            [200, 140],
                                            [100, 140],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                    {
                                        coords: [
                                            [100, 140],
                                            [0, 70],
                                        ],
                                        lineStyle: { curveness: -0.3 },
                                    },
                                    {
                                        coords: [
                                            [0, 70],
                                            [100, 0],
                                        ],
                                        lineStyle: { curveness: -0.3 },
                                    },
                                    {
                                        coords: [
                                            [100, 0],
                                            [200, 0],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                    {
                                        coords: [
                                            [200, 0],
                                            [300, 0],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                    {
                                        coords: [
                                            [300, 0],
                                            [400, 0],
                                        ],
                                        lineStyle: { curveness: 0 },
                                    },
                                ],
                            },
                        ],
                    }}
                />
            </div>
        </Fragment>
    );
};
export default MainCenter;