import React from 'react';
import {useParams} from 'react-router-dom';

export default function Projects(){
   let {id} = useParams()


    return(
        <>
            <h1>My Projects - {id}</h1>
        </>
    );
}