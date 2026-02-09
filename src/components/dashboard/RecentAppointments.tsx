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
import { Input } from "@/components/ui/input"
import { Search, Filter, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const appointments = [
    {
        original: {
            id: "AP-001",
            date: "2024-03-10",
            patient: { name: "Cameron Williamson", image: "/avatars/02.png" },
            doctor: "Dr. Ralph Edwards",
            room: "101",
            status: "Available",
        },
    },
    {
        original: {
            id: "AP-002",
            date: "2024-03-10",
            patient: { name: "Leslie Alexander", image: "/avatars/03.png" },
            doctor: "Dr. Kristine Watson",
            room: "102",
            status: "Booked",
        },
    },
    {
        original: {
            id: "AP-003",
            date: "2024-03-09",
            patient: { name: "Bessie Cooper", image: "/avatars/04.png" },
            doctor: "Dr. Jenny Wilson",
            room: "104",
            status: "Cancel",
        },
    },
    {
        original: {
            id: "AP-004",
            date: "2024-03-08",
            patient: { name: "Guy Hawkins", image: "/avatars/05.png" },
            doctor: "Dr. Albert Flores",
            room: "105",
            status: "Available",
        },
    },
]

export function RecentAppointments() {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-semibold text-lg text-gray-900">Recent Patient Appointment</h3>
                    <p className="text-sm text-gray-500">Keep track of patient data and others information.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search patient..." className="pl-9 w-[250px]" />
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Filter className="h-4 w-4" />
                        Filters
                    </Button>
                </div>
            </div>

            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="w-[150px]">Serial Number</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Patient Name</TableHead>
                        <TableHead>Assign To Doctor</TableHead>
                        <TableHead>Room</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {appointments.map((appointment) => (
                        <TableRow key={appointment.original.id} className="cursor-pointer hover:bg-gray-50">
                            <TableCell className="font-medium text-blue-600 truncate">{appointment.original.id}</TableCell>
                            <TableCell>{appointment.original.date}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={appointment.original.patient.image} />
                                        <AvatarFallback>{appointment.original.patient.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium text-gray-900">{appointment.original.patient.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>{appointment.original.doctor}</TableCell>
                            <TableCell>{appointment.original.room}</TableCell>
                            <TableCell>
                                <Badge
                                    className={`
                    ${appointment.original.status === "Available" ? "bg-green-100 text-green-700 hover:bg-green-200" : ""}
                    ${appointment.original.status === "Booked" ? "bg-orange-100 text-orange-700 hover:bg-orange-200" : ""}
                    ${appointment.original.status === "Cancel" ? "bg-red-100 text-red-700 hover:bg-red-200" : ""}
                  `}
                                    variant="secondary"
                                >
                                    {appointment.original.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
