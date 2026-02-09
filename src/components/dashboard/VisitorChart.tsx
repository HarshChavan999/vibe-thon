"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
    { name: "1 JUL", visitors: 4000, patients: 2400 },
    { name: "3", visitors: 3000, patients: 1398 },
    { name: "5", visitors: 2000, patients: 9800 },
    { name: "7", visitors: 2780, patients: 3908 },
    { name: "9", visitors: 1890, patients: 4800 },
    { name: "11", visitors: 2390, patients: 3800 },
    { name: "13", visitors: 3490, patients: 4300 },
    { name: "15", visitors: 4000, patients: 2400 },
    { name: "17", visitors: 3000, patients: 1398 },
    { name: "19", visitors: 2000, patients: 9800 },
    { name: "23", visitors: 2780, patients: 3908 },
    { name: "26", visitors: 1890, patients: 4800 },
    { name: "29", visitors: 2390, patients: 3800 },
    { name: "31", visitors: 3490, patients: 4300 },
]

export function VisitorChart() {
    return (
        <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="text-lg font-medium">Visitors Statistics</CardTitle>
                    <div className="flex gap-8 mt-4">
                        <div>
                            <p className="text-sm text-gray-500">Total Visitors</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold">42,345</span>
                                <span className="text-xs text-green-500 bg-green-50 px-1.5 py-0.5 rounded">47% ↗</span>
                                <span className="text-xs text-gray-400">From last month</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Patients</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold">2,345</span>
                                <span className="text-xs text-red-500 bg-red-50 px-1.5 py-0.5 rounded">10% ↘</span>
                                <span className="text-xs text-gray-400">From last month</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Select defaultValue="30">
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="30">Last 30 days</SelectItem>
                        <SelectItem value="7">Last 7 days</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                            <Tooltip
                                contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                                cursor={{ stroke: "#6366F1", strokeWidth: 2, strokeDasharray: "5 5" }}
                            />
                            <Line
                                type="monotone"
                                dataKey="visitors"
                                stroke="#6366F1"
                                strokeWidth={3}
                                dot={{ r: 4, fill: "#6366F1", strokeWidth: 0, stroke: "#fff" }}
                                activeDot={{ r: 6, strokeWidth: 0 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
