"use client"

import { StatsCard } from "@/components/dashboard/StatsCard"
import { VisitorChart } from "@/components/dashboard/VisitorChart"
import { BloodCancerCard, KidneyDamageCard } from "@/components/dashboard/DiseaseStats"
import { RecentAppointments } from "@/components/dashboard/RecentAppointments"
import { Users, UserPlus, FileText } from "lucide-react"

const patientsData = [
  { value: 400 }, { value: 300 }, { value: 200 }, { value: 278 }, { value: 189 }, { value: 239 }, { value: 349 },
]
const appointmentsData = [
  { value: 100 }, { value: 200 }, { value: 150 }, { value: 300 }, { value: 250 }, { value: 350 }, { value: 200 },
]
const reportsData = [
  { value: 240 }, { value: 139 }, { value: 980 }, { value: 390 }, { value: 480 }, { value: 380 }, { value: 430 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Patients"
          value="2,420"
          change={47}
          trend="up"
          data={patientsData}
          type="bar"
          icon={<Users className="h-5 w-5" />}
          chartColor="#6366F1"
        />
        <StatsCard
          title="New Appointments"
          value="226"
          change={10}
          trend="down"
          data={appointmentsData}
          type="line"
          icon={<UserPlus className="h-5 w-5" />}
          chartColor="#8B5CF6"
        />
        <StatsCard
          title="Pending Reports"
          value="193"
          change={25}
          trend="up"
          data={reportsData}
          type="bar"
          icon={<FileText className="h-5 w-5" />}
          chartColor="#F97316"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Charts & Table) */}
        <div className="lg:col-span-2 space-y-6">
          <VisitorChart />
          <RecentAppointments />
        </div>

        {/* Right Column (Disease Stats) */}
        <div className="space-y-6">
          <div className="h-[300px]">
            <BloodCancerCard />
          </div>
          <div className="h-[250px]">
            <KidneyDamageCard />
          </div>
        </div>
      </div>
    </div>
  )
}
