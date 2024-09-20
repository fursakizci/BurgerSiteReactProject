import React from 'react'
import { data } from '../helpers/data'
import MenuCard from './MenuCard'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Burgers</h1>
        <div className='menuList'>
            {data.map((menuItem,index)=>{
                return(
                    <MenuCard key={index} 
                     image = {menuItem.image} 
                     name = {menuItem.name}
                     content = {menuItem.content}
                     price = {menuItem.price}
                     ></MenuCard>
                )
            })}
        </div>
    </div>
  )
}

export default Menu