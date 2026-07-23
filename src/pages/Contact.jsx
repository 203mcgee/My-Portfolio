import React,{useState} from 'react';


export default function Contact(){
    // https://www.youtube.com/watch?v=x4b93zRUEvc
    const [values,setValues] = useState({email: ''});
    const [errors,setErrors] = useState({});

    // This the regex for the email 
    const isEmail = (email) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const checkingValidation = (e) =>{
        e.preventDefault();

        const errors = {};

        if(!isEmail(values.email)){
            errors.email = 'Wrong format';
        }

        setErrors(errors);

        if(!Object.keys(errors).length){
            alert(JSON.stringify(values,null,2));
        }
    }

    const setEmail = (e) =>{
        setValues((values)=>({...values,email: e.target.value}));
    }



    return(
        <>
            <h1>Contact Me</h1>
            <form onSubmit={checkingValidation}>
                <label htmlFor='userEmail'>Enter Email:</label>
                <input
                type='text'
                id='userEmail'
                value={values.email}
                onChange={setEmail}/>
                {Object.entries(errors).map(([key,error]) =>(
                    <span 
                    key={`${key}:${error}`}
                    style={{fontWeight:'bold',
                    color:'red'}}>
                        {key}:{error}
                    </span>
                ))}
                
                <label htmlFor='message'>Leave a Message!</label>
                <textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message here..."></textarea>
                <input type='submit'/>
                <br />
            </form>
        </>
    );
}