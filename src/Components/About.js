import React from 'react'

const About = () => {
    // const aboutStyle ={
    //     padding:'1.5em',
    //     marginLeft:'1em'
    // }
  return (
    <div style={{padding: '0.5em'}}>
        <div className="about">
            <hr/>
            <h1>ABOUT ME!</h1>
            <hr/>
        </div>
        <div className="a_header">
            <h1>ABOUT:</h1>
        </div>
        <div className="a_body">
            HELLO THERE, I'M ADENIYI OLUWAFEMI OPEYEMI. I'M A FRONT-END DEVELOPER CURRENTLY BASED IN OYO STATE, NIGERIA. I'M A GRADUATE OF COMPUTER SCIENCE.
            I'M AN ENTHUSIASTIC PROGRAMMER.
            I'M A BUSINESS OWNER, AND OR AN ENTERPRENUER WITH A KEEN MIND FOR WHACKY AND CHEEKY INNOVATIONS AND DESIGNS.
        
        </div>
        <div className="a_header">
            <h1>MY TECHNICAL SKILLS:</h1>
        </div>
        <div className="a_body">
           <div><p>HTML-5</p><div className='htm'></div></div>
           <div><p>CSS-3</p><div className='cs'></div></div>
           <div><p>JAVASCRIPT</p><div className='jav'></div></div>
           <div><p>GITHUB</p><div className='gith'></div></div>
           <div><p>BOOTSTRAP</p><div className='boot'></div></div>
           <div><p>POSTMAN</p><div className='post'></div></div>
           <div><p>PYTON</p><div className='pyt'></div></div>
        </div>
        
    </div>
  )
}

export default About