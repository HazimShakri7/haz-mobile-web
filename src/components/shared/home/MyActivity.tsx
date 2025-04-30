"use client";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { BicepsFlexed, Camera, Computer } from "lucide-react"

export default function MyActivity() {
    return (
        <Tabs defaultValue="coding" className="w-[350px]">
            <TabsList className="grid w-full grid-cols-3 bg-lime-900">
                <TabsTrigger value="coding"><Computer />Coding</TabsTrigger>
                <TabsTrigger value="photograph"><Camera />Photograph</TabsTrigger>
                <TabsTrigger value="workout"><BicepsFlexed />Workout</TabsTrigger>
            </TabsList>
            <TabsContent value="coding">
                <Card className="overflow-hidden">
                    <ScrollAreaHorizontalDemo />
                </Card>
            </TabsContent>
            <TabsContent value="photograph">
                <Card>
                    <CardHeader>
                        <CardTitle>Take Picture</CardTitle>
                        <CardDescription>
                            Make changes to your account here. Click save when youre done.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">

                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="workout">
                <Card>
                    <CardHeader>
                        <CardTitle>Push Up</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, youll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">

                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}



import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
    artist: string
    art: string
}

export const works: Artwork[] = [
    {
        artist: "Learning TypeScript",
        art: "/my-activity/Programming1.jpg",
    },
    {
        artist: "Enjoying Coding",
        art: "/my-activity/Programming2.jpg",

    },
    {
        artist: "Working on Project",
        art: "/my-activity/Programming3.jpg",



    },
]

export function ScrollAreaHorizontalDemo() {
    return (
        <ScrollArea className="w-96 whitespace-nowrap rounded-md overflow-hidden">
            <div className="flex w-max space-x-4 p-4">
                {works.map((artwork) => (
                    <figure key={artwork.artist} className="shrink-0">
                        <div className="overflow-hidden rounded-md">
                            <Image
                                src={artwork.art}
                                alt={`Photo by ${artwork.artist}`}
                                className="aspect-square object-cover"
                                width={250}
                                height={250}
                            />
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground">
                            Photo of{" "}
                            <span className="font-semibold text-foreground">
                                {artwork.artist}
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

