import React, { Fragment } from 'react';
import 'tailwindcss'


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
// const Timeline = ({knownSkills}) => {
//     return(
//         <div className='flex flex-col gap-y-3 w-full my-4'>
//             <Circle/>
//             {knownSkills.map((event,key)=>{
//                return <Fragment key={key}>
//                     <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
//                         {event.direction === 'left' ? (
//                             <EventCard skill={event.skill} learned={event.learned} />
//                         ):(
//                             <div></div>
//                         )
//                          }
//                         <Pillar/>
//                          {event.direction === 'right' ? (
//                             <EventCard skill={event.skill} learned={event.learned} />
//                         ):(
//                             <div></div>
//                         )
//                          }
//                     </div>
//                     {key < (knownSkills.length - 1) && <Circle/>}
//                 </Fragment>
//             })}
//         </div>
//     )
// }
// const Timeline = ({knownSkills}) => {
//     return(
//         <div className='flex flex-col gap-y-3 w-full my-4'>
//             <Circle/>
//             {knownSkills.map((event,key)=>{
//                return <Fragment key={key}>
//                     <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
//                         {event.direction === 'left' ? (
//                             <EventCard skill={event.skill} learned={event.learned} />
//                         ):(
//                             <div></div>
//                         )
//                          }
//                         <Pillar/>
//                          {event.direction === 'right' ? (
//                             <EventCard skill={event.skill} learned={event.learned} />
//                         ):(
//                             <div></div>
//                         )
//                          }
//                     </div>
//                     {key < (knownSkills.length - 1) && <Circle/>}
//                 </Fragment>
//             })}
//         </div>
//     )
// }

export default function ExperienceSkills(){

    // Experience & Skills (/experience): An interactive, highly structured timeline and grid setup demonstrating technical checkpoints, frameworks, and growth tracking.
    // https://www.youtube.com/watch?v=UqGIqNkhTXY

    const knownSkills = [
        {
            skill: 'C++',
            learned: 2021,
            direction: 'right'

        },
        {
            skill: 'C',
            learned: 2022,
            direction: 'left'

        },
        {
            skill: 'Javascript',
            learned: 2025,
            direction: 'right'

        },
        {
            skill: 'HTML/CSS',
            learned: 2026,
            direction: 'left'

        },
        {
            skill: 'HTML/CSS',
            learned: 2026,
            direction: 'right'

        },
    ]

    const knownFrameworks = [
        {
            framework: 'Node.Js',
            learned: 2025,
            direction:'right'
        },
        {
            framework: 'React.Js',
            learned: 2026,
            direction:'left'
        }
    ]

    const technicalCheckpoint = [
        {
            techCheck: 'MCA Backend Programming Certification',
            completion: 'January 15, 2026',
            direction:'right'
        },
        {
            techCheck: 'NextStack HTML & CSS Certification',
            completion: 'May 12, 2026',
            direction:'left'
        },
        {
            techCheck: 'NextStack Javascript Certification',
            completion: 'January 15, 2026',
            direction:'right'
        },
    ]

    


    return(
        <>
            <h1>My Experience & Skills</h1>
            <div style={{
            display: 'grid',
            gap:'10px',
            padding: '2rem',
             maxWidth: '1000px', 
             margin: '0 auto' 
            }}>

                <div style={{display: 'grid',gridTemplateRows:'repeat(1,1fr)'}}>
                    <div style={{border: 'solid black 2px',
                    borderRadius: '15px',
                    margin:'30px',padding:'20px',justifyContent:'center'}}>C++/C</div>
                    <div style={{border: 'solid black 2px',
                    borderRadius: '15px',
                    margin:'30px',padding:'20px',justifyContent:'center'}}>Javascript</div>
                </div>

            </div>

            <Timeline knownSkills={knownSkills}/>
            
        </>
    );

   
}

