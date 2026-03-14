"use client"
import { useEffect, useState } from "react";
import { HEIGHT_MAP, NEUM_PALETTES } from "../thems";
import { NeumBlock } from "./NeumBlock";
import { useWindowSizeStore } from "../lib/store/useWindowSizeStore";

type GalleryProps = {
    sideBarWidth?: number;
}

export default function Gallery({ sideBarWidth = 56 }: GalleryProps) {
    // Build infinite stream by cycling through filtered items
    const stream = [];
    const [gridCols, setGridCols] = useState(4);// current grid cols



    //handle window resize
    const currentWindowSize = useWindowSizeStore(state => state.windowSize);
    useEffect(() => {
        const availableWidth = currentWindowSize.width - sideBarWidth;
        if (availableWidth < 500) {
            setGridCols(1);
        } else if (availableWidth < 900) {
            setGridCols(2);
        } else if (availableWidth < 1300) {
            setGridCols(3);
        } else if (availableWidth < 1700) {
            setGridCols(4);
        } else {
            setGridCols(5);
        }
    }, [currentWindowSize.width, sideBarWidth]);

    const palette = NEUM_PALETTES[0];
    const h = HEIGHT_MAP["medium"];
    return (
        <div
            className="
            w-full h-full
            grid gap-10 
            "
            style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}
        >
            <NeumBlock
                background={palette.bg}
                shadowDark={palette.shadowDark}
                shadowLight={palette.shadowLight}
                radius={20} distance={10} blur={10} intensity={5}
                style={{ padding: 28, minHeight: h, display: 'flex', flexDirection: 'column' }}
            />
            <NeumBlock
                background={palette.bg}
                shadowDark={palette.shadowDark}
                shadowLight={palette.shadowLight}
                radius={20} distance={10} blur={10} intensity={5}
                style={{ padding: 28, minHeight: h, display: 'flex', flexDirection: 'column' }}
            />
            <NeumBlock
                background={palette.bg}
                shadowDark={palette.shadowDark}
                shadowLight={palette.shadowLight}
                radius={20} distance={10} blur={10} intensity={5}
                style={{ padding: 28, minHeight: h, display: 'flex', flexDirection: 'column' }}
            />
            <NeumBlock
                background={palette.bg}
                shadowDark={palette.shadowDark}
                shadowLight={palette.shadowLight}
                radius={20} distance={10} blur={10} intensity={5}
                style={{ padding: 28, minHeight: h, display: 'flex', flexDirection: 'column' }}
            />

        </div>
    )
}
