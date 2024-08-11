"use client"

import React from 'react';
import Link from 'next/link';
import ManWithLaptop from '@/asset/image/login/manwithnotebook.svg'; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const formSchema = z.object({
    username: z.string().min(1, {
        message: "Username is require.",
    }),
    password: z.string().min(1,{
        message : "Password is require."
    })
});

export default function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <main className='bg-background min-h-screen flex justify-center items-center w-full'>
            <div className='flex justify-between w-full max-w-5xl mx-auto max-md:flex-col'>
                <div className='max-md:scale-75'>
                    <ManWithLaptop/>
                </div>
                <div className='w-full md:w-5/12 flex flex-col justify-center text-start gap-9 p-4'>
                    <div>
                        <p className='text-Body2 text-beige-700 font-semibold'>LOGIN</p>
                        <p className='text-Headline2 text-purple-500 font-extrabold'>Welcome back to Merry Match</p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-Body2">
                            {/* username */}
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-utils-black'>Username or Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Username or Email"
                                                {...field}
                                                className='text-gray-600'
                                                aria-label="Username or Email"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-utils-black'>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Enter password"
                                                {...field}
                                                className='text-gray-600'
                                                aria-label="Password"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <button
                                type="submit"
                                className='w-full py-3 px-6 bg-red-500 text-white rounded-full font-bold'>
                                Submit
                            </button>
                            <FormDescription className='text-utils-black'>
                                Don’t have an account? <Link href='/auth/register' className='text-red-500 font-bold'>Register</Link>
                            </FormDescription>
                        </form>
                    </Form>
                </div>
            </div>
        </main>
    );
}
