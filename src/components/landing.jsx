import React from 'react'

function Landing(){
    return (
        <div className='landing mt-5 d-flex my-auto flex-column justify-content-center align-items-center'>
            <h1>அரிச்சுவடி</h1>
            <h1 className='m-3'><span style={{color:"blue"}}>Lang</span>Script</h1>
            <h3 className='mt-2'><i>An app that helps people learn Tamil.</i></h3>
            <p className='mt-2 p-5 text-center'>An application to help beginners learn Tamil. Use the table to learn about alphabets, their pronunciations, and increase your vocabulary with the suggested words. <br /> Users can also use the inbuilt translator to translate new phrases they come across.</p>
        </div>
    )
}

export default Landing;