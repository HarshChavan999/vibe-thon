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
import { Plus, AlertTriangle, Syringe, Pill } from "lucide-react"

const inventory = [
    {
        id: "MED-001",
        name: "Amoxicillin 500mg",
        category: "Antibiotic",
        stock: 450,
        unit: "Tablets",
        expiry: "2024-12-15",
        status: "In Stock"
    },
    {
        id: "MED-002",
        name: "Paracetamol 650mg",
        category: "Analgesic",
        stock: 1200,
        unit: "Tablets",
        expiry: "2025-06-30",
        status: "In Stock"
    },
    {
        id: "MED-003",
        name: "Insulin Glargine",
        category: "Diabetes",
        stock: 12,
        unit: "Vials",
        expiry: "2024-04-10",
        status: "Low Stock"
    },
    {
        id: "MED-004",
        name: "Vitamin D3",
        category: "Supplement",
        stock: 80,
        unit: "Capsules",
        expiry: "2024-03-25",
        status: "Expiring Soon"
    },
]

export function InventoryList() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Medicine Inventory</h3>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add Medicine
                </Button>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Medicine ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Stock Level</TableHead>
                            <TableHead>Expiry Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {inventory.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.id}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Pill className="h-4 w-4 text-blue-500" />
                                        {item.name}
                                    </div>
                                </TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.stock} {item.unit}</TableCell>
                                <TableCell>{item.expiry}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={`gap-1
                        ${item.status === 'In Stock' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                        ${item.status === 'Low Stock' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                        ${item.status === 'Expiring Soon' ? 'bg-orange-50 text-orange-700 border-orange-200' : ''}
                    `}
                                    >
                                        {item.status === 'Low Stock' && <AlertTriangle className="h-3 w-3" />}
                                        {item.status === 'Expiring Soon' && <Syringe className="h-3 w-3" />}
                                        {item.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">Restock</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
