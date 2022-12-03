import React from 'react'
import './sidebar.scss'
import { AiOutlineHeart,AiOutlineEye,AiOutlineDesktop,AiOutlineFolderOpen } from 'react-icons/ai'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="avatar">
                <h1>RJ</h1>
            </div>
            <ul>
                <li className='icons'><AiOutlineEye /></li>
                <li className='icons'><AiOutlineDesktop/></li>
                <li className='icons'><AiOutlineFolderOpen /></li>
                <li className='icons'><AiOutlineHeart/></li>
            </ul>
        </div>
    )
}

export default Sidebar