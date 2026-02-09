"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Calendar, User } from "lucide-react"

const bookings = [
    {
        id: "BK-101",
        patient: "Cameron Williamson",
        test: "Complete Blood Count (CBC)",
        date: "2024-03-11",
        time: "09:00 AM",
        doctor: "Dr. Richard James",
        priority: "Normal"
    },
    {
        id: "BK-102",
        patient: "Leslie Alexander",
        test: "Lipid Profile",
        date: "2024-03-11",
        time: "10:30 AM",
        doctor: "Dr. Sarah Conner",
        priority: "High"
    },
    {
        id: "BK-103",
        patient: "Bessie Cooper",
        test: "Thyroid Function Test",
        date: "2024-03-12",
        time: "08:15 AM",
        doctor: "Dr. Michael Chen",
        priority: "Normal"
    },
]

export function TestBooking() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Upcoming Test Bookings</h3>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Booking
                </Button>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Booking ID</TableHead>
                            <TableHead>Patient</TableHead>
                            <TableHead>Test Name</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Prescribed By</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bookings.map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell className="font-medium">{booking.id}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-gray-400" />
                                        {booking.patient}
                                    </div>
                                </TableCell>
                                <TableCell>{booking.test}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Calendar className="h-3 w-3" />
                                        {booking.date} <span className="text-xs text-gray-400">({booking.time})</span>
                                    </div>
                                </TableCell>
                                <TableCell>{booking.doctor}</TableCell>
                                <TableCell>
                                    <Badge variant={booking.priority === "High" ? "destructive" : "secondary"}>
                                        {booking.priority}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">Reschedule</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
