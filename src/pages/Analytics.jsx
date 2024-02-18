import React from 'react'
import Icon from '../components/Icon'
import { TasksIcon } from '../assets/icons'

const Analytics = () => {
  return (
    <div>Analytics
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum dolor, consequatur odit commodi dignissimos, officiis non neque nisi nesciunt ab quibusdam voluptate magnam accusamus odio nulla! Nulla, delectus? Quam?</p>
      <input className='outline-0' type="date" name="" id="" onChange={(e) => console.log(e.target.valueAsDate,e.target.valueAsNumber)}/>
    </div>
  )
}

export default Analytics