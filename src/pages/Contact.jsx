// import React,{useState} from 'react';
// // import { useFormik } from 'formik';


// export default function Contact(){
//     // https://www.youtube.com/watch?v=x4b93zRUEvc
//     const [values,setValues] = useState({email: ''});
//     const [errors,setErrors] = useState({});

//     // This the regex for the email 
//     const isEmail = (email) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);

//     const checkingValidation = (e) =>{
//         e.preventDefault();

//         const errors = {};

//         if(!isEmail(values.email)){
//             errors.email = 'Wrong format';
//         }

//         setErrors(errors);

//         if(!Object.keys(errors).length){
//             alert(JSON.stringify(values,null,2));
//         }
//     }

//     const setEmail = (e) =>{
//         setValues((values)=>({...values,email: e.target.value}));
//     }



//     return(
//         <>
//             <h1>Contact Me</h1>
//             <form className='flex m-2.5 p-1.5' onSubmit={checkingValidation}>
//                 <label htmlFor='userEmail'>Enter Email:</label>
//                 <input
//                 type='text'
//                 id='userEmail'
//                 placeholder='Enter Email'
//                 value={values.email}
//                 onChange={setEmail}/>
//                 {Object.entries(errors).map(([key,error]) =>(
//                     <span 
//                     key={`${key}:${error}`}
//                     style={{fontWeight:'bold',
//                     color:'red'}}>
//                         {key}:{error}
//                     </span>
//                 ))}

//                 <label htmlFor='message'>Leave a Message!</label>
//                 <textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message here..."></textarea>
//                 <input type='submit'/>
//                 <br />
//             </form>


//         </>
//     );
// }


// import React from 'react'
// import { useForm } from "react-hook-form"

// const Contact = () => {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();

//     const onSubmit = data => alert(JSON.stringify(data));
//     return (
//         <React.Fragment>
//             <section className='flex min-h-screen  justify-center bg-white rounded-lg w-auto h-auto pb-10 mt-5 mx-5 shadow'>
//                 <form onSubmit={handleSubmit(onSubmit)}>

//                     <div >
//                         <h1 className='text-2xl text-bold items-center'>Contact Me</h1>
//                     </div>
//                     {/* body */}
//                     <div>
//                         <div className='mx-5 space-y-8 mt-14'>
//                             <div>
//                                 <input
//                                     type='email'
//                                     placeholder='youremail@email.com'
//                                     className='w-full text-3xl h-16 placeholder-white rounded-lg'
//                                 />
//                                 <div>Error</div>
//                                 <div>
//                                     <textarea
//                                         placeholder='message'
//                                         value="Submit"
//                                         className='w-1/3 h-12 bg-blue-500 text-white font-bold '
//                                     />
//                                 </div>
//                             </div>
//                             <div></div>
//                         </div>
//                     </div>
//                 </form>
//             </section>
//         </React.Fragment >
//     )
// }

// export default Contact


import React, { useState } from 'react'

const Contact = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [message, setMessage] = useState('');

    

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function handleUserName(e) {
        // console.log(e.target.value)
        const value = e.target.value
        if(value === '')
        {
            return;
        }
        setUserName(value);
    }

    function handleEmail(e) {
        const value = e.target.value;
        const validEmail = validateEmail(value);
        // console.log(validEmail);
        setEmail(value);
        
    }

    function handleMessage(e) {
        const value = e.target.value
        if(value === ''){
            return;
        }
        setMessage(value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const data = {userName,userEmail,message};
        console.log(data);
        setUserName('');
        setEmail('');
        setMessage('');
    }



    return (
        <>
            <h1 className='text-center text-3xl py-4'>Contact Me</h1>
            <section className='p-4 items-center justify-center content-center'>
                <form action="" className="flex flex-col max-w-[600px] w-full border py-6 px-3 rounded-lg gap m-auto" 
                onSubmit={handleSubmit}>
                    <label className='flex flex-col gap-2'>
                        Full Name
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className='border px-3 py-1'
                            value={userName}
                            onChange={handleUserName}
                            required
                        />
                        
                    </label>


                    <label className='flex flex-col gap-2'>
                        Email
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={userEmail}
                            onChange={handleEmail}
                            required
                            className='border px-3 py-1' />
                        <span className=""></span>
                    </label>



                    <label className='flex flex-col gap-2'>
                        Message
                        <textarea
                            name=""
                            id=""
                            onChange={handleMessage}
                            value={message}
                            required
                            className='border px-3 py-1'></textarea>
                        <span className=""></span>
                    </label>
                    <button type='' className='bg-blue-500 text-white inline-block py-2 rounded-lg' >Submit</button>
                </form>

            </section>
        </>
    )
}

export default Contact