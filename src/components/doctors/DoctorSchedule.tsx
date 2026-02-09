"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DoctorSchedule() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const shifts = [
        {
            id: 1,
            doctor: "Dr. Richard James",
            image: "/avatars/06.png",
            shift: "Morning (08:00 AM - 02:00 PM)",
            department: "Cardiology",
            type: "OPD"
        },
        {
            id: 2,
            doctor: "Dr. Sarah Conner",
            image: "/avatars/07.png",
            shift: "Afternoon (02:00 PM - 08:00 PM)",
            department: "Neurology",
            type: "Surgery"
        },
        {
            id: 3,
            doctor: "Dr. Michael Chen",
            image: "/avatars/08.png",
            shift: "Night (08:00 PM - 08:00 AM)",
            department: "Pediatrics",
            type: "On Call"
        },
        {
            id: 4,
            doctor: "Dr. Emily Blunt",
            image: "/avatars/09.png",
            shift: "Morning (09:00 AM - 05:00 PM)",
            department: "Dermatology",
            type: "OPD"
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-1">
                <CardHeader>
                    <CardTitle>Select Date</CardTitle>
                    <CardDescription>View schedules by date</CardDescription>
                </CardHeader>
                <CardContent>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border shadow-sm w-full flex justify-center"
                    />
                </CardContent>
            </Card>

            <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                    <CardTitle>Schedule for {date?.toLocaleDateString()}</CardTitle>
                    <CardDescription>Duty rosters and availability</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {shifts.map((shift) => (
                            <div key={shift.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={shift.image} />
                                        <AvatarFallback>{shift.doctor.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-medium text-sm">{shift.doctor}</h4>
                                        <p className="text-xs text-gray-500">{shift.department}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium">{shift.shift}</div>
                                    <Badge variant="outline" className={`mt-1 ${shift.type === "OPD" ? "border-green-200 text-green-700 bg-green-50" :
                                            shift.type === "Surgery" ? "border-red-200 text-red-700 bg-red-50" :
                                                "border-blue-200 text-blue-700 bg-blue-50"
                                        }`}>
                                        {shift.type}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
