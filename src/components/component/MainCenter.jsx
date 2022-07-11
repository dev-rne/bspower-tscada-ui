import ReactEcharts from "echarts-for-react";
import React, { Fragment, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const MainCenter = (props) => {
    const navigate = useNavigate();
    const [stationEvent, setStationEvent] = useState([
        {
            title: "Tsogttsetsii",
            station: "Tsetsii",
            level: 0,
        },
        {
            title: "Khongor tolgoi",
            station: "SIDING Station #1",
            level: 0,
        },
        {
            title: "Ar khonglidog",
            station: "SIDING Station #2",
            level: 0,
        },
        {
            title: "Bayanbulag",
            station: "SIDING Station #3",
            level: 0,
        },
        {
            title: "Khunkhar Zag",
            station: "SIDING Station #4",
            level: 0,
        },
        {
            title: "Bor khoshuu",
            station: "SIDING Station #5",
            level: 0,
        },
        {
            title: "Khulangiin Shand",
            station: "SIDING Station #6",
            level: 0,
        },
        {
            title: "Zuunbayan Station",
            station: "OCC",
            level: 0,
        },
    ]);
    const { eventDeviceList } = useSelector((state) => state.main);
    const chartRef = useRef(null);
    useEffect(() => {
        let chartInstance = null;
        const renderedInstance = chartRef.current.getEchartsInstance();
        chartInstance = renderedInstance;
        chartInstance.on("click", "series.graph", function (params) {
            console.log("click :: " + params.name);
            let value = params.name.toLowerCase();
            navigate(`/tscada/station#${value}`);
        });
    }, []);
    useEffect(() => {
        let initData = stationEvent.slice().map((obj) => {
            obj.level = 0;
            return obj;
        });
        setStationEvent(initData);
        for (let i = 0; i < eventDeviceList.length; i++) {
            let dataObj = eventDeviceList[i];
            var index = stationEvent.findIndex(
                (obj) => obj.station === dataObj.station
            );
            if (index !== -1) {
                if (dataObj.ATTENTION) stationEvent[index].level = 1;
                if (dataObj.TROUBLE) stationEvent[index].level = 2;
                if (dataObj.CRITICAL) stationEvent[index].level = 3;
            }
        }
        setStationEvent(stationEvent);
    }, [eventDeviceList]);

    const { height, width } = props;

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
                    ref={chartRef}
                    style={{
                        width: width === undefined ? "100%" : width,
                        height: height === undefined ? "410px" : height,
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
                        grid: {
                            top: "15%",
                            left: "10%",
                            right: "10%",
                            bottom: "15%",
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
                                symbolSize: [114, 90],
                                roam: false,
                                label: {
                                    show: true,
                                },
                                edgeSymbol: ["circle", "circle"],
                                edgeSymbolSize: [4, 4],
                                edgeLabel: {
                                    fontSize: 24,
                                },
                                draggable: false,
                                coordinateSystem: "cartesian2d",
                                data: [
                                    {
                                        name: "TSETSII",
                                        value: [0, 280],
                                        // symbol: "image:///tscada/cctvImg/station-icon-0.png",
                                        symbol: `image:///tscada/cctvImg/station-icon-${stationEvent[0].level}.png`,
                                        symbolOffset: [0, "-30%"],
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
                                        symbol: "image:///tscada/cctvImg/bb-icon-0.png",
                                        symbolOffset: [0, "-30%"],
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
                                        // symbol: "image:///tscada/cctvImg/ss-icon-0.png",
                                        symbol: `image:///tscada/cctvImg/ss-icon-${stationEvent[1].level}.png`,
                                        symbolOffset: [0, "-30%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"Khongor"}}`,
                                                `{b|${"Tolgoi"}}`,
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
                                        symbol: "image:///tscada/cctvImg/bb-icon-0.png",
                                        symbolOffset: [0, "-30%"],
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
                                        // symbol: "image:///tscada/cctvImg/ss-icon-0.png",
                                        symbol: `image:///tscada/cctvImg/ss-icon-${stationEvent[2].level}.png`,
                                        symbolOffset: [0, "-30%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"Ar"}}`,
                                                `{b|${"Khonglidog"}}`,
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
                                        symbol: "image:///tscada/cctvImg/bb-icon-0.png",
                                        symbolOffset: [0, "-30%"],
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
                                        // symbol: "image:///tscada/cctvImg/ss-icon-0.png",
                                        symbol: `image:///tscada/cctvImg/ss-icon-${stationEvent[3].level}.png`,
                                        symbolOffset: [0, "-30%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"Bayanbulag"}}`,
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
                                        // symbol: "image:///tscada/cctvImg/ss-icon-0.png",
                                        symbol: `image:///tscada/cctvImg/ss-icon-${stationEvent[4].level}.png`,
                                        symbolOffset: [0, "-30%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"Khunkhar"}}`,
                                                `{b|${"Zag"}}`,
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
                                        symbol: "image:///tscada/cctvImg/bb-icon-0.png",
                                        symbolOffset: [0, "-30%"],
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
                                        // symbol: "image:///tscada/cctvImg/ss-icon-0.png",
                                        symbol: `image:///tscada/cctvImg/ss-icon-${stationEvent[5].level}.png`,
                                        symbolOffset: [0, "-30%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"Bor"}}`,
                                                `{b|${"Khoshuu"}}`,
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
                                        symbol: "image:///tscada/cctvImg/bb-icon-0.png",
                                        symbolOffset: [0, "-30%"],
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
                                        // symbol: "image:///tscada/cctvImg/ss-icon-0.png",
                                        symbol: `image:///tscada/cctvImg/ss-icon-${stationEvent[6].level}.png`,
                                        symbolOffset: [0, "-40%"],
                                        label: {
                                            position: "bottom",
                                            align: "center",
                                            formatter: [
                                                `{a|${"Khulagniin"}}`,
                                                `{b|${"Shand"}}`,
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
                                        symbol: "image:///tscada/cctvImg/bb-icon-0.png",
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
                                        symbol: "image:///tscada/cctvImg/bb-icon-0.png",
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
                                        // symbol: "image:///tscada/cctvImg/station-icon-0.png",
                                        symbol: `image:///tscada/cctvImg/station-icon-${stationEvent[7].level}.png`,
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
                                            curveness: 0.2,
                                        },
                                    },
                                    {
                                        source: "BB3",
                                        target: "SS3",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: 0.2,
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
                                            curveness: -0.2,
                                        },
                                    },
                                    {
                                        source: "BB5",
                                        target: "SS6",
                                        lineStyle: {
                                            color: "rgba(255,255,255,0.2)",
                                            curveness: -0.2,
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
                                        lineStyle: { curveness: 0.2 },
                                    },
                                    {
                                        coords: [
                                            [500, 210],
                                            [400, 140],
                                        ],
                                        lineStyle: { curveness: 0.2 },
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
                                        lineStyle: { curveness: -0.2 },
                                    },
                                    {
                                        coords: [
                                            [0, 70],
                                            [100, 0],
                                        ],
                                        lineStyle: { curveness: -0.2 },
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
