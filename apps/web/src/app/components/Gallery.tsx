import { HEIGHT_MAP, NEUM_PALETTES } from "../thems";
import { NeumBlock } from "./NeumBlock";

export default function Gallery() {
    // Build infinite stream by cycling through filtered items
    const stream = [];

    const palette = NEUM_PALETTES[0];
    const h = HEIGHT_MAP["medium"];
    return (
        <div
            className="
            w-full h-full
            grid grid-cols-3 gap-10 
            "
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
