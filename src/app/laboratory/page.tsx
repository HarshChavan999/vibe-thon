"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, FlaskConical } from "lucide-react"
import { LabStats } from "@/components/laboratory/LabStats"
import { TestBooking } from "@/components/laboratory/TestBooking"
import { SampleTracking } from "@/components/laboratory/SampleTracking"
import { LabReports } from "@/components/laboratory/LabReports"

export default function LaboratoryPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Laboratory Management</h1>
                    <p className="text-muted-foreground">
                        Manage lab tests, track samples, and generate patient reports.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button>
                        <FlaskConical className="mr-2 h-4 w-4" /> New Test Request
                    </Button>
                </div>
            </div>

            <LabStats />

            <Tabs defaultValue="booking" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
                    <TabsList>
                        <TabsTrigger value="booking">Test Booking</TabsTrigger>
                        <TabsTrigger value="tracking">Sample Tracking</TabsTrigger>
                        <TabsTrigger value="reports">Lab Reports</TabsTrigger>
                    </TabsList>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative w-full sm:w-[300px]">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Search orders, tests..." className="pl-8" />
                        </div>
                        <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <TabsContent value="booking" className="space-y-4">
                    <TestBooking />
                </TabsContent>

                <TabsContent value="tracking" className="space-y-4">
                    <SampleTracking />
                </TabsContent>

                <TabsContent value="reports" className="space-y-4">
                    <LabReports />
                </TabsContent>

            </Tabs>
        </div>
    )
}
