import React from 'react'

const Accordion = ({title,active,setActive}) => {
    
  return (
    <div className='accordion'>
        <div className='accordionHeading'>
            <div className='container'>
                <p>{title}</p>
                <span onClick={()=> setActive(title)} >Click Me!</span>
            </div>
        </div>
        <div className={(active===title ? "show" : "")+"accordionContent"}>
            <div className="container">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus corrupti incidunt totam itaque non, eos sed obcaecati nostrum, minus voluptas delectus ex soluta ut quam vero neque libero cum enim!</p>
            </div>
        </div>
    </div>
  )
}

export default Accordion