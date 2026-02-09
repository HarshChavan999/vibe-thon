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
import { MoreHorizontal, Calendar, RefreshCcw, X, Mail, MessageSquare } from "lucide-react"

const appointments = [
    {
        id: "APT-1001",
        patient: "Cameron Williamson",
        doctor: "Dr. Richard James",
        date: "2024-03-12",
        time: "10:00 AM",
        type: "Online",
        status: "Confirmed",
        contact: "email"
    },
    {
        id: "APT-1002",
        patient: "Leslie Alexander",
        doctor: "Dr. Sarah Conner",
        date: "2024-03-12",
        time: "11:30 AM",
        type: "Walk-in",
        status: "Checked In",
        contact: "sms"
    },
    {
        id: "APT-1003",
        patient: "Bessie Cooper",
        doctor: "Dr. Michael Chen",
        date: "2024-03-13",
        time: "09:15 AM",
        type: "Online",
        status: "Pending",
        contact: "email"
    },
    {
        id: "APT-1004",
        patient: "Guy Hawkins",
        doctor: "Dr. Emily Blunt",
        date: "2024-03-13",
        time: "02:00 PM",
        type: "Walk-in",
        status: "Cancelled",
        contact: "sms"
    },
]

export function AppointmentList() {
    return (
        <div className="rounded-md border bg-white">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Booking ID</TableHead>
                        <TableHead>Patient</TableHead>
                        <TableHead>Doctor</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {appointments.map((apt) => (
                        <TableRow key={apt.id}>
                            <TableCell className="font-medium">{apt.id}</TableCell>
                            <TableCell>{apt.patient}</TableCell>
                            <TableCell>{apt.doctor}</TableCell>
                            <TableCell>
                                <div className="flex flex-col text-sm">
                                    <span>{apt.date}</span>
                                    <span className="text-muted-foreground text-xs">{apt.time}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant="outline" className={apt.type === "Online" ? "border-blue-200 text-blue-700 bg-blue-50" : "border-orange-200 text-orange-700 bg-orange-50"}>
                                    {apt.type}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    className={`
                        ${apt.status === 'Confirmed' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}
                        ${apt.status === 'Checked In' ? 'bg-purple-100 text-purple-700 hover:bg-purple-100' : ''}
                        ${apt.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100' : ''}
                        ${apt.status === 'Cancelled' ? 'bg-red-100 text-red-700 hover:bg-red-100' : ''}
                    `}
                                    variant="secondary"
                                >
                                    {apt.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                    {apt.status !== 'Cancelled' && (
                                        <>
                                            <Button variant="ghost" size="icon" title="Send Reminder">
                                                {apt.contact === 'email' ? <Mail className="h-4 w-4 text-blue-500" /> : <MessageSquare className="h-4 w-4 text-green-500" />}
                                            </Button>
                                            <Button variant="ghost" size="icon" title="Reschedule">
                                                <RefreshCcw className="h-4 w-4 text-orange-500" />
                                            </Button>
                                            <Button variant="ghost" size="icon" title="Cancel Appointment">
                                                <X className="h-4 w-4 text-red-500" />
                                            </Button>
                                        </>
                                    )}
                                    {apt.status === 'Cancelled' && (
                                        <span className="text-xs text-muted-foreground italic">No actions available</span>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
