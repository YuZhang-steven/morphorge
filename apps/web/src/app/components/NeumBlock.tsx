// Neumorph.tsx
import * as React from "react";

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
    ...rest
}: NeumorphProps<T>) {
    const Comp = (as ?? "div") as React.ElementType;

    // default blur: common neumorphism look is ~2x distance (your sample: 11 -> 22)
    const blurPx = blur ?? distance * 2;

    // intensity -> alpha values (tweak to taste)
    const darkA = Math.max(0, Math.min(1, 0.22 * intensity));
    const lightA = Math.max(0, Math.min(1, 0.85 * intensity));
    // const lightA = 1


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
