import React from 'react'
import ServiceItem from '../components/ServiceItem'
import { Container,Row } from 'react-bootstrap'
const SERVICES = [
    {
        id:1,
        title:'Full-Service Administration',
        description:'Our platform is customizable to meet the specific needs of your practice.',
        icon:''
    },
    {
        id:2,
        title:'Full-Service Administration',
        description:'Our platform is customizable to meet the specific needs of your practice.',
        icon:''
    },
    {
        id:3,
        title:'Full-Service Administration',
        description:'Our platform is customizable to meet the specific needs of your practice.',
        icon:''
    }
]
export default function ServiceItems() {
  return (
    <div className='serviceItems'>
        <Row >
        {SERVICES.map((item,index)=><ServiceItem key={index} item={item}/>)}
          </Row>
    </div>
    
  )
}
