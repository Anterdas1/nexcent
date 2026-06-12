import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Image                    
                        src='/Logo.png'
                        width={150}
                        height={150}
                        alt='kana dakh'
                    />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                       <Link  href="/"> Home</Link>
                       <Link  href="/"> Service</Link>
                       <Link  href="/"> Feature</Link>
                       <Link  href="/"> Product</Link>
                       <Link  href="/"> Testimonial</Link>
                       <Link  href="/"> FAQ</Link>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <Button className='rounded-lg' variant="secondary">Login</Button>
                    <Button className='rounded-lg bg-[#428475]'>Sign up</Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;