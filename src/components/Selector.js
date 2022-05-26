import React from 'react'
import { NavLink } from 'react-router-dom'
import TimeSelect from './TimeSelect'

const Selector = () => {
    return (
        <nav className='selector'>
            <NavLink to='/MM1' className={(navData) => (navData.isActive ? 'active' : '')} >M/M/1</NavLink>
            <NavLink to='/MMs' className={(navData) => (navData.isActive ? 'active' : '')}>M/M/s</NavLink>
            <NavLink to='/MMsK' className={(navData) => (navData.isActive ? 'active' : '')}>M/M/s/K</NavLink>
            <NavLink to='/MG1' className={(navData) => (navData.isActive ? 'active' : '')}>M/G/1</NavLink>
            <NavLink to='/MEk1' className={(navData) => (navData.isActive ? 'active' : '')}>M/E<sub>k</sub>/1</NavLink>
        </nav>
    )
}

export default Selector
