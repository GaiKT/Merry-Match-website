//components import
import Button from "@/components/utils/Button";
import MessageBox from "@/components/utils/MessageBox";
import Footer from "@/components/utils/Footer";
import Link from "next/link";

//image & icon import
import Girls from "@/asset/image/home/girls.svg"
import Girls2 from "@/asset/image/home/girls2.svg" 
import HeartIcon from '@/asset/icon-merrymatch/heartwhite.svg'
import Send from '@/asset/icon-merrymatch/send.svg'
import SendPink from '@/asset/icon-merrymatch/SendPink.svg'
import ShieldDone from '@/asset/icon-merrymatch/ShieldDone.svg'
import ShieldDonePink from '@/asset/icon-merrymatch/ShiedDonePink.svg'
import Star from '@/asset/icon-merrymatch/Star.svg'
import StarPink from '@/asset/icon-merrymatch/StartPink.svg'
import ExProfile from '@/asset/icon-merrymatch/Rectangle 1.svg'
import ExProfile2 from '@/asset/icon-merrymatch/Rectangle 2.svg'
import HeartPink1 from '@/asset/icon-merrymatch/heartPink1.svg'
import HeartPink2 from '@/asset/icon-merrymatch/heartPink2.svg'
import HeartPink3 from '@/asset/icon-merrymatch/heartPink3.svg'


export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="min-h-[758px] flex max-md:flex-col justify-center items-center bg-utils-BG text-white relative">
        <div className="md:absolute relative md:top-[-90px] max-md:top-[-40px] right-[160px] max-md:scale-90 z-0">
            <Girls/>
            <div className="absolute bottom-14 right-[-50px]">
              <MessageBox message="Hi! Nice to meet you" position="start"/>
            </div>
        </div>
        <div className="md:absolute relative bottom-0 left-[160px] max-md:scale-90">
          <Girls2/>
          <div className="absolute top-14 left-[-50px]">
            <span className="absolute w-[9px] h-[8px] top-3 left-1">
              <HeartIcon/>
            </span>
            <MessageBox message="Nice to meet you too!" position="end"/>
          </div>
        </div>
        {/* background part */}
        <div className="absolute h-[489px] w-full left-[-30px] z-0 max-md:hidden">
            <div className="absolute w-[7px] h-[7px] rounded-full bg-red-300 top-0 left-40 z-0"></div>
            <div className="absolute w-[67px] h-[67px] rounded-full bg-purple-800 top-10 left-5 z-0"></div>
            <div className="absolute w-[60px] h-[60px] rounded-full bg-purple-800 bottom-28 right-0 z-0">
              <span className="w-[28px] h-[28px] absolute bottom-3 left-[-6px]">&#128516;</span>
            </div>
            <div className="absolute w-[7px] h-[7px] rounded-full bg-beige-700 bottom-0 right-40 z-0"></div>
        </div>
        {/* background part end*/}        
        <div className="w-[358px] flex flex-col gap-[60px] justify-between items-center z-50">
          <div>
            <p className="text-Headline1 font-extrabold text-center" >
              Make the first ‘Merry’
            </p>
            <p className="text-Body1 font-bold text-center">
              If you feel lonely, let’s start meeting new people in your area! Don’t forget to get Merry with us
            </p>
          </div>
          <Link href={'/match'}>
            <Button label={'Start matching!'} disable={false}/>
          </Link>
        </div>
      </section>

      {/* Why merry match section */}
      <section className="flex max-md:h-[850px] justify-center items-center md:p-20 bg-utils-BG text-white gap-2 max-md:flex-col max-md:p-5">
        <div className="flex-1 ">
          <div className="flex flex-col gap-[40px]">
            <p className="text-Headline2 text-purple-300 font-bold">
              Why Merry Match?
            </p>
            <p className="text-Body1">
              Merry Match is a new generation of online dating website for everyone   
            </p>
            <p className="text-Body2 text-gray-200">Whether you’re committed to dating, meeting new people, expanding your social network, meeting locals while traveling, or even just making a small chat with strangers. </p>
            <p className="text-Body2 text-gray-200">This site allows you to make your own dating profile, discover new people, save favorite profiles, and let them know that you’re interested</p>
          </div>
        </div>
        <div className="flex-1 relative h-[348px] w-full max-md:scale-75 max-md:translate-x-[-65px]">
          {/* component lists */}
          <div className="bg-purple-600 rounded-[29.2px] h-[99.46px] w-[237.23px] absolute left-[117.16px] z-20 shadow-md">
            <p className="flex gap-1 items-center text-[21.9px] font-bold absolute top-7 left-7">
              <span>
                <Send/>
              </span>
              Fast
            </p>
            <div className="absolute top-0 right-1">
             <SendPink/> 
            </div>
            
          </div>
          <div className="bg-purple-300 rounded-[29.2px] h-[109px] w-[398px] absolute top-[87px] left-[47px] z-10 shadow-md">
            <p className="flex gap-1 items-center text-purple-600 text-[21.9px] font-bold absolute top-[35.27px] left-[270.89px]">
              <span>
                <ShieldDone/>
              </span>
              Secure
            </p>
            <div className="absolute bottom-0 left-[24px]">
             <ShieldDonePink/> 
            </div>
          </div>
          <div className="bg-purple-200 rounded-[29.2px] h-[145.99px] w-[328.48px] absolute top-[177.92px] left-[217.52px] z-20 shadow-md">
            <p className="flex gap-1 items-center text-[21.9px] text-red-500 font-bold absolute top-[89.42px] left-[31.94px]">
              <span>
                <Star/>
              </span>
              Easy
            </p>
            <div className="absolute bottom-0 right-0">
             <StarPink/> 
            </div>
          </div>
          <div className="absolute top-[45px] left-[415px]">
            <ExProfile2/>
          </div>
          <div className="absolute top-[251.83px] left-[87.96px]">
              <ExProfile/>
          </div>
          <div className="h-[7px] w-[7px] rounded-full bg-purple-400 absolute top-[251.83px] left-[87.96px]"></div>
          <div className="h-[9px] w-[9px] rounded-full bg-beige-800 absolute top-[26px] left-[507px]"></div>
        </div>
      </section>

      {/* How to merry section */}
      <section className="md:h-[622px] justify-center items-center md:p-20 bg-utils-BG text-white max-md:py-20">
        <div className="flex flex-col gap-[48px]">
          <p className="text-Headline2 font-bold text-purple-300 text-center">
            How to Merry
          </p>
          <div className="flex gap-6 justify-center max-md:flex-col max-md:items-center">
              <div className="w-[262px] bg-purple-900 rounded-[40px] flex flex-col items-center p-[32px] text-center gap-[40px] cursor-pointer hover:bg-purple-700 hover:scale-105 transition-all">
                <div className="w-[120px] h-[120px] rounded-full bg-purple-800 flex justify-start items-center">
                    <span className="text-[50px] ml-6">
                      &#128526;
                    </span>
                </div>
                <div>
                  <p className="text-Headline4">Upload your cool picture</p>
                  <p className="text-Body2 text-gray-500 px-5 mt-[12px]">Lorem ipsum is a placeholder text</p>
                </div>
              </div>
              <div className="w-[262px] bg-purple-900 rounded-[40px] flex flex-col items-center p-[32px] text-center gap-[40px] cursor-pointer hover:bg-purple-700 hover:scale-105 transition-all">
                <div className="w-[120px] h-[120px] rounded-full bg-purple-800 flex justify-start items-center">
                    <span className="text-[50px] ml-6">
                      &#129321;
                    </span>
                </div>
                <div>
                  <p className="text-Headline4">Explore and find the one you like</p>
                  <p className="text-Body2 text-gray-500 px-5 mt-[12px]">Lorem ipsum is a placeholder text</p>
                </div>
              </div>
              <div className="w-[262px] bg-purple-900 rounded-[40px] flex flex-col items-center p-[32px] text-center gap-[40px] cursor-pointer hover:bg-purple-700 hover:scale-105 transition-all">
                <div className="w-[120px] h-[120px] rounded-full bg-purple-800 flex justify-start items-center">
                    <span className="text-[50px] ml-6">
                      &#129395;
                    </span>
                </div>
                <div>
                  <p className="text-Headline4">Click ‘Merry’ for get to know!</p>
                  <p className="text-Body2 text-gray-500 px-5 mt-[12px]">Lorem ipsum is a placeholder text</p>
                </div>
              </div>
              <div className="w-[262px] bg-purple-900 rounded-[40px] flex flex-col items-center p-[32px] text-center gap-[40px] cursor-pointer hover:bg-purple-700 hover:scale-105 transition-all">
                <div className="w-[120px] h-[120px] rounded-full bg-purple-800 flex justify-start items-center">
                    <span className="text-[50px] ml-6">
                      &#128536;
                    </span>
                </div>
                <div>
                  <p className="text-Headline4">Start chatting and relationship </p>
                  <p className="text-Body2 text-gray-500 px-5 mt-[12px]">Lorem ipsum is a placeholder text</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* let't find section */}
      <section className="md:h-[570px] bg-utils-BG md:p-20 text-white flex w-full justify-center items-center">
        <div className="md:h-[369px] md:rounded-[32px] bg-linear flex flex-col justify-center items-center gap-4 relative max-md:py-20">
          <p className="text-Headline2 font-bold text-center w-2/3">
            Let’s start finding and matching someone new
          </p>
          <Button label={'Start matching!'} disable={false}/>
          <p className="absolute top-[73.23px] left-0"><HeartPink1/></p>
          <p className="absolute top-[254.25px] right-0"><HeartPink2/></p>
          <p className="absolute top-[216.12px] right-16"><HeartPink3/></p>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </>
  );
}
