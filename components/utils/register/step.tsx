import React from 'react'

type stepProps = {
    step : number
}

const StepArray = [
    {
        step : 1,
        text : "Basic Information"
    },
    {
        step : 2,
        text : "Identities and Interests"
    },
    {
        step : 3,
        text : "Upload Photos"
    },
]

export default function Step({step} : stepProps) {
  return (
    <div className='flex-1 flex justify-end items-end'>
        <div className='flex gap-3'>
            {
                StepArray.map((stepObj , index)=>{
                    if(index + 1 === step){
                        return (
                            <ActiveStep key={index} step={stepObj.step} text={stepObj.text}/>
                        );
                    }else{
                        return (
                            <UnActiveStep key={index} step={stepObj.step} text={stepObj.text}/>
                        );                        
                    }
                })
            }
        </div>
    </div>
  )
}

type activeStepProps = {
    key : number
    step : number ,
    text : string
}

function ActiveStep({step , text , key} : activeStepProps) {
    return(
        <div key={key} className='p-4 border border-purple-500 rounded-2xl flex gap-4'>
            <p className='w-12 h-12 bg-gray-200 rounded-2xl flex justify-center items-center text-Headline4 font-bold text-purple-500'>
                {step}
            </p>
            <p className='flex flex-col justify-center'>
                <span className='text-Body3 font-medium text-gray-700'>Step {step}/3</span>
                <span className='text-Body3 font-bold text-purple-500'>{text}</span>
            </p>
    </div>
    );
}

function UnActiveStep({step , text , key} : activeStepProps) {
    return(
        <div key={key} className='p-4 border border-gray-300 rounded-2xl'>
            <p className='w-12 h-12 bg-gray-200 rounded-2xl flex justify-center items-center text-Headline4 font-bold text-gray-600'>
                {step}
            </p>
        </div>
    );
}
