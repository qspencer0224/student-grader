import React from 'react'
import Score from './Score'

function Student(props) {
  return (
    <div id='studentBox'>
      {/* <h1>Student :</h1> */}
      <div className='imgWrap'>
      <img src={props.img} alt="profile" className='profileImg'/>
      </div>
      <p className='name'>{props.name}</p>
      <p className='bio'>{props.bio}</p>
      <Score />
      {/* <p>{props.scores}</p> */}
        {/* <ul>
            {props.scores.map((data)=>{
                return (
                    <li>{[data]}</li>
                )
            })}
        </ul> */}
    </div>
  )
}

export default Student