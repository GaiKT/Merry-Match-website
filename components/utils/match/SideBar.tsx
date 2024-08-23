import React from 'react'
import HeartScan from '@/asset/icon-merrymatch/heartScan.svg'
import MerryMatch from '@/asset/icon-merrymatch/merryMatch.svg'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import Link from 'next/link'

export interface Artwork {
  artist: string
  art: string
}
 
export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://s3-alpha-sig.figma.com/img/389a/309d/165db6bd420cf008b78dd067752d7941?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IpSmTDOshTtptjglsGDUX5P0vil35tVcRDho7BaOcdzpC0o44D9IcIHMjBu58yxWGWOAkY1p3KFMSnVbSI7Y2BmZElL~Q4ELa-4XrG3cieuFbiMiDSKyxZx6~hEGt7WzdHo3TZCBGiAQaFjwDkO5ENsC6VvTeOGxvHBsS2zmSxtX90Mk6wxT4m5BHLedPj6XstyNIhXxEsZIOw1yT3-exJ1Y6qrelpD0B~5PmKjd9h1VakfZwPlJ2WaM6m~ByJivEpxOYxeGVMNpczWPRRbZfKMJzBpq9A3cK9x9OCB7PgTDUBZ8EK61EJ2OmG45gb~Sf2wpLtcMaf02GPdqr~2aUw__",
  },
  {
    artist: "Tom Byrom",
    art: "https://s3-alpha-sig.figma.com/img/b4a8/5470/af9993d052d3bc3694e0ce30d42bab5d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdzkIoT8epgZ7lKUEedCgZSqBAXhySPozK3~TszUBWAjcaZyAkbwmfI2L0bwj4yearyUorIOajpqg9CBAhnguCSm5Ht2XRhcsX5ZOGXMMtWCym0CY8Qka0pLkVFTgtpMdqmQ0-qBA4bGYWicX3YmdWv2sWWzCjpejMXIFbBgQ2-CTz~UvLbeJtsogb87pB2-lWEVZnLZfqozaDbMY~70UljpQfdGrvvbKcvyB6gYeWeut2plDXZQRZvFCGPJcBwBMLG44suj7GJEiCq9FGz5bYGVpq6XvaOdoWIePFrw6EtwimZKLGrBuT9uQ7tbFaBurb1ERMplN~Py-5raDp4M0g__",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://s3-alpha-sig.figma.com/img/7427/94f3/f39afab064cc703aa888e58cd60c7249?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ypc3hQt7DDXLcz9zfjqMTwexVlg0p1SC0lktlT1AZF1GLASJhs6kO1vWtCQd2mBvPkHR6WOZRnj-KRoevOSDG9f--KNH7ar5DFkocpBO2DWY~-ZWg0iXHfhccLw-M78P5GwO6kFsG2lb6EaeGEHxPpPOgicqzSWkqqi~y8yauLGta0EK~jzx-x-dDaiQpidHvbmx9sG05izPdSfWGLuibJSGOX3FvhHYGaNNPbjgYp2g00uxU2KbeARd~hEFImAzP96ZqnuC4bKK28QHBwnXDf6SDVR15zSF-CQ3OnlZj2I5C9mIGxp9tXGbaQJ328f-KXS2EbWBFI6Zkyhr-H2sOA__",
  },
]


export default function SideBar() {
  return (
    <nav className="w-[316px] h-[936px] border-r z-20 bg-white">
        <div className='h-[259px] flex justify-center items-center border-b'>
            <div className='w-[282px] p-6 rounded-2xl text-center flex flex-col justify-center items-center border border-purple-400'>
                <span>
                    <HeartScan/>
                </span>
                <p className='text-Headline4 text-red-600 font-bold'>Discover New Match</p>
                <p className='text-Body3 font-medium text-gray-700'>Start find and Merry to get know and connect with new friend!</p>
            </div>
        </div>

        <div className='h-[194px] flex justify-center items-center border-b'>
            <div className='w-[281px] h-full py-6 rounded-2xl flex flex-col justify-between'>
                <p className='text-Headline4 text-gray-900 font-bold'>
                  Merry Match!
                </p>
                <div>
                  <ScrollArea className="w-full whitespace-nowrap">
                    <div className="flex w-full gap-4">
                      {works.map((artwork) => (
                        <figure key={artwork.artist} className="shrink-0">
                          <div className="overflow-hidden rounded-md cursor-pointer relative hover:shadow-md">
                            <span className='absolute bottom-0 right-0'>
                              <MerryMatch/>
                            </span>
                            <Image
                              src={artwork.art}
                              alt={`Photo by ${artwork.artist}`}
                              className="object-cover rounded-3xl w-[100px] h-[100px]"
                              width={100}
                              height={100}
                            />
                          </div>
                        </figure>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <div className='w-[281px] h-full py-6 rounded-2xl flex flex-col justify-between'>
                <p className='text-Headline4 text-gray-900 font-bold'>
                  Chat with Merry Match
                </p>
                <div>
                  <ScrollArea className="w-full h-80">
                    <div className="flex flex-col w-full gap-4">
                      {works.map((artwork) => (
                        <Link href={'/livechat'}>
                          <figure key={artwork.artist} className="shrink-0">
                            <div className="overflow-hidden rounded-md py-4 px-3 flex gap-4">
                              <div className='w-[60px] h-[60px]'>
                                <Image
                                  src={artwork.art}
                                  alt={`Photo by ${artwork.artist}`}
                                  className="object-cover w-[60px] h-[60px] rounded-full"
                                  width={60}
                                  height={60}
                                />
                              </div>
                              <p className='flex flex-col justify-center'>
                                <span className='text-Body1 text-gray-900'>{artwork.artist}</span>
                                <span className='text-Body3 text-gray-700'>
                                  You know nothing Jon Snow
                                </span>
                              </p>
                            </div>
                          </figure>
                        </Link>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
            </div>
        </div>
    </nav>
  )
}
