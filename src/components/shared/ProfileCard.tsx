import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Calendar, ChevronRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
    return (
        <>
            <Link href="/profile">
                <Card className="shadow-none flex flex-row rounded-xs">
                    <CardContent className="p-0 ml-4">
                        <Image
                            alt="Haz Profile"
                            src="/hazim.jpg"
                            width={50}
                            height={50}
                            className="w-15 h-15 rounded-md border-foreground object-contain"
                            quality={100}
                        />
                    </CardContent>
                    <CardContent className="p-0">
                        <CardTitle>
                            Hazim Shakri
                        </CardTitle>
                        <CardDescription>
                            System Developer
                        </CardDescription>
                        <CardDescription className="flex flex-row gap-2">
                            <Calendar className="h-5 w-5" /> 14 July 2001 , 1:29 AM
                        </CardDescription>
                    </CardContent>
                    <CardContent className="p-0 mt-4">
                        <ChevronRight />
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}