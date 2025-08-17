"use client";

import { cn } from "@/lib/utils";

interface GridPatternProps {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: string;
    className?: string;
}

export function GridPattern({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = "0",
    className,
    ...props
}: GridPatternProps) {
    const id = `grid-pattern-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/20 stroke-gray-400/20 dark:fill-gray-600/10 dark:stroke-gray-600/10",
                className
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
        </svg>
    );
}

export function DotPattern({
    width = 16,
    height = 16,
    cx = 1,
    cy = 1,
    cr = 1,
    className,
    ...props
}: {
    width?: number;
    height?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    className?: string;
}) {
    const id = `dot-pattern-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <svg
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/20 dark:fill-neutral-600/10",
                className
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    cx={cx}
                    cy={cy}
                >
                    <circle r={cr} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
        </svg>
    );
}
