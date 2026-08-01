import React from 'react'
import {Result} from './Result'

export const SearchResults = ({ results }) => {
    return (
        <>
            {/* width:100% bg-white  */}
            <div className='results-list'>
                {results.map((result, id) => {
                    
                    return <Result result={result.name} key={id} />;
                })}
            </div>
        </>
    )
}
