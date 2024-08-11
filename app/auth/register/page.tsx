"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";
import Step from '@/components/utils/register/step';
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Register() {
    const [userProfile , setUserProfile] = useState({});
    const [step,setStep] = useState(1);

    function nextStep (){
        if(step < 3) {
            setStep(step + 1)
        }
    }

    function prevStep (){
        if(step > 1){
            setStep(step - 1)
        }
    }    

    console.log(userProfile)

    return (
        <main className='bg-background min-h-screen flex justify-center items-center w-full'>
            <div className='flex justify-between w-full max-w-5xl mx-auto max-md:flex-col'>
                <div className='w-full flex flex-col justify-center text-start gap-9 p-4'>
                    <div className='flex'>
                        <div className='flex-1'>
                            <p className='text-Body2 text-beige-700 font-semibold'>REGISTER</p>
                            <p className='text-Headline2 text-purple-500 font-extrabold'>Join us and start matching</p>
                        </div>
                        <Step step={step}/>
                    </div>
                    {   
                        step === 1 ? (
                            <Step1 setUserProfile={setUserProfile} nextStep={nextStep} prevStep={prevStep} />
                        ) : step === 2 ? (
                            <Step2 setUserProfile={setUserProfile} nextStep={nextStep} prevStep={prevStep} />
                        ) : step === 3 ? (
                            <Step3 setUserProfile={setUserProfile} nextStep={nextStep} prevStep={prevStep} />
                        ) : null
                    }
                </div>
            </div>
        </main>
    );
}

const formStep1Schema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    dateOfBirth: z.date({ required_error: "A date of birth is required." }),
    location: z.string().min(1, { message: "Location is required." }),
    city: z.string().min(1, { message: "City is required." }),
    username: z.string().min(6, { message: "Username must be at least 6 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
    confirm: z.string().min(8, { message: "Confirmation password must be at least 8 characters long." })
}).refine((data) => data.password === data.confirm, {
    path: ['confirm'],
    message: "Passwords do not match.",
});

type stepProps = {
    setUserProfile: React.Dispatch<React.SetStateAction<any>>;
    nextStep: any;
    prevStep: any;
}

function Step1({ setUserProfile , nextStep , prevStep }: stepProps) {

    const form = useForm<z.infer<typeof formStep1Schema>>({
        resolver: zodResolver(formStep1Schema),
        defaultValues: {
            name: "",
            dateOfBirth: undefined,
            location: "",
            city: "",
            username: "",
            email: "",
            password: "",
            confirm: ""
        },
    });

    function onSubmit(values: z.infer<typeof formStep1Schema>) {
        setUserProfile((prev : any) => ({
            ...prev,
            ...values,
        }));
        nextStep();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-Body2">
                <p className='text-purple-500 text-Headline4 font-bold'>Basic Information</p>
                <div className='flex flex-col gap-10 '>
                    <div className='flex justify-between items-center w-full gap-6'>
                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel className='text-utils-black'>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Jon Snow"
                                            {...field}
                                            className='text-gray-600'
                                            aria-label="Your name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Date of Birth */}
                        <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                                <FormItem className='flex flex-col w-1/2 h-full justify-between'>
                                    <FormLabel className='text-utils-black'>Date Of Birth</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Select date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />                      
                    </div>
                    <div className='flex justify-between items-center w-full gap-6'>
                        {/* Location */}
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel className='text-utils-black'>Location</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select location" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="thailand">Thailand</SelectItem>
                                                    <SelectItem value="usa">USA</SelectItem>
                                                    <SelectItem value="uk">UK</SelectItem>
                                                    {/* Add more options as needed */}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* City */}
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel className='text-utils-black'>City</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select city" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="bangkok">Bangkok</SelectItem>
                                                    <SelectItem value="newyork">New York</SelectItem>
                                                    <SelectItem value="london">London</SelectItem>
                                                    {/* Add more options as needed */}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />                     
                    </div>
                    <div className='flex justify-between items-center w-full gap-6'>
                        {/* Username */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel className='text-utils-black'>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="At least 6 characters"
                                            {...field}
                                            className='text-gray-600'
                                            aria-label="Enter your username"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel className='text-utils-black'>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="name@website.com"
                                            {...field}
                                            className='text-gray-600'
                                            aria-label="Enter your email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />                                       
                    </div>
                    <div className='flex justify-between items-center w-full gap-6'>
                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel className='text-utils-black'>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='password'
                                            placeholder="At least 8 characters"
                                            {...field}
                                            className='text-gray-600'
                                            aria-label="Enter your password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Confirm password */}
                        <FormField
                            control={form.control}
                            name="confirm"
                            render={({ field }) => (
                                <FormItem className='flex flex-col w-1/2 h-full justify-between'>
                                    <FormLabel className='text-utils-black'>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='password'
                                            placeholder="Confirm your password"
                                            {...field}
                                            className='text-gray-600'
                                            aria-label="Confirm your password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />                      
                    </div>
                </div>
                <div className='w-full flex justify-between items-center text-gray-700'>
                    <span>1/3</span>
                    <div className='flex gap-5 items-center text-gray-500'>
                        <Link href={'/auth/login'} className='flex gap-2 text-Body1 font-bold'><ArrowLeft/>Back</Link>
                        <button
                            type="submit"
                            className='w-full py-3 px-6 bg-red-500 text-white rounded-full font-bold hover:bg-red-400'>
                            Submit
                        </button>                    
                    </div>
                </div>
            </form>
        </Form>
    )
}

const formStep2Schema = z.object({
    sexualIdentities: z.string({
        required_error : "Sexual identities is require."
    }),
    sexualPreferences: z.string({
        required_error : "Sexual preferences is require."
    }),
    racialPreferences: z.string({
        required_error : "Racial preferences is require."
    }),
    meetingInterests: z.string({
        required_error: "Meeting interests is require."
    }),
    hobbies: z.string().array().min(1,{
        message: "hobbies is require least than 1."
    })
})

function Step2({ setUserProfile , nextStep , prevStep }: stepProps) {

    const form = useForm<z.infer<typeof formStep2Schema>>({
        resolver: zodResolver(formStep2Schema),
        defaultValues: {
            sexualIdentities : "",
            sexualPreferences: "",
            racialPreferences: "",
            meetingInterests: "",
            hobbies:[],
        },
    });

    function onSubmit(values: z.infer<typeof formStep2Schema>) {
        setUserProfile((prev : any) => ({
            ...prev,
            ...values,
        }));
        nextStep();
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-Body2">
                <p className='text-purple-500 text-Headline4 font-bold'>Identities and Interests</p>
                <div className='flex flex-col gap-10'>
                    <div className='flex justify-between items-center w-full gap-6'>
                        {/* sexualIdentities */}
                        <FormField
                            control={form.control}
                            name="sexualIdentities"
                            render={({ field }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel className='text-utils-black'>Sexual identities</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Sex" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="male">Male</SelectItem>                                                        <SelectItem value="usa">USA</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* sexualPreferences */}
                        <FormField
                            control={form.control}
                            name="sexualPreferences"
                            render={({ field }) => (
                                <FormItem className='flex flex-col w-1/2 h-full justify-between'>
                                    <FormLabel className='text-utils-black'>Sexual preferences</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Interested" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="male">Male</SelectItem>                                                        <SelectItem value="usa">USA</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />                      
                    </div>
                    <div className='flex justify-between items-center w-full gap-6'>
                        {/* Racial preferences */}
                        <FormField
                            control={form.control}
                            name="racialPreferences"
                            render={({ field }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel className='text-utils-black'>Racial preferences</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="asian">Asian</SelectItem>
                                                    <SelectItem value="usa">USA</SelectItem>
                                                    <SelectItem value="uk">UK</SelectItem>
                                                    {/* Add more options as needed */}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Meeting interests */}
                        <FormField
                            control={form.control}
                            name="meetingInterests"
                            render={({ field }) => (
                                <FormItem className='w-1/2'>
                                    <FormLabel className='text-utils-black'>Meeting interests</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Friends" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="friends">Friends</SelectItem>
                                                    <SelectItem value="fwb">Friends with benefit</SelectItem>
                                                    <SelectItem value="oneNight">One Night Stand</SelectItem>
                                                    {/* Add more options as needed */}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />                     
                    </div>
                    <div className='flex justify-between items-center w-full gap-6'>
                        {/* Hobbies / Interests */}
                        <FormField
                            control={form.control}
                            name="hobbies"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel className='text-utils-black'>Hobbies / Interests (Maximum 10)</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Friends" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="friends">Friends</SelectItem>
                                                    <SelectItem value="fwb">Friends with benefit</SelectItem>
                                                    <SelectItem value="oneNight">One Night Stand</SelectItem>
                                                    {/* Add more options as needed */}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />   
                    </div>
                </div>
                <div className='w-full flex justify-between items-center text-gray-700'>
                    <span>2/3</span>
                    <div className='flex gap-5 items-center text-red-500'>
                        <button onClick={()=>{prevStep()}} className='flex gap-2 text-Body1 font-bold'><ArrowLeft/>Back</button>
                        <button
                            type="submit"
                            className='w-full py-3 px-6 bg-red-500 text-white rounded-full font-bold'>
                            Submit
                        </button>                    
                    </div>
                </div>
            </form>
        </Form>
    )
}


const formStep3Schema = z.object({
    images: z.string().array().min(1,{
        message: "Upload images at least 2 photos"
    })
})

function Step3({ setUserProfile , nextStep , prevStep }: stepProps) {

    const form = useForm<z.infer<typeof formStep3Schema>>({
        resolver: zodResolver(formStep3Schema),
        defaultValues: {
            images : [],
        },
    });

    function onSubmit(values: z.infer<typeof formStep3Schema>) {
        setUserProfile((prev : any) => ({
            ...prev,
            ...values,
        }));
        nextStep();
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-Body2">
                <p className='text-purple-500 text-Headline4 font-bold'>Profile pictures</p>
                <div className='flex flex-col gap-10'>
                    <div className='flex justify-around items-center w-full gap-6'>
                        <FormField
                            control={form.control}
                            name="images"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel className='flex gap-4 flex-col text-purple-600 font-bold'>
                                        <p className='text-utils-black'>
                                           Upload at least 2 photos 
                                        </p>    
                                        <div className='flex gap-6'>
                                            <div className='w-[167px] h-[167px] bg-gray-200 rounded-2xl flex justify-center items-center'>
                                                <p className='flex flex-col justify-center items-center'>
                                                    <span>+</span>
                                                    <span>Upload photo</span>
                                                </p>
                                            </div>
                                            <div className='w-[167px] h-[167px] bg-gray-200 rounded-2xl flex justify-center items-center'>
                                                <p className='flex flex-col justify-center items-center'>
                                                    <span>+</span>
                                                    <span>Upload photo</span>
                                                </p>
                                            </div>
                                            <div className='w-[167px] h-[167px] bg-gray-200 rounded-2xl flex justify-center items-center'>
                                                <p className='flex flex-col justify-center items-center'>
                                                    <span>+</span>
                                                    <span>Upload photo</span>
                                                </p>
                                            </div>
                                            <div className='w-[167px] h-[167px] bg-gray-200 rounded-2xl flex justify-center items-center'>
                                                <p className='flex flex-col justify-center items-center'>
                                                    <span>+</span>
                                                    <span>Upload photo</span>
                                                </p>
                                            </div>
                                            <div className='w-[167px] h-[167px] bg-gray-200 rounded-2xl flex justify-center items-center'>
                                                <p className='flex flex-col justify-center items-center'>
                                                    <span>+</span>
                                                    <span>Upload photo</span>
                                                </p>
                                            </div>
                                        </div>
                                    </FormLabel>
                                    <FormControl>
                                        <Input type='file' className='hidden' />  
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />                    
                    </div>
                </div>
                <div className='w-full flex justify-between items-center text-gray-700'>
                    <span>3/3</span>
                    <div className='flex gap-5 items-center text-red-500'>
                        <button onClick={()=>{prevStep()}} className='flex gap-2 text-Body1 font-bold'><ArrowLeft/>Back</button>
                        <button
                            type="submit"
                            className='w-full py-3 px-6 bg-red-500 text-white rounded-full font-bold'>
                            Submit
                        </button>                    
                    </div>
                </div>
            </form>
        </Form>
    )
}
