"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Search, Filter } from "lucide-react"
import { DoctorStats } from "@/components/doctors/DoctorStats"
import { DoctorsList } from "@/components/doctors/DoctorsList"
import { DoctorSchedule } from "@/components/doctors/DoctorSchedule"
import { ConsultationHistory } from "@/components/doctors/ConsultationHistory"

export default function DoctorsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Doctor Management</h1>
                    <p className="text-muted-foreground">
                        Manage doctor profiles, schedules, specialization, and consultation history.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Doctor
                    </Button>
                </div>
            </div>

            <DoctorStats />

            <Tabs defaultValue="all" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
                    <TabsList>
                        <TabsTrigger value="all">All Doctors</TabsTrigger>
                        <TabsTrigger value="schedule">Duty Schedule</TabsTrigger>
                        <TabsTrigger value="opd">OPD Availability</TabsTrigger>
                        <TabsTrigger value="history">Consultation History</TabsTrigger>
                    </TabsList>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <div className="relative w-full sm:w-[300px]">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Search doctors..." className="pl-8" />
                        </div>
                        <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <TabsContent value="all" className="space-y-4">
                    <DoctorsList />
                </TabsContent>

                <TabsContent value="schedule" className="space-y-4">
                    <DoctorSchedule />
                </TabsContent>

                <TabsContent value="opd" className="space-y-4">
                    <div className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-md text-sm">
                            Showing OPD availability for current week.
                        </div>
                        <DoctorSchedule />
                    </div>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    <ConsultationHistory />
                </TabsContent>
            </Tabs>

        </div>
    )
}
