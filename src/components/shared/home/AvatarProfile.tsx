import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function AvatarProfile() {
    return (
        <div className="flex items-center justify-between space-x-3">
            <div className="bg-white w-1/4 rounded-full">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>H</AvatarFallback>
                </Avatar>
            </div>
            <span className="text-lg font-semibold text-white">Hazim Developer</span>
        </div>
    )
}
