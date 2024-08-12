import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Artwork } from '@/components/utils/match/SideBar'
import Image from 'next/image'
import { works } from '@/components/utils/match/SideBar'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  


export default function Match() {
  return (
    <div className='absolute top-0 left-[316px] right-[220px] min-h-screen z-0 bg-utils-BG'>
        <Carousel className='mt-28'>
            <CarouselContent className="ml-5">
            {works.map((item , index) => (
                <CarouselItem key={index} index={index} className="pl-1 md:basis-1/2 lg:basis-2/3">
                <div className="px-10">
                    <Card className='h-[720px] rounded-[32px]'>
                        <CardContent className="flex justify-center items-center h-full">
                            <Image
                              src={item.art}
                              alt={`Photo by ${item.artist}`}
                              className="object-cover h-full w-full"
                              width={100}
                              height={100}
                            />
                        </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>  
    </div>
  )
}
