"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area" // Assuming ScrollArea is available or using div with overflow-auto
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function SlotAvailability() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const timeSlots = [
        { time: "09:00 AM", status: "Available" },
        { time: "09:30 AM", status: "Booked" },
        { time: "10:00 AM", status: "Available" },
        { time: "10:30 AM", status: "Booked" },
        { time: "11:00 AM", status: "Available" },
        { time: "11:30 AM", status: "Available" },
        { time: "12:00 PM", status: "Break" },
        { time: "12:30 PM", status: "Available" },
        { time: "01:00 PM", status: "Booked" },
        { time: "01:30 PM", status: "Available" },
        { time: "02:00 PM", status: "Available" },
        { time: "02:30 PM", status: "Available" },
        { time: "03:00 PM", status: "Available" },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-1">
                <CardHeader>
                    <CardTitle>Select Date</CardTitle>
                    <CardDescription>View availability by date</CardDescription>
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
                    <CardTitle>Available Slots for {date?.toLocaleDateString()}</CardTitle>
                    <CardDescription>Click on a slot to book an appointment.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {timeSlots.map((slot, index) => (
                            <div
                                key={index}
                                className={`
                      p-4 rounded-lg border text-center cursor-pointer transition-all hover:shadow-md
                      ${slot.status === 'Available' ? 'bg-green-50 border-green-200 hover:bg-green-100' : ''}
                      ${slot.status === 'Booked' ? 'bg-red-50 border-red-200 cursor-not-allowed opacity-60' : ''}
                      ${slot.status === 'Break' ? 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60' : ''}
                   `}
                            >
                                <span className="block font-medium text-lg text-gray-800">{slot.time}</span>
                                <Badge
                                    variant="outline"
                                    className={`
                         mt-2 text-xs
                         ${slot.status === 'Available' ? 'text-green-700 border-green-200' : ''}
                         ${slot.status === 'Booked' ? 'text-red-700 border-red-200' : ''}
                         ${slot.status === 'Break' ? 'text-gray-700 border-gray-200' : ''}
                      `}
                                >
                                    {slot.status}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
