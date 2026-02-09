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
import { Progress } from "@/components/ui/progress"
import { MoreHorizontal, Truck, FlaskConical, ClipboardCheck } from "lucide-react"

const samples = [
    {
        orderId: "ORD-001",
        patient: "Cameron Williamson",
        sampleType: "Blood Tube (Lavender)",
        collectedAt: "10:00 AM",
        status: "Processing",
        progress: 60,
        labTech: "Dr. Watson"
    },
    {
        orderId: "ORD-002",
        patient: "Leslie Alexander",
        sampleType: "Urine Container",
        collectedAt: "11:30 AM",
        status: "Collected",
        progress: 30,
        labTech: "Nurse Jane"
    },
    {
        orderId: "ORD-003",
        patient: "Bessie Cooper",
        sampleType: "Serum Separator",
        collectedAt: "09:15 AM",
        status: "Completed",
        progress: 100,
        labTech: "Dr. House"
    },
]

export function SampleTracking() {
    return (
        <div className="rounded-md border bg-white">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Patient</TableHead>
                        <TableHead>Sample Details</TableHead>
                        <TableHead>Current Status</TableHead>
                        <TableHead className="w-[150px]">Lab Status</TableHead>
                        <TableHead>Collected By</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {samples.map((sample) => (
                        <TableRow key={sample.orderId}>
                            <TableCell className="font-medium">{sample.orderId}</TableCell>
                            <TableCell>{sample.patient}</TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">{sample.sampleType}</span>
                                    <span className="text-xs text-muted-foreground">Collected: {sample.collectedAt}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    variant="outline"
                                    className={`gap-1
                        ${sample.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                        ${sample.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                        ${sample.status === 'Collected' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                    `}
                                >
                                    {sample.status === 'Completed' && <ClipboardCheck className="h-3 w-3" />}
                                    {sample.status === 'Processing' && <FlaskConical className="h-3 w-3" />}
                                    {sample.status === 'Collected' && <Truck className="h-3 w-3" />}
                                    {sample.status}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <div className="space-y-1">
                                    <span className="text-xs text-muted-foreground">{sample.progress}% Done</span>
                                    <Progress value={sample.progress} className="h-2" />
                                </div>
                            </TableCell>
                            <TableCell>{sample.labTech}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
