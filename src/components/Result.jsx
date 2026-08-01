import React from 'react'

export const Result = ({ result }) => {
    return (
        <>
            <button
                className='py-2.5 px-1.25 hover:bg-[#efefef]'
                onClick={(e) => alert(`You selected ${result}!`)}>
                {result}
            </button>
        </>
    )
}
