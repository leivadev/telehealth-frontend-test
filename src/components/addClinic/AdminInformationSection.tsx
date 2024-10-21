"use client"

import { z } from "zod";
import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button";
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
import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";
// import { ClinicInfoProps } from "@/components/clinics/ClinicItem";
// import useClinicContext from '@/hooks/use-clinic-context';

const adminInformationSchema = z.object({
    firstName: z.string().min(2, { message: "The first name must be 2 or more characters long." }).max(50, { message: "The first name must be 50 or fewer characters long." }),
    lastName: z.string().min(2, { message: "The last name must be 2 or more characters long." }).max(50, { message: "The last name must be 50 or fewer characters long." }),
    email: z.string().email({ message: "The email must be a valid email address." }),
    phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, { message: "The phone number must be in the format 123-456-7890." }),
});

const AdminInformationSection = () => {

    const { toast } = useToast();

    const adminInformationForm = useForm<z.infer<typeof adminInformationSchema>>({
    resolver: zodResolver(adminInformationSchema),
        defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        },
    });

    // const { addClinicItem } = useClinicContext();
    // const { reset } = adminInformationForm;

    function onSubmit(data: z.infer<typeof adminInformationSchema>) {

        toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        })
    }

    function onError(errors: FieldErrors<typeof adminInformationSchema>) {
        toast({
        title: "There are errors in the form.",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(errors, null, 2)}</code>
            </pre>
        ),
        })
    }


    return (

        <>
        <h2 className="text-2xl font-bold mb-8">Clinic Admin (Required)</h2>
        <div>
            <Form {...adminInformationForm}>
                <form onSubmit={adminInformationForm.handleSubmit(onSubmit, onError)} className="w-2/3 space-y-4">
                    <FormField
                        control={adminInformationForm.control}
                        name="firstName"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-5">
                            <FormLabel className="text-lg">First Name: </FormLabel>
                                <div className="col-span-4 grid grid-cols-11 gap-2">
                                    <FormControl>
                                        <Input placeholder="Dr" />
                                    </FormControl>
                                    <FormControl className="col-span-10">
                                        <Input placeholder="First Name" {...field} />
                                    </FormControl>
                                    <FormMessage className="col-span-full" />
                                </div>
                            </div>
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={adminInformationForm.control}
                        name="lastName"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-5">
                            <FormLabel className="text-lg">Last Name: </FormLabel>
                                <div className="col-span-4 grid grid-cols-11 gap-2">
                                    <FormControl>
                                        <Input placeholder="Ml" />
                                    </FormControl>
                                    <FormControl className="col-span-8">
                                        <Input placeholder="Last Name" {...field} />
                                    </FormControl>
                                    <FormControl className="col-span-2">
                                        <Input placeholder="PhD"/>
                                    </FormControl>
                                    <FormMessage className="col-span-full" />
                                </div>
                            </div>
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={adminInformationForm.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-5">
                            <FormLabel className="text-lg">Address: </FormLabel>
                                <div className="col-span-4">
                                    <FormControl>
                                        <Input placeholder="e.g 123 Main St, Topeka, KS 12547" autoComplete="address-line1" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={adminInformationForm.control}
                        name="phone"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-5">
                            <FormLabel className="text-lg">Phone: </FormLabel>
                                <div className="col-span-4">
                                    <FormControl>
                                        <Input placeholder="e.g 123-456-7890" autoComplete="tel" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg">Status: </FormLabel>
                        <div className="col-span-4">
                            <FormDescription>
                                Invite hasn't been sent yet.
                            </FormDescription>
                        </div>
                    </div>
                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg flex items-center gap-2"><PlusIcon size={24} /> Audit Log:
                        </FormLabel>
                        <div className="col-span-4">
                            <Link to="/audit-logs/clinic-admins" className="text-slate-800 font-medium hover:underline">More...</Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button type="submit" disabled className="px-12">Update & Send Invite</Button>
                    </div>
                </form>
            </Form>

            <hr className="my-8"/>
        </div>
        </>
  )
};

export default AdminInformationSection;