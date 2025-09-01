import React from 'react'
const Navbar = () => {
    return (
        <nav
            className='flex justify-between px-3  h-20 sticky top-0 z-50'
            style={{ backgroundColor: '#32492b',}}
        >
            <div className='font-bold text-2xl mt-5  text-white '>
                   <span className="text-white  ">Safe</span>
     <span className="text-orange-500 animate-fadeIn  " >Box</span></div>
            <ul>
                <li className='flex mr-10'>
                    <a className='text-xl hover:font-bold  text-white mt-5' href="">Home</a>
                
                </li>
            </ul>
        </nav>
    )
}

export default Navbar