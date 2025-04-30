"use client";
import * as React from "react";
import {
    ChevronLeft,
    ChevronRight,
    Moon,
    Sun,
    Sunrise,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CalendarCard() {
    const [currentDate, setCurrentDate] = React.useState<Date | null>(null);
    const [currentSession, setCurrentSession] = React.useState("");
    const [currentTime, setCurrentTime] = React.useState<string>("");

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [showFullMonth, setShowFullMonth] = React.useState(false);

    const getSession = (hour: number) => {
        if (hour >= 6 && hour < 12) return "morning";
        if (hour >= 12 && hour < 19) return "evening";
        return "night";
    };

    // Initialize time on client
    React.useEffect(() => {
        const now = new Date();
        setCurrentDate(now);
        setCurrentSession(getSession(now.getHours()));
        setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true, }));

        const interval = setInterval(() => {
            const updated = new Date();
            setCurrentTime(updated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true, }));
            setCurrentSession(getSession(updated.getHours()));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!currentDate) return null;

    const getMonthDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const totalDays = new Date(year, month + 1, 0).getDate();
        const monthDays: Date[] = [];

        for (let i = 1; i <= totalDays; i++) {
            monthDays.push(new Date(year, month, i));
        }

        return monthDays;
    };

    const getFiveDays = () => {
        const fiveDays = [];
        for (let i = 0; i < 5; i++) {
            const nextDay = new Date(currentDate);
            nextDay.setDate(currentDate.getDate() + i);
            fiveDays.push(nextDay);
        }
        return fiveDays;
    };

    const handlePrevDay = () => {
        const prevDate = new Date(currentDate);
        if (showFullMonth) {
            prevDate.setMonth(prevDate.getMonth() - 1);
            prevDate.setDate(1);
        } else {
            prevDate.setDate(prevDate.getDate() - 1);
        }
        setCurrentDate(prevDate);
    };

    const handleNextDay = () => {
        const nextDate = new Date(currentDate);
        if (showFullMonth) {
            nextDate.setMonth(nextDate.getMonth() + 1);
            nextDate.setDate(1);
        } else {
            nextDate.setDate(nextDate.getDate() + 1);
        }
        setCurrentDate(nextDate);
    };

    const handleTitleClick = () => {
        setShowFullMonth((prev) => !prev);
    };

    const today = new Date();
    const displayDates = showFullMonth ? getMonthDays() : getFiveDays();

    return (
        <Card className="w-[350px] bg-lime-900">
            <CardHeader className="flex items-center justify-between">
                <CardTitle
                    className="text-2xl cursor-pointer text-white"
                    onClick={handleTitleClick}
                >
                    {currentDate.toLocaleString("default", {
                        month: "long",
                    })}{" "}
                    {currentDate.getFullYear()}
                </CardTitle>
                <div className="flex items-center space-x-6 text-white">
                    <ChevronLeft
                        className="w-5 h-5 cursor-pointer"
                        onClick={handlePrevDay}
                    />
                    <ChevronRight
                        className="w-5 h-5 cursor-pointer"
                        onClick={handleNextDay}
                    />
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div
                    key={showFullMonth ? "full" : "five"}
                    className={`grid gap-2 text-center transition-all duration-1000 ease-in-out ${showFullMonth ? "grid-cols-5" : "grid-cols-5"
                        }`}
                >
                    {displayDates.map((date, index) => {
                        const isToday =
                            date.getDate() === today.getDate() &&
                            date.getMonth() === today.getMonth() &&
                            date.getFullYear() === today.getFullYear();

                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-center w-16 h-20 rounded-lg border-white/70 border transition-all duration-300 ${isToday ? "bg-white/90 text-black" : "bg-lime-900 text-white"
                                    }`}
                            >
                                <span className="font-semibold">
                                    {days[date.getDay()]}
                                </span>
                                <span className="flex items-center justify-center text-lg rounded-full w-8 h-8 border border-white">{date.getDate()}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center gap-2">
                    <Badge
                        className={`rounded-full py-2 flex items-center gap-1 ${currentSession === "morning" ? "bg-lime-500 border-black text-black" : ""
                            }`}
                    >
                        Morning <Sunrise className="w-4 h-4" />
                    </Badge>
                    <Badge
                        className={`rounded-full py-2 flex items-center gap-1 ${currentSession === "evening" ? "bg-lime-500 border-black text-black" : ""
                            }`}
                    >
                        Evening <Sun className="w-4 h-4" />
                    </Badge>
                    <Badge
                        className={`rounded-full py-2 flex items-center gap-1 ${currentSession === "night" ? "bg-lime-500 border-black text-black" : ""
                            }`}
                    >
                        Night <Moon className="w-4 h-4" />
                    </Badge>
                </div>

                <div className="flex justify-center text-3xl font-semibold text-white">
                    {currentTime}
                </div>
            </CardContent>
        </Card>
    );
}
