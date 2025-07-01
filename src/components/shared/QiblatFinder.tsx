'use client'

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription } from "../ui/card"
import Image from "next/image"

export default function QiblatFinder() {
    const [angleToQiblat, setAngleToQiblat] = useState<number | null>(null)
    const [compassHeading, setCompassHeading] = useState<number>(0)
    const [error, setError] = useState<string | null>(null)

    const KAABAH_LATITUDE = 21.4225
    const KAABAH_LONGITUDE = 39.8262

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported.")
            return
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                const qiblatAngle = calculateQiblaDirection(latitude, longitude)
                setAngleToQiblat(qiblatAngle)
            },
            () => {
                setError("Permission denied or location unavailable.")
            }
        )
    }, [])

    useEffect(() => {
        if (typeof window === 'undefined') return

        const handleOrientation = (event: DeviceOrientationEvent) => {
            const heading = event.alpha ?? 0
            setCompassHeading(heading)
        }

        window.addEventListener('deviceorientationabsolute', handleOrientation, true)
        window.addEventListener('deviceorientation', handleOrientation, true)

        return () => {
            window.removeEventListener('deviceorientationabsolute', handleOrientation)
            window.removeEventListener('deviceorientation', handleOrientation)
        }
    }, [])

    function calculateQiblaDirection(lat: number, lon: number) {
        const phiK = (KAABAH_LATITUDE * Math.PI) / 180
        const lambdaK = (KAABAH_LONGITUDE * Math.PI) / 180
        const phi = (lat * Math.PI) / 180
        const lambda = (lon * Math.PI) / 180

        const qiblat = Math.atan2(
            Math.sin(lambdaK - lambda),
            Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda)
        )

        let qiblatDegree = (qiblat * 180) / Math.PI
        qiblatDegree = (qiblatDegree + 360) % 360
        return qiblatDegree
    }

    const rotation = angleToQiblat !== null
        ? (angleToQiblat - compassHeading + 360) % 360
        : 0

    return (
        <Card className="shadow-none rounded-xs text-center">
            <CardContent className="flex flex-col items-center justify-center gap-4">
                <CardDescription>
                    {error && <p className="text-red-500">{error}</p>}
                    {!error && (
                        <>
                            <div className="relative w-48 h-48">
                                {/* Kompas bulat */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-full border-4 border-gray-300 rounded-full" />
                                </div>

                                {/* Titik tengah */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground z-10" />

                                {/* Arah N, E, S, W */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-lg font-bold">N</div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-lg font-bold">S</div>
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 text-lg font-bold">E</div>
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 text-lg font-bold">W</div>


                                {/* Ikon Kaabah di atas garisan bulatan */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{
                                        transform: `rotate(${rotation}deg)`
                                    }}
                                >
                                    <div
                                        className="absolute top-0 left-1/2 -translate-x-1/2"
                                        style={{ transform: "translateY(-50%)" }}
                                    >
                                        {/* <BrickWall className="fill-foreground text-yellow-500" /> */}
                                        <Image
                                            alt="Kaabah"
                                            src="/kaabah.png"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </div>

                                {/* Optional: boleh tambah jarum panah juga kalau nak */}
                            </div>

                            <div className="mt-4">
                                Qiblat is <span className="font-bold">{angleToQiblat?.toFixed(2)}°</span> from North
                            </div>
                        </>
                    )}
                </CardDescription>
            </CardContent>
        </Card>
    )
}
