import React, { useEffect, useRef, useState } from "react";
// import RTSPPlayer from "@flomon-ui/jsmpeg/dist/rtsp-player";
import JSMpeg from "@flomon-ui/jsmpeg";

const CCTVViewer = (props) => {
    const { rtspUrl, scale, qscale } = props;
    const playerRef = useRef();
    const canvasRef = useRef();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        // 인스턴스를 삭제
        console.log("aaaa:: " + playerRef.current);
        console.log("aaaa rtspUrl:: " + rtspUrl);
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
    }, []);
    useEffect(() => {
        setVisible(false);
        console.log("aaaa:: " + playerRef.current);
        console.log("rtspUrl:: " + rtspUrl);
        setTimeout(() => {
            console.log("bbbbbbbbbbbb");
            setVisible(true);
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

    return <canvas ref={canvasRef} />;
};

export default CCTVViewer;
