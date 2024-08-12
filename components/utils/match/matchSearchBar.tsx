"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


export default function MatchSearchBar() {
  return (
    <nav className='w-[220px] h-[936px] absolute top-0 right-0 border-l z-10 bg-white'>
        <FormSearch/>
    </nav>
  )
}

const items = [
  {
    id: "default",
    label: "Default",
  },
  {
    id: "female",
    label: "Female",
  },
  {
    id: "male",
    label: "Male",
  },
] as const

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  searchText: z.string().optional(),
  ageRange: z.array(z.number()).optional(),
})

export function FormSearch() {
  const [range, setRange] = useState([0, 24]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["default",],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-9 p-3">
        <div className='border-b h-[674px]'>
            <div className='h-4/5 pt-9 p-3 flex flex-col justify-between'>
                <FormField
                control={form.control}
                name="searchText"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className='text-Headline4 font-bold'>Search by Keywords</FormLabel>
                    <FormControl>
                        <Input placeholder="Search..." {...field} />
                    </FormControl>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="items"
                render={() => (
                    <FormItem>
                    <div className="mb-4">
                        <FormLabel className="text-Headline4 font-bold">Sex you interest</FormLabel>
                    </div>
                    {items.map((item) => (
                        <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                            return (
                            <FormItem
                                key={item.id}
                                className="flex flex-row items-center space-x-3 space-y-0"
                            >
                                <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                        return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                (value) => value !== item.id
                                                )
                                            )
                                        }}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">
                                {item.label}
                                </FormLabel>
                            </FormItem>
                            )
                        }}
                        />
                    ))}
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div className='flex flex-col gap-6'>
                    <FormField
                    control={form.control}
                    name="ageRange"
                    render={({ field }) => (
                        <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-Headline4 font-bold">Age Range</FormLabel>
                        </div>
                        <FormControl>
                            <Slider min={18} max={100} step={1} onValueChange={(value : number[])=>{setRange(value)}} {...field}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className='flex gap-3 justify-around items-center'>
                        <Input type='number' value={range[0]} />
                        <span>-</span>
                        <Input type='number' value={range[1]} />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-around items-center h-20 mt-5'>
            <button className='text-red-500 font-bold text-Body1'>
                Clear
            </button>
            <button className='bg-red-500 px-6 py-3 rounded-3xl text-white font-bold hover:bg-red-300' type="submit">Submit</button>
        </div>
      </form>
    </Form>
  )
}

