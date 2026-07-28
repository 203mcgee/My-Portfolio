import React, { Fragment } from 'react';

const Circle = () =>{
    return(
        <div className='bg-linear-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4 bg-blue-500 mx-auto'>

        </div>
        // <div className='circle'></div>
    )
}
const Pillar = () =>{
    return(
        <div className='bg-linear-to-b from-blue-500 to-teal-500 rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto'>

        </div>
    )
}
const EventCard = ({skill,learned}) =>{
    return(
        <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4'>
            <div className='text-blue-800 font-bold text-lg border-b'>{skill}</div>
            <div className='text-sm text-gray-700'>{learned}</div>
        </div>
    )
}

const Timeline = ({knownSkills}) => {
    return(
        <div className='flex flex-col gap-y-3 w-full my-4'>
            <Circle/>
            {knownSkills.map((event,key)=>{
               return <Fragment key={key}>
                    <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                        {event.direction === 'left' ? (
                            <EventCard skill={event.skill} learned={event.learned} />
                        ):(
                            <div></div>
                        )
                         }
                        <Pillar/>
                         {event.direction === 'right' ? (
                            <EventCard skill={event.skill} learned={event.learned} />
                        ):(
                            <div></div>
                        )
                         }
                    </div>
                    {key < (knownSkills.length - 1) && <Circle/>}
                </Fragment>
            })}
        </div>
    )
}