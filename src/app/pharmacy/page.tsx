"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Pill } from "lucide-react"
import { PharmacyStats } from "@/components/pharmacy/PharmacyStats"
import { InventoryList } from "@/components/pharmacy/InventoryList"
import { PrescriptionSales } from "@/components/pharmacy/PrescriptionSales"
import { SupplierList } from "@/components/pharmacy/SupplierList"

export default function PharmacyPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Pharmacy Management</h1>
                    <p className="text-muted-foreground">
                        Manage medicine inventory, track sales, and handle supplier orders.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button>
                        <Pill className="mr-2 h-4 w-4" /> Add New Medicine
                    </Button>
                </div>
            </div>

            <PharmacyStats />

            <Tabs defaultValue="inventory" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
                    <TabsList>
                        <TabsTrigger value="inventory">Inventory</TabsTrigger>
                        <TabsTrigger value="sales">Prescription Sales</TabsTrigger>
                        <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
                    </TabsList>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative w-full sm:w-[300px]">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Search medicines, suppliers..." className="pl-8" />
                        </div>
                        <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <TabsContent value="inventory" className="space-y-4">
                    <InventoryList />
                </TabsContent>

                <TabsContent value="sales" className="space-y-4">
                    <PrescriptionSales />
                </TabsContent>

                <TabsContent value="suppliers" className="space-y-4">
                    <SupplierList />
                </TabsContent>
            </Tabs>
        </div>
    )
}
