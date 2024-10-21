"use client"

import { z } from "zod";
import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ClinicInfoProps } from "@/components/clinics/ClinicItem";
import useClinicContext from '@/hooks/use-clinic-context';

enum Phase {
  Test = "test",
  Live = "live",
  Disabled = "disabled",
}

const clinicInformationSchema = z.object({
  clinicName: z.string().min(5, { message: "The clinic name must be 5 or more characters long." }).max(50, { message: "The clinic name must be 50 or fewer characters long." }),
  description: z.string().max(255, { message: "The description must be 255 or fewer characters long." }),
  address: z.string().max(255, { message: "The address must be 255 or fewer characters long." }),
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, { message: "The phone number must be in the format 123-456-7890." }),
  logo: z.string().url({ message: "The logo must be a valid URL." }),
  smallLogo: z.string().url({ message: "The small logo must be a valid URL." }),
  landingPage: z.string().url({ message: "The landing page must be a valid URL." }),
  phase: z.nativeEnum(Phase, { message: "The phase must be one of the predefined values." }),
  roomAllocation: z.number().int().min(0, { message: "The room allocation must be a non-negative integer." }),
});

const ClinicInformationSection = () => {
    const clinicInformationForm = useForm<z.infer<typeof clinicInformationSchema>>({
    resolver: zodResolver(clinicInformationSchema),
        defaultValues: {
        clinicName: "",
        description: "",
        address: "",
        phone: "",
        logo: "",
        smallLogo: "",
        landingPage: "",
        phase: Phase.Test,
        roomAllocation: 1,
        },
    });
    const { toast } = useToast();
    const { addClinicItem } = useClinicContext();
    const { reset } = clinicInformationForm;

    function onSubmit(data: z.infer<typeof clinicInformationSchema>) {
        const newClinicItem: ClinicInfoProps = {
        ph: "T",
        image: data.logo,
        name: data.clinicName,
        contact: "",
        address: data.address,
        phone: data.phone,
        email: "",
        status: data.phase,
        startDate: new Date().toISOString().split('T')[0],
        billingCycle: "N/A",
        payment: "$0",
        nextBillingDate: "N/A",
        };

        addClinicItem(newClinicItem);

        toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        });

        reset();

        window.location.href = "/";
    }

    function onError(errors: FieldErrors<typeof clinicInformationSchema>) {
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
        <div>
        <Form {...clinicInformationForm}>
            <form onSubmit={clinicInformationForm.handleSubmit(onSubmit, onError)} className="w-2/3 space-y-4">
            <FormField
                control={clinicInformationForm.control}
                name="clinicName"
                render={({ field }) => (
                <FormItem>
                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg">Clinic Name: </FormLabel>
                        <div className="col-span-4">
                            <FormControl>
                                <Input placeholder="e.g Goodhealth" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the name of the clinic.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
            )}
            />
            <FormField
                control={clinicInformationForm.control}
                name="description"
                render={({ field }) => (
                <FormItem>
                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg">Description: </FormLabel>
                        <div className="col-span-4">
                            <FormControl>
                                <Textarea placeholder="Marketing Blurb about Goodhealth"
                                className="resize-none h-36"
                                {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                A brief description of the clinic.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
                )}
            />
            <FormField
                control={clinicInformationForm.control}
                name="address"
                render={({ field }) => (
                <FormItem>
                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg">Address: </FormLabel>
                            <div className="col-span-4">
                            <FormControl>
                                <Input placeholder="e.g 123 Main St, Topeka, KS 12547" autoComplete="address-line1" {...field} />
                            </FormControl>
                            <FormDescription>
                                The clinic's address.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
                )}
            />
            <FormField
                control={clinicInformationForm.control}
                name="phone"
                render={({ field }) => (
                <FormItem>
                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg">Phone: </FormLabel>
                        <div className="col-span-4">
                            <FormControl>
                                <Input placeholder="e.g 123-456-7890" autoComplete="tel" {...field} />
                            </FormControl>
                            <FormDescription>
                                The clinic's phone number.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
                )}
            />
            <FormField
                control={clinicInformationForm.control}
                name="logo"
                render={({ field }) => (
                <FormItem>
                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg">Logo: </FormLabel>
                        <div className="col-span-4">
                            <FormControl>
                                <Input placeholder="http://file.path" {...field} />
                            </FormControl>
                            <FormDescription>
                                URL of the clinic's logo.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
                )}
            />
            <FormField
                control={clinicInformationForm.control}
                name="smallLogo"
                render={({ field }) => (
                <FormItem>
                    <div className="grid grid-cols-5">
                    <FormLabel className="text-lg">Small Logo: </FormLabel>
                        <div className="col-span-4">
                            <FormControl>
                                <Input placeholder="http://file.path" {...field} />
                            </FormControl>
                            <FormDescription>
                                URL of the clinic's small logo.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
                )}
            />
            <FormField
                control={clinicInformationForm.control}
                name="landingPage"
                render={({ field }) => (
                <FormItem>
                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg">Landing Page: </FormLabel>
                        <div className="col-span-4">
                            <FormControl>
                                <Input placeholder="Form name" {...field} />
                            </FormControl>
                            <FormDescription>
                                URL of the clinic's landing page.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
                )}
            />
            <FormField
                control={clinicInformationForm.control}
                name="phase"
                render={({ field }) => (
                <FormItem>
                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg">Phase: </FormLabel>
                        <div className="col-span-4">
                            <FormControl>
                                <Label>Test Phase</Label>
                            </FormControl>
                        </div>
                    </div>
                </FormItem>
                )}
            />
            <FormField
                control={clinicInformationForm.control}
                name="roomAllocation"
                render={({ field }) => (
                <FormItem>
                    <div className="grid grid-cols-5">
                        <FormLabel className="text-lg">Room Allocation: </FormLabel>
                        <div className="col-span-4">
                            <FormControl>
                                <FormLabel>1</FormLabel>
                            </FormControl>
                            <FormDescription>
                                Number of rooms allocated to the clinic. By default is 1.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </div>
                </FormItem>
                )}
            />
            <div className="flex justify-center">
                <Button type="submit" className="px-12">Update</Button>
            </div>
            </form>
        </Form>

        <hr className="my-8"/>
      </div>
  )
};

export default ClinicInformationSection;
