"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

function Switch({
    className,
    label,
    ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & { label?: string }) {
    return (
        <div className="relative inline-flex items-center">
            <SwitchPrimitive.Root
                data-slot="switch"
                className={cn(
                    "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                {...props}
            >
                <SwitchPrimitive.Thumb
                    data-slot="switch-thumb"
                    className={cn(
                        "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-12 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
                    )}
                />
                {label && (
                    <span className="absolute text-xs text-center text-yellow-300 w-full top-1/2 left-0 transform -translate-y-1/2 z-10">
                        HELLO
                    </span>
                )}
            </SwitchPrimitive.Root>
        </div>
    )
}

export { Switch }
