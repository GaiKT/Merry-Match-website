import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { works } from '@/components/utils/match/SideBar'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  import { ArrowLeft , ArrowRight } from 'lucide-react'
  


export default function Match() {
  return (
    <div className='absolute top-0 left-[316px] right-[220px] pt-[138px] h-full z-0 bg-utils-BG'>
        <Carousel>
            <CarouselContent className="ml-5">
            {works.map((item , index) => (
                <CarouselItem key={index} index={index} className="pl-1 md:basis-1/2 lg:basis-2/3">
                      <Card className='h-[620px] rounded-[32px] overflow-hidden relative'>
                          <CardContent className="flex justify-center items-center h-full p-0">
                              <Image
                                src={item.art}
                                alt={`Photo by ${item.artist}`}
                                className="object-cover w-full h-full"
                                width={620}
                                height={620}
                              />
                              <div className='bg-linear0 w-full h-[300px] absolute bottom-0 left-0 z-20'></div>
                              <div className='absolute bottom-0 left-0 w-full py-14 pr-8 pl-10 flex justify-between px-4 z-30'>
                                  <span className='text-Headline3 text-utils-white font-bold'>
                                      {item.artist} 24
                                  </span>
                                  <p className='text-Headline3 text-utils-white flex gap-2 font-bold'>
                                    <button>
                                      <ArrowLeft/>
                                    </button>
                                    <button>
                                      <ArrowRight/>
                                    </button>
                                  </p>
                              </div>
                          </CardContent>
                      </Card>
                </CarouselItem>
            ))}
            </CarouselContent>
        </Carousel>  
    </div>
  )
}
