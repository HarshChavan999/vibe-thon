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
import { Phone, MapPin, AlertCircle, Ambulance } from "lucide-react"

const requests = [
    {
        id: "AMB-101",
        patient: "Cameron Williamson",
        mobile: "+1 (555) 000-0000",
        pickup: "123 Main St, Springfield",
        drop: "City General Hospital",
        type: "Emergency",
        vehicle: "ICU (ALS)",
        status: "Dispatched",
        eta: "5 mins"
    },
    {
        id: "AMB-102",
        patient: "Leslie Alexander",
        mobile: "+1 (555) 111-1111",
        pickup: "456 Oak Ave, Downtown",
        drop: "Community Clinic",
        type: "Non-Emergency",
        vehicle: "Normal (BLS)",
        status: "Completed",
        eta: "-"
    },
    {
        id: "AMB-103",
        patient: "Bessie Cooper",
        mobile: "+1 (555) 222-2222",
        pickup: "789 Pine Ln, Westside",
        drop: "St. Mary's Hospital",
        type: "Emergency",
        vehicle: "ICU (ALS)",
        status: "Pending",
        eta: "Searching..."
    },
]

export function AmbulanceRequests() {
    return (
        <div className="rounded-md border bg-white">
            <div className="p-4 border-b">
                <h3 className="text-lg font-medium">Active Requests</h3>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Request ID</TableHead>
                        <TableHead>Patient Details</TableHead>
                        <TableHead>Locations</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {requests.map((req) => (
                        <TableRow key={req.id}>
                            <TableCell className="font-medium">{req.id}</TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="font-medium">{req.patient}</span>
                                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                                        <Phone className="h-3 w-3" /> {req.mobile}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col text-sm max-w-[200px]">
                                    <span className="truncate" title={req.pickup}>From: {req.pickup}</span>
                                    <span className="truncate text-muted-foreground" title={req.drop}>To: {req.drop}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="space-y-1">
                                    <Badge variant={req.type === "Emergency" ? "destructive" : "secondary"}>
                                        {req.type}
                                    </Badge>
                                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Ambulance className="h-3 w-3" /> {req.vehicle}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="space-y-1">
                                    <Badge
                                        variant="outline"
                                        className={
                                            req.status === "Dispatched" ? "text-blue-600 border-blue-200 bg-blue-50" :
                                                req.status === "Completed" ? "text-green-600 border-green-200 bg-green-50" :
                                                    "text-orange-600 border-orange-200 bg-orange-50"
                                        }
                                    >
                                        {req.status}
                                    </Badge>
                                    {req.status === "Dispatched" && (
                                        <p className="text-xs text-blue-600 font-medium">ETA: {req.eta}</p>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="sm">Track</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
