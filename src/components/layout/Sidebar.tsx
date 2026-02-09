import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    LayoutGrid,
    Calendar,
    Stethoscope,
    Users,
    FileText,
    MessageSquare,
    FilePlus,
    LifeBuoy,
    FlaskConical,
    Pill,
    Ambulance
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className, ...props }: SidebarProps) {
    const navItems = [
        { name: "Overview", href: "/", icon: LayoutGrid },
        { name: "Appointments", href: "/appointments", icon: Calendar },
        { name: "Doctors", href: "/doctors", icon: Stethoscope },
        { name: "Laboratory", href: "/laboratory", icon: FlaskConical },
        { name: "Ambulance", href: "/ambulance", icon: Ambulance },
        { name: "Messages", href: "/messages", icon: MessageSquare, badge: 1 },
        { name: "Pharmacy", href: "/pharmacy", icon: Pill },
    ];

    return (
        <div className={cn("flex bg-[#0D1117] text-white w-64 min-h-screen flex-col font-sans", className)} {...props}>
            <div className="p-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <div className="w-4 h-4 text-white">
                        {/* Logo Icon Placeholder */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v8" />
                            <path d="M8 12h8" />
                        </svg>
                    </div>
                </div>
                <span className="text-xl font-bold">ProvoHeal</span>
            </div>

            <div className="px-4 py-2">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full bg-[#161B22] border-none rounded-lg py-2 pl-9 pr-4 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <svg
                        className="absolute left-3 top-2.5 h-4 w-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${item.name === "Overview"
                            ? "bg-[#1F2937] text-white font-medium"
                            : "text-gray-400 hover:bg-[#1F2937] hover:text-white"
                            }`}
                    >
                        <item.icon className="h-5 w-5" />
                        <span className="flex-1">{item.name}</span>
                        {item.badge && (
                            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                {item.badge}
                            </span>
                        )}
                    </Link>
                ))}
            </nav>

            <div className="p-4 mt-auto">
                <div className="bg-[#161B22] rounded-xl p-4 flex flex-col items-center text-center relative overflow-hidden group">
                    {/* Decorative element resembling the help icon in 3D */}
                    <div className="mb-3 relative w-12 h-12">
                        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                        <LifeBuoy className="w-12 h-12 text-blue-500 relative z-10" />
                    </div>

                    <button className="w-full py-2 bg-[#1F2937] rounded-lg flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-white hover:bg-[#2e3b4e] transition-colors">
                        <LifeBuoy className="h-4 w-4" />
                        Help Center
                    </button>
                </div>
            </div>
        </div>
    );
}
