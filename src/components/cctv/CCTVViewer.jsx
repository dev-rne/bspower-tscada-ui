import React, { useEffect, useRef, useState } from "react";
// import RTSPPlayer from "@flomon-ui/jsmpeg/dist/rtsp-player";
import JSMpeg from "@flomon-ui/jsmpeg";

const CCTVViewer = (props) => {
    const { rtspUrl, scale, qscale } = props;
    const playerRef = useRef();
    const canvasRef = useRef();
    const [remove, setRemove] = useState(false);
    useEffect(() => {
        // playerRef.current = new JSMpeg.RTSPPlayer({
        //     canvas: canvasRef.current,
        //     // url: "ws://127.0.0.2:8000/api/stream",
        //     url: "ws://210.94.128.240:8000/api/stream",
        //     params: {
        //         rtspUrl,
        //         scale,
        //         qscale,
        //     },
        // });
        // return () => {
        //     playerRef.current.destroy();
        // };
    }, []);
    useEffect(() => {
        // canvasRef.current.destroy();
        console.log("playerRef.current : " + playerRef.current);
        setRemove(true);
        setTimeout(() => {
            setRemove(false);
            playerRef.current = new JSMpeg.RTSPPlayer({
                canvas: canvasRef.current,
                // url: "ws://127.0.0.2:8000/api/stream",
                url: "ws://210.94.128.240:8000/api/stream",
                params: {
                    rtspUrl,
                    scale,
                    qscale,
                },
            });
            return () => {
                playerRef.current.destroy();
            };
        }, 1000);
    }, [rtspUrl]);
    // return <canvas ref={canvasRef} width="960" height="540" />;
    return remove ? null : <canvas ref={canvasRef} width="960" height="540" />;
};

export default CCTVViewer;
