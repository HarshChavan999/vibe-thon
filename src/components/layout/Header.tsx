
import { MessageSquare, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="flex h-16 items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Richard</h1>
                <p className="text-sm text-gray-500">Track, manage and forecast your patient reports and data.</p>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-gray-900">
                    <MessageSquare className="h-5 w-5" />
                    <span className="sr-only">Messages</span>
                </Button>

                <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-gray-900">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                    <span className="sr-only">Notifications</span>
                </Button>

                <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="@richard" />
                        <AvatarFallback>RC</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
            </div>
        </header>
    );
}
