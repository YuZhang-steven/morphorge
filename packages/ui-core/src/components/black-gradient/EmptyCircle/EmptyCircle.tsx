import { classNameMerger } from "../../../lib/classNameMerger";



type EmptyCircleProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    size?: number;
    ref?: React.Ref<HTMLDivElement>;
}


export default function EmptyCircle({
    id = "empty-circle",
    size = 24,
    className,
    style,
    ref,
    ...props
}: EmptyCircleProps) {
    const clx = classNameMerger(
        `rounded-full pointer-events-none 
        bg-transparent border-1 border-black`,
        className
    )
    return (
        <div
            ref={ref}
            className={clx}
            style={{
                width: size,
                height: size,
                ...style
            }}
            {...props}
            id={id}

        />
    )
}
