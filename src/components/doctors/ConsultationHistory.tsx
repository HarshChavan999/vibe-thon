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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, MoreHorizontal } from "lucide-react"

const history = [
    {
        id: "CON-001",
        doctor: "Dr. Richard James",
        patient: "Cameron Williamson",
        date: "2024-03-10",
        diagnosis: "Hypertension",
        status: "Completed",
        image: "/avatars/06.png",
        patientImage: "/avatars/02.png"
    },
    {
        id: "CON-002",
        doctor: "Dr. Sarah Conner",
        patient: "Leslie Alexander",
        date: "2024-03-09",
        diagnosis: "Migraine",
        status: "Follow-up",
        image: "/avatars/07.png",
        patientImage: "/avatars/03.png"
    },
    {
        id: "CON-003",
        doctor: "Dr. Michael Chen",
        patient: "Bessie Cooper",
        date: "2024-03-08",
        diagnosis: "Viral Fever",
        status: "Completed",
        image: "/avatars/08.png",
        patientImage: "/avatars/04.png"
    },
    {
        id: "CON-004",
        doctor: "Dr. Emily Blunt",
        patient: "Guy Hawkins",
        date: "2024-03-07",
        diagnosis: "Eczema",
        status: "Pending",
        image: "/avatars/09.png",
        patientImage: "/avatars/05.png"
    }
]

export function ConsultationHistory() {
    return (
        <div className="rounded-md border bg-white">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Doctor</TableHead>
                        <TableHead>Patient</TableHead>
                        <TableHead>Diagnosis</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {history.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={item.image} />
                                        <AvatarFallback>{item.doctor[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium text-sm">{item.doctor}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={item.patientImage} />
                                        <AvatarFallback>{item.patient[0]}</AvatarFallback>
                                    </Avatar>
                                    <span>{item.patient}</span>
                                </div>
                            </TableCell>
                            <TableCell>{item.diagnosis}</TableCell>
                            <TableCell>
                                <Badge
                                    variant="outline"
                                    className={`
                        ${item.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                        ${item.status === 'Follow-up' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                        ${item.status === 'Pending' ? 'bg-orange-50 text-orange-700 border-orange-200' : ''}
                    `}
                                >
                                    {item.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon">
                                    <FileText className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
