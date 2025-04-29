import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export default function GetStartedSlider({ className, ...props }: SliderProps) {
    return (
        <div className="flex justify-center">
            <Slider
                label="Get Started"
                defaultValue={[0]}
                max={100}
                step={1}
                className={cn("w-[90%]", className)}
                {...props}
            />
        </div>
    )
}
