"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Search, Filter } from "lucide-react"
import { AppointmentStats } from "@/components/appointments/AppointmentStats"
import { AppointmentList } from "@/components/appointments/AppointmentList"
import { SlotAvailability } from "@/components/appointments/SlotAvailability"

export default function AppointmentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Appointment System</h1>
                    <p className="text-muted-foreground">
                        Manage online & walk-in appointments, check slot availability, and handle cancellations.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Book Appointment
                    </Button>
                </div>
            </div>

            <AppointmentStats />

            <Tabs defaultValue="all" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
                    <TabsList>
                        <TabsTrigger value="all">All Appointments</TabsTrigger>
                        <TabsTrigger value="slots">Slot Availability</TabsTrigger>
                        <TabsTrigger value="walkin">Walk-in Queue</TabsTrigger>
                    </TabsList>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative w-full sm:w-[300px]">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Search patient, doctor..." className="pl-8" />
                        </div>
                        <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <TabsContent value="all" className="space-y-4">
                    <AppointmentList />
                </TabsContent>

                <TabsContent value="slots" className="space-y-4">
                    <SlotAvailability />
                </TabsContent>

                <TabsContent value="walkin" className="space-y-4">
                    <div className="p-10 border border-dashed rounded-lg bg-gray-50 text-center">
                        <h3 className="text-lg font-medium">Walk-in Queue Management</h3>
                        <p className="text-muted-foreground">Use this tab to manage real-time walk-in patients.</p>
                        <Button className="mt-4" variant="outline">Start Queue view</Button>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
