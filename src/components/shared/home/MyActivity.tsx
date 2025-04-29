import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="coding"><Computer />Coding</TabsTrigger>
                <TabsTrigger value="photograph"><Camera />Photograph</TabsTrigger>
                <TabsTrigger value="workout"><BicepsFlexed />Workout</TabsTrigger>

            </TabsList>
            <TabsContent value="coding">
                <Card>
                    <CardHeader>
                        <CardTitle>Coding</CardTitle>
                        <CardDescription>
                            Make changes to your account here. Click save when youre done.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
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
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="@peduarte" />
                        </div>
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
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
