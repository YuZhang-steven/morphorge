// Neumorph.tsx
import * as React from "react";
import { hexToRgba } from "../lib/hexToRgba";

type Size =
    | number
    | { width: number; height: number }
    | { w: number; h: number };

export type NeumorphProps<T extends React.ElementType = "div"> = {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    /** base surface color */
    background?: string; // e.g. "#e0e0e0"
    /** px */
    radius?: number;
    /** px offset for the two inset shadows */
    distance?: number;
    /** px blur radius */
    blur?: number;
    /** 0..1, controls shadow alpha */
    intensity?: number;
    /** inset (pressed) vs raised */
    inset?: boolean;
    /** optional convenience sizing */
    size?: Size;
    /** allow passing/merging inline styles */
    style?: React.CSSProperties;
    /** hex color for the dark shadow (default: black) */
    shadowDark?: string;
    /** hex color for the light/highlight shadow (default: white) */
    shadowLight?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "style" | "children" | "className">;


export function NeumBlock<T extends React.ElementType = "div">({
    as,
    className,
    children,
    background = "#e0e0e0",
    radius = 21,
    distance = 11,
    blur,
    intensity = 1,
    inset = true,
    size,
    style,
    shadowDark,
    shadowLight,
    ...rest
}: NeumorphProps<T>) {
    const Comp = (as ?? "div") as React.ElementType;

    // default blur: common neumorphism look is ~2x distance (your sample: 11 -> 22)
    const blurPx = blur ?? distance * 2;

    // intensity -> alpha values (tweak to taste)
    const darkA = Math.max(0, Math.min(1, 0.35 * intensity));
    const lightA = Math.max(0, Math.min(1, 1.0 * intensity));

    const darkShadowColor = shadowDark ? hexToRgba(shadowDark, darkA) : `rgba(0,0,0,${darkA})`;
    const lightShadowColor = shadowLight ? hexToRgba(shadowLight, lightA) : `rgba(255,255,255,${lightA})`;



    const shadowPrefix = inset ? "inset " : "";
    const boxShadow = [
        `${shadowPrefix}${distance}px ${distance}px ${blurPx}px rgba(0,0,0,${darkA})`,
        `${shadowPrefix}${-distance}px ${-distance}px ${blurPx}px rgba(255,255,255,${lightA})`,
    ].join(", ");

    const computedStyle: React.CSSProperties = {
        backgroundColor: background,
        borderRadius: radius,
        boxShadow,
        ...sizeToStyle(size),
        ...style, // let caller override if they want
    };

    return (
        <Comp
            className={["", className].filter(Boolean).join(" ")}
            style={computedStyle}
            {...rest}
        >
            {children}
        </Comp>
    );
}


function sizeToStyle(size?: Size): React.CSSProperties | undefined {
    if (size == null) return undefined;
    if (typeof size === "number") return { width: size, height: size };
    if ("width" in size) return { width: size.width, height: size.height };
    return { width: size.w, height: size.h };
}
