"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MoreVertical, Droplet, Activity } from "lucide-react"
import { BarChart, Bar, ResponsiveContainer, Cell, Tooltip } from "recharts"

const bloodData = [
    { name: 'Mon', value: 40 },
    { name: 'Tue', value: 30 },
    { name: 'Wed', value: 20 },
    { name: 'Thu', value: 27 },
    { name: 'Fri', value: 18 },
    { name: 'Sat', value: 23 },
    { name: 'Sun', value: 34 },
    { name: 'Mon', value: 40 },
    { name: 'Tue', value: 30 },
]

const kidneyData = [
    { name: '1', value: 10 },
    { name: '2', value: 20 },
    { name: '3', value: 30 },
    { name: '4', value: 40 },
    { name: '5', value: 50 },
    { name: '6', value: 60 },
    { name: '7', value: 70 },
    { name: '8', value: 60 },
    { name: '9', value: 50 },
    { name: '10', value: 40 },
    { name: '11', value: 30 },
    { name: '12', value: 20 },
    { name: '13', value: 10 },
    { name: '14', value: 20 },
    { name: '15', value: 30 },
    { name: '16', value: 40 },
    { name: '17', value: 50 },
]

export function BloodCancerCard() {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-red-50 rounded-lg text-red-500">
                        <Droplet className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-sm font-medium">Blood Cancer Patient</CardTitle>
                </div>
                <MoreVertical className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <div className="text-2xl font-bold">1060</div>
                        <p className="text-xs text-green-500 bg-green-50 inline-block px-1.5 py-0.5 rounded mt-1">10% ↗</p>
                        <p className="text-xs text-gray-400 mt-1">Patients has been admitted</p>
                    </div>
                </div>
                <div className="h-[80px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={bloodData}>
                            <Bar dataKey="value" fill="#EF4444" radius={[4, 4, 4, 4]} barSize={6}>
                                {bloodData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill="#EF4444" />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}

export function KidneyDamageCard() {
    return (
        <Card className="bg-[#1F2937] text-white h-full border-none">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/10 rounded-lg text-white">
                        <Activity className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-sm font-medium text-white">Kidney Damage Patient</CardTitle>
                </div>
                <MoreVertical className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-end mb-4">
                    <div className="h-[60px] w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={kidneyData}>
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#374151', border: 'none', color: '#fff' }} />
                                <Bar dataKey="value" fill="#6366F1" radius={[2, 2, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="text-right ml-4 min-w-[80px]">
                        <div className="text-xs text-red-500 bg-red-900/30 inline-block px-1.5 py-0.5 rounded mb-1">10% ↘</div>
                        <div className="text-2xl font-bold">3672</div>
                        <p className="text-xs text-gray-400">Patients has been admitted</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
