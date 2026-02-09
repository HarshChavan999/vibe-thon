"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
    patientName: z.string().min(2, {
        message: "Patient name must be at least 2 characters.",
    }),
    mobileNumber: z.string().min(10, {
        message: "Mobile number must be at least 10 digits.",
    }),
    pickupAddress: z.string().min(5, {
        message: "Pickup address is required.",
    }),
    dropLocation: z.string().min(2, {
        message: "Hospital or drop location is required.",
    }),
    emergencyType: z.enum(["Emergency", "Non-Emergency"], {
        required_error: "Please select an emergency type.",
    }),
    ambulanceType: z.enum(["Normal", "ICU"], {
        required_error: "Please select an ambulance type.",
    }),
})

export function AmbulanceBookingForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            patientName: "",
            mobileNumber: "",
            pickupAddress: "",
            dropLocation: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        alert("Ambulance booked successfully (Mock)!")
    }

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Book an Ambulance</CardTitle>
                <CardDescription>Enter patient and location details for immediate dispatch.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="patientName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Patient Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="mobileNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mobile Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+1 234 567 8900" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="pickupAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pickup Address</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter full address..." className="resize-none" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="dropLocation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Hospital / Drop Location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="City Hospital, Downtown" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="emergencyType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Emergency Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Emergency">Emergency</SelectItem>
                                                <SelectItem value="Non-Emergency">Non-Emergency</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="ambulanceType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ambulance Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select vehicle" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Normal">Normal Support (BLS)</SelectItem>
                                                <SelectItem value="ICU">ICU Support (ALS)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Book Ambulance Now</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
