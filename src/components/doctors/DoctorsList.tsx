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
import { MoreHorizontal, Calendar, Star, Phone } from "lucide-react"

const doctors = [
    {
        id: "DR-001",
        name: "Dr. Richard James",
        specialization: "Cardiologist",
        status: "Available",
        hospital: "ProvoHeal General",
        experience: "12 years",
        rating: 4.8,
        contact: "+1 234 567 890",
        image: "/avatars/06.png"
    },
    {
        id: "DR-002",
        name: "Dr. Sarah Conner",
        specialization: "Neurologist",
        status: "In Surgery",
        hospital: "ProvoHeal General",
        experience: "8 years",
        rating: 4.9,
        contact: "+1 234 567 891",
        image: "/avatars/07.png"
    },
    {
        id: "DR-003",
        name: "Dr. Michael Chen",
        specialization: "Pediatrician",
        status: "Off Duty",
        hospital: "ProvoHeal Kids",
        experience: "15 years",
        rating: 4.7,
        contact: "+1 234 567 892",
        image: "/avatars/08.png"
    },
    {
        id: "DR-004",
        name: "Dr. Emily Blunt",
        specialization: "Dermatologist",
        status: "Available",
        hospital: "ProvoHeal Skin",
        experience: "5 years",
        rating: 4.6,
        contact: "+1 234 567 893",
        image: "/avatars/09.png"
    },
    {
        id: "DR-005",
        name: "Dr. John Doe",
        specialization: "General Physician",
        status: "Available",
        hospital: "ProvoHeal General",
        experience: "10 years",
        rating: 4.5,
        contact: "+1 234 567 894",
        image: "/avatars/10.png"
    },
]

export function DoctorsList() {
    return (
        <div className="rounded-md border bg-white">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[250px]">Doctor Name</TableHead>
                        <TableHead>Specialization</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {doctors.map((doctor) => (
                        <TableRow key={doctor.id}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={doctor.image} />
                                        <AvatarFallback>{doctor.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-bold">{doctor.name}</div>
                                        <div className="text-xs text-muted-foreground">{doctor.experience} exp</div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>{doctor.specialization}</TableCell>
                            <TableCell>
                                <Badge
                                    variant={doctor.status === "Available" ? "default" : doctor.status === "In Surgery" ? "destructive" : "secondary"}
                                    className={doctor.status === "Available" ? "bg-green-100 text-green-700 hover:bg-green-100" : doctor.status === "In Surgery" ? "bg-red-100 text-red-700 hover:bg-red-100" : ""}
                                >
                                    {doctor.status}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span>{doctor.rating}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Phone className="h-3 w-3" />
                                    {doctor.contact}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon">
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
