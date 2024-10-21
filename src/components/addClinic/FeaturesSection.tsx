"use client"

import { z } from "zod";
import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const featuresSchema = z.object({
    modalities: z.string().min(1, { message: "Please select a modality." }),
    modules: z.string().min(1, { message: "Please select a module." }),
    calendars: z.string().min(1, { message: "Please select a calendar option." }),
});

const FeaturesSection = () => {

    const { toast } = useToast();

    const featuresForm = useForm<z.infer<typeof featuresSchema>>({
    resolver: zodResolver(featuresSchema),
        defaultValues: {
        modalities: "",
        modules: "",
        calendars: "",
        },
    });

    function onSubmit(data: z.infer<typeof featuresSchema>) {

        toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        })
    }

    function onError(errors: FieldErrors<typeof featuresSchema>) {
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
        <h2 className="text-2xl font-bold mb-8">Features (Required)</h2>
        <div>
            <Form {...featuresForm}>
                <form onSubmit={featuresForm.handleSubmit(onSubmit, onError)} className="w-2/3 space-y-4">
                    <FormField
                        control={featuresForm.control}
                        name="modalities"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md">Modalities: </FormLabel>
                                <FormControl className="">
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1">
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value="videoCalls" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            Video Calls
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value="inPersonVisit" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            In Person Visit
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value="phoneVisit" />
                                            </FormControl>
                                            <FormLabel className="font-normal">Phone Visit</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={featuresForm.control}
                        name="modules"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md">Modules: </FormLabel>
                                <FormControl className="">
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1">
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value="enableOutreach" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            Enable Outreach
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value="enableOrganizations" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            Enable Organizations
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage className="" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={featuresForm.control}
                        name="calendars"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-md">Calendars: </FormLabel>
                                <FormControl className="">
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1">
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value="google" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            Google
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value="iOS" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            iOS
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage className="" />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>

            <hr className="my-8"/>
        </div>
        </>
  )
};

export default FeaturesSection;