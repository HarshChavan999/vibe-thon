"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, MoreVertical } from "lucide-react"
import { ResponsiveContainer, BarChart, Bar, LineChart, Line } from "recharts"

interface StatsCardProps {
    title: string
    value: string
    change: number
    trend: "up" | "down"
    data: any[]
    type: "bar" | "line"
    icon: React.ReactNode
    chartColor: string
}

export function StatsCard({ title, value, change, trend, data, type, icon, chartColor }: StatsCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                        {icon}
                    </div>
                    <CardTitle className="text-sm font-medium text-gray-500">
                        {title}
                    </CardTitle>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-4 w-4" />
                </button>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-2xl font-bold">{value}</div>
                        <p className={`text-xs flex items-center mt-1 ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
                            {trend === "up" ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                            <span className="font-medium mr-1">{Math.abs(change)}%</span>
                            <span className="text-gray-400">From last month</span>
                        </p>
                    </div>
                    <div className="h-[40px] w-[80px]">
                        <ResponsiveContainer width="100%" height="100%">
                            {type === "bar" ? (
                                <BarChart data={data}>
                                    <Bar dataKey="value" fill={chartColor} radius={[2, 2, 0, 0]} />
                                </BarChart>
                            ) : (
                                <LineChart data={data}>
                                    <Line type="monotone" dataKey="value" stroke={chartColor} strokeWidth={2} dot={false} />
                                </LineChart>
                            )}
                        </ResponsiveContainer>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
