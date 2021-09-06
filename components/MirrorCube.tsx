import React, { useEffect, useRef, useState } from "react";
import Regl from "regl";
import { animate } from "components/graphics/mirror";
import { play, stop } from "components/graphics/mirror/renderer";

function measureGraphicsSize(windowInnerWidth: number): number {
  return Math.max(150, Math.min(Math.floor(windowInnerWidth * 0.6), 300));
}

function MirrorCube() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [graphicsSize, setGraphicsSize] = useState<number>(() => {
    if (!process.browser) {
      return 300;
    }

    return measureGraphicsSize(window.innerWidth);
  });

  useEffect(() => {
    function resize() {
      if (process.browser) {
        setGraphicsSize(measureGraphicsSize(window.innerWidth));
      }
    }

    window?.addEventListener("resize", resize);

    return () => {
      window?.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const regl = Regl({
      canvas: canvasRef.current!,
      attributes: {
        antialias: true,
        alpha: true,
      },
    });

    play(regl, animate(regl));

    return () => {
      stop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      height={graphicsSize * 2}
      width={graphicsSize * 2}
      style={{
        width: graphicsSize,
        height: graphicsSize,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

export default MirrorCube;
