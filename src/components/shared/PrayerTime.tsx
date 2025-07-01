import { Moon, Sun, SunDim, SunMoon, Sunrise, Sunset } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const timeList = [
    { icon: SunMoon, label: "Subuh", time: "5:40 AM" },
    { icon: Sunrise, label: "Syuruk", time: "7:04 AM" },
    { icon: Sun, label: "Zohor", time: "1:18 AM" },
    { icon: SunDim, label: "Asar", time: "4:38 PM" },
    { icon: Sunset, label: "Maghrib", time: "7:30 PM" },
    { icon: Moon, label: "Isyak", time: "8:34 PM" },
]

export default function PrayerTime() {
    return (
        <Card className="shadow-none rounded-xs">
            <CardContent>
                <CardContent className="mb-4">
                    <StateAndTown />
                </CardContent>
                {timeList.map(({ icon: Icon, label, time }, index) => (
                    <div
                        key={index}
                        className="flex flex-row justify-between rounded-xs p-1 gap-2"
                    >
                        <span className="flex flex-row gap-2">
                            <Icon className="h-7 w-7" />{label}
                        </span>
                        <span>
                            {time}
                        </span>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export function StateAndTown() {
    return (
        <CardContent className="flex flex-row justify-between gap-4 p-0">
            <Select>
                <SelectTrigger className="w-[180px] rounded-xs shadow-none">
                    <SelectValue placeholder="Negeri" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="kel">Kelantan</SelectItem>
                    <SelectItem value="sel">Selangor</SelectItem>
                    <SelectItem value="ter">Terengganu</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[180px] rounded-xs shadow-none">
                    <SelectValue placeholder="Bandar" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="kb">Kota Bharu</SelectItem>
                    <SelectItem value="pp">Pasir Puteh</SelectItem>
                    <SelectItem value="jer">Jerteh</SelectItem>
                </SelectContent>
            </Select>
        </CardContent>
    )
}