"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AmbulanceStats } from "@/components/ambulance/AmbulanceStats"
import { AmbulanceBookingForm } from "@/components/ambulance/AmbulanceBookingForm"
import { AmbulanceRequests } from "@/components/ambulance/AmbulanceRequests"

export default function AmbulancePage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Ambulance Services</h1>
                <p className="text-muted-foreground">
                    Efficiently manage ambulance dispatch handling, bookings, and active trips.
                </p>
            </div>

            <AmbulanceStats />

            <Tabs defaultValue="booking" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="booking">Book Ambulance</TabsTrigger>
                    <TabsTrigger value="requests">Active Requests</TabsTrigger>
                </TabsList>

                <TabsContent value="booking" className="space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <AmbulanceBookingForm />
                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Contact</h3>
                                <p className="text-sm text-red-600 mb-4">
                                    For immediate life-threatening emergencies, please call the dedicated hotline directly.
                                </p>
                                <div className="text-3xl font-bold text-red-600">
                                    108
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="requests" className="space-y-4">
                    <AmbulanceRequests />
                </TabsContent>
            </Tabs>
        </div>
    )
}
