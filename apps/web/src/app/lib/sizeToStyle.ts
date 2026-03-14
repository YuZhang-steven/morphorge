type Size =
    | number
    | { width: number; height: number }
    | { w: number; h: number };


export function sizeToStyle(size?: Size): React.CSSProperties | undefined {
    if (size == null) return undefined;
    if (typeof size === "number") return { width: size, height: size };
    if ("width" in size) return { width: size.width, height: size.height };
    return { width: size.w, height: size.h };
}