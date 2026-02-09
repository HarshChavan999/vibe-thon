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
import { Plus, ShoppingCart, User, Stethoscope } from "lucide-react"

const sales = [
    {
        orderId: "RX-2024-001",
        patient: "Cameron Williamson",
        doctor: "Dr. Richard James",
        medicines: "Amoxicillin, Panadol",
        date: "2024-03-12",
        amount: "$25.00",
        status: "Completed"
    },
    {
        orderId: "RX-2024-002",
        patient: "Leslie Alexander",
        doctor: "Dr. Sarah Conner",
        medicines: "Insulin Glargine",
        date: "2024-03-12",
        amount: "$120.00",
        status: "Processing"
    },
    {
        orderId: "RX-2024-003",
        patient: "Bessie Cooper",
        doctor: "Dr. Michael Chen",
        medicines: "Metformin, Atorvastatin",
        date: "2024-03-11",
        amount: "$45.50",
        status: "Completed"
    },
]

export function PrescriptionSales() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Prescription Sales</h3>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Sale
                </Button>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Patient</TableHead>
                            <TableHead>Prescribing Doctor</TableHead>
                            <TableHead>Medicines</TableHead>
                            <TableHead>Total Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sales.map((sale) => (
                            <TableRow key={sale.orderId}>
                                <TableCell className="font-medium">{sale.orderId}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-gray-400" />
                                        {sale.patient}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Stethoscope className="h-4 w-4" />
                                        <span className="text-gray-900">{sale.doctor}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{sale.medicines}</TableCell>
                                <TableCell className="font-bold">{sale.amount}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={sale.status === "Completed" ? "outline" : "secondary"}
                                        className={sale.status === "Completed" ? "bg-green-50 text-green-700 border-green-200" : "bg-blue-50 text-blue-700 border-blue-200"}
                                    >
                                        {sale.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">
                                        <ShoppingCart className="h-4 w-4 text-gray-500" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
