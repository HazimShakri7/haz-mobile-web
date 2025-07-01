import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function YourProfile() {
    return (
        <Card className="shadow-none rounded-xs">
            <ProfileAvatar />
            <CardContent className="flex flex-col justify-center items-center">
                <CardTitle className="text-xl">
                    Hazim Shakri
                </CardTitle>
                <CardDescription>
                    System Developer
                </CardDescription>
                <CardDescription className="text-foreground/30 font-normal text-center">
                    Develop by own effort with knowledge, experience and passion.
                </CardDescription>
            </CardContent>
            <CardContent className="flex flex-row justify-center items-center gap-4">
                <Button variant="default" className="rounded-full">
                    FOLLOW
                </Button>
                <Button variant="outline" className="rounded-full">
                    CONTACT
                </Button>
            </CardContent>
            <SocialMedia />
            <About />
        </Card>
    )
}

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function ProfileAvatar() {
    return (
        <div className="flex flex-row justify-center items-center">
            <Avatar className="h-20 w-20">
                <AvatarImage src="/hazim.jpg" alt="@Haz" />
                <AvatarFallback>HZ</AvatarFallback>
            </Avatar>
        </div>
    )
}

const SociaMediaList = [
    { source: "/social-media/Facebook.png", alternative: "Facebook" },
    { source: "/social-media/LinkedIn.png", alternative: "LinkeIn" },
    { source: "/social-media/Telegram.png", alternative: "Telegram" },
    { source: "/social-media/Insta.png", alternative: "Instagram" },
    { source: "/social-media/Tiktok.png", alternative: "Tiktok" },
    { source: "/social-media/Twitter.png", alternative: "Twitter" },
]

import Image from "next/image";

export function SocialMedia() {
    return (
        <Card className="border-none shadow-none p-0">
            <CardContent className="flex flex-row justify-center items-center gap-2">
                {SociaMediaList.map(({ source, alternative }, index) => (
                    <div
                        key={index}
                    >
                        <Image
                            src={source}
                            alt={alternative}
                            width={30}
                            height={30}
                        />
                    </div>
                ))
                }
            </CardContent>
        </Card>
    )
}

export function About() {
    return (
        <Card className="rounded-none shadow-none border-none p-4">
            <CardContent className="flex flex-row justify-center items-center">
                <CardContent className="flex flex-col justify-center items-center">
                    <CardTitle>1.4 Y</CardTitle>
                    <CardDescription>EXPERIENCE</CardDescription>
                </CardContent>

                <span className=" text-foreground">|</span>

                <CardContent className="flex flex-col justify-center items-center">
                    <CardTitle>1</CardTitle>
                    <CardDescription>SYSTEM</CardDescription>
                </CardContent>

                <span className=" text-foreground">|</span>

                <CardContent className="flex flex-col justify-center items-center">
                    <CardTitle>8</CardTitle>
                    <CardDescription>TECHSTACKS</CardDescription>
                </CardContent>
            </CardContent>
        </Card>
    )
}