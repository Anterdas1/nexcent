import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
   <div>
            <main className="flex flex-col bg-white">
                
                {/* 1. Hero Section (আগের পার্ট) */}
                <section className="w-full px-4 md:px-12">
                    <aside className="w-full max-w-7xl mx-auto">
                        <div className="hero min-h-[60vh] flex items-center justify-center">
                            <div className="hero-content flex-col lg:flex-row gap-12 text-center lg:text-left items-center justify-center">  
                                <div className="flex justify-center w-full lg:w-auto"> 
                                    <Image
                                        src='/Frame 35.png'
                                        width={440}
                                        height={400}
                                        alt='kana'
                                        className="object-contain"
                                    />
                                </div> 
                                <div className="flex flex-col items-center lg:items-start max-w-xl">
                                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                        The unseen of spending three years at Pixelgrade
                                    </h1>
                                    <p className="py-6 text-sm lg:text-base text-gray-500 text-center lg:text-left leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                                    </p>
                                    <button className="btn bg-[#4CAF50] hover:bg-[#43a047] text-white border-none normal-case px-6 py-3 h-auto min-h-0 rounded text-base font-medium">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>

                <section className="w-full bg-[#F5F7FA] py-16 px-4 md:px-12 lg:px-24 mt-12">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl lg:text-4xl font-semibold text-[#4D4D4D] leading-tight">
                                Helping a local <br />
                                <span className="text-[#4CAF50]">business reinvent itself</span>
                            </h2>
                            <p className="mt-2 text-sm text-[#18191F]">
                                We reached here with our hard work and dedication
                            </p>
                        </div>

                        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 justify-items-center sm:justify-items-start">

                            <div className="flex items-center gap-4 w-48 sm:w-auto">
                                <Image 
                                    src="/Vector.png" 
                                    width={40} 
                                    height={40} 
                                    alt="Members Icon" 
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-[#4D4D4D] tracking-wide">2,245,341</h3>
                                    <p className="text-sm text-[#717171]">Members</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-48 sm:w-auto">
                                <Image 
                                    src="/Vector (1).png"
                                    width={40} 
                                    height={40} 
                                    alt="Clubs Icon" 
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-[#4D4D4D] tracking-wide">46,328</h3>
                                    <p className="text-sm text-[#717171]">Clubs</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-48 sm:w-auto">
                                <Image 
                                    src="/Vector (3).png" 
                                    width={40} 
                                    height={40} 
                                    alt="Events Icon" 
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-[#4D4D4D] tracking-wide">828,867</h3>
                                    <p className="text-sm text-[#717171]">Event Bookings</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-48 sm:w-auto">
                                <Image 
                                    src="/Vector (3).png" 
                                    width={40} 
                                    height={40} 
                                    alt="Payments Icon" 
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-[#4D4D4D] tracking-wide">1,926,436</h3>
                                    <p className="text-sm text-[#717171]">Payments</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
}
    


export default Hero;