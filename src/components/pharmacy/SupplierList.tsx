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
import { ShoppingCart, User, Building2, Phone, Mail } from "lucide-react"

const suppliers = [
    {
        orderId: "SUP-001",
        name: "MedLife Pharmaceuticals",
        contact: "John Doe",
        email: "john@medlife.com",
        medicines: "Antibiotics, Painkillers",
        lastOrder: "2024-02-15",
        status: "Active"
    },
    {
        orderId: "SUP-002",
        name: "Global Health Supplies",
        contact: "Jane Smith",
        email: "jane@globalhealth.com",
        medicines: "Insulin, Surgical Items",
        lastOrder: "2024-03-01",
        status: "Active"
    },
    {
        orderId: "SUP-003",
        name: "CareWell Distributors",
        contact: "Robert Brown",
        email: "robert@carewell.com",
        medicines: "Vitamins, Supplements",
        lastOrder: "2023-11-20",
        status: "Inactive"
    },
]

export function SupplierList() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Supplier Management</h3>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Supplier
                </Button>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Supplier Name</TableHead>
                            <TableHead>Contact Person</TableHead>
                            <TableHead>Contact Info</TableHead>
                            <TableHead>Supplied Category</TableHead>
                            <TableHead>Last Order</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">History</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {suppliers.map((sup) => (
                            <TableRow key={sup.orderId}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <Building2 className="h-4 w-4 text-gray-500" />
                                        {sup.name}
                                    </div>
                                </TableCell>
                                <TableCell>{sup.contact}</TableCell>
                                <TableCell>
                                    <div className="flex flex-col text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <Mail className="h-3 w-3" /> {sup.email}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{sup.medicines}</TableCell>
                                <TableCell>{sup.lastOrder}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={sup.status === "Active" ? "outline" : "secondary"}
                                        className={sup.status === "Active" ? "bg-green-50 text-green-700 border-green-200" : "bg-gray-100 text-gray-500 border-gray-200"}
                                    >
                                        {sup.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

function Plus(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}
