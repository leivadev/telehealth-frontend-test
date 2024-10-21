"use client"

import { z } from "zod";
import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const stripeAccountInformationSchema = z.object({
    apiUrl: z.string().url({ message: "The API URL must be a valid URL." }),
    username: z.string().min(2, { message: "The username must be 2 or more characters long." }).max(50, { message: "The username must be 50 or fewer characters long." }),
    secretKey: z.string().min(8, { message: "The secret key must be 8 or more characters long." }),
});

const StripeAccountInformationSection = () => {

    const { toast } = useToast();

    const stripeAccountInformationForm = useForm<z.infer<typeof stripeAccountInformationSchema>>({
    resolver: zodResolver(stripeAccountInformationSchema),
        defaultValues: {
        apiUrl: "",
        username: "",
        secretKey: "",
        },
    });

    function onSubmit(data: z.infer<typeof stripeAccountInformationSchema>) {

        toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        })
    }

    function onError(errors: FieldErrors<typeof stripeAccountInformationSchema>) {
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
        <h2 className="text-2xl font-bold mb-8">Clinic Stripe Account Information</h2>
        <div>
            <Form {...stripeAccountInformationForm}>
                <form onSubmit={stripeAccountInformationForm.handleSubmit(onSubmit, onError)} className="w-2/3 space-y-4">
                    <FormField
                        control={stripeAccountInformationForm.control}
                        name="apiUrl"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-5">
                            <FormLabel className="text-lg">API URL: </FormLabel>
                                <div className="col-span-4">
                                    <FormControl>
                                        <Input placeholder="e.g stripe api url" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={stripeAccountInformationForm.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-5">
                            <FormLabel className="text-lg">Username: </FormLabel>
                                <div className="col-span-4">
                                    <FormControl>
                                        <Input placeholder="e.g 123 goodhealthuid" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={stripeAccountInformationForm.control}
                        name="secretKey"
                        render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-5">
                            <FormLabel className="text-lg">Secret: </FormLabel>
                                <div className="col-span-4">
                                    <FormControl>
                                        <Input placeholder="e.g passwordkeyforgoodhealthclinic" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </div>
                        </FormItem>
                        )}
                    />
                    <div className="flex justify-center">
                        <Button type="submit" disabled className="px-12">Update</Button>
                    </div>
                </form>
            </Form>

            <hr className="my-8"/>
        </div>
        </>
  )
};

export default StripeAccountInformationSection;