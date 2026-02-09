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
import { FileText, Download, Share2 } from "lucide-react"

const reports = [
    {
        reportId: "REP-2024-001",
        patient: "Cameron Williamson",
        test: "Hematology Panel",
        date: "2024-03-10",
        status: "Finalized",
        doctor: "Dr. Richard James",
    },
    {
        reportId: "REP-2024-002",
        patient: "Leslie Alexander",
        test: "Urinalysis",
        date: "2024-03-09",
        status: "Finalized",
        doctor: "Dr. Sarah Conner",
    },
    {
        reportId: "REP-2024-003",
        patient: "Bessie Cooper",
        test: "Thyroid Profile",
        date: "2024-03-08",
        status: "Review Pending",
        doctor: "Dr. Michael Chen",
    },
]

export function LabReports() {
    return (
        <div className="space-y-4">
            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Report ID</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Patient Name</TableHead>
                            <TableHead>Test Conducted</TableHead>
                            <TableHead>Referring Doctor</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Access & Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reports.map((report) => (
                            <TableRow key={report.reportId}>
                                <TableCell className="font-medium">{report.reportId}</TableCell>
                                <TableCell>{report.date}</TableCell>
                                <TableCell>{report.patient}</TableCell>
                                <TableCell>{report.test}</TableCell>
                                <TableCell>{report.doctor}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={report.status === "Finalized" ? "default" : "secondary"}
                                        className={report.status === "Finalized" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"}
                                    >
                                        {report.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline" size="sm" className="h-8 gap-1">
                                            <Share2 className="h-3 w-3" /> Share
                                        </Button>
                                        <Button size="sm" className="h-8 gap-1 bg-blue-600 hover:bg-blue-700 text-white">
                                            <Download className="h-3 w-3" /> PDF
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
