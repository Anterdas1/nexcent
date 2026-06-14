import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <main className="flex flex-col bg-white">

                {/* 1. Hero Section */}
                <section className="w-full px-4 md:px-12 py-10 lg:py-20">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-center">

                            {/* Hero Image */}
                            <div className="flex justify-center w-full lg:w-1/2">
                                <Image
                                    src='/Frame 35.png'
                                    width={440}
                                    height={400}
                                    alt='The unseen of spending three years at Pixelgrade'
                                    className="object-contain max-w-[80%] sm:max-w-[60%] lg:max-w-full h-auto"
                                />
                            </div>

                            {/* Hero Text */}
                            <div className="flex flex-col items-center lg:items-start max-w-xl text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                    The unseen of spending three years at Pixelgrade
                                </h1>
                                <p className="py-4 lg:py-6 text-sm lg:text-base text-gray-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                                </p>
                                <button className="bg-[#4CAF50] hover:bg-[#43a047] text-white font-medium px-6 py-3 rounded text-base transition-colors duration-200 shadow-sm">
                                    Learn More
                                </button>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 2. Stats Section */}
                <section className="w-full bg-[#F5F7FA] py-12 lg:py-16 px-4 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

                        {/* Stats Title */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#4D4D4D] leading-tight">
                                Helping a local <br className="hidden sm:inline" />
                                <span className="text-[#4CAF50]">business reinvent itself</span>
                            </h2>
                            <p className="mt-2 text-sm text-[#18191F]">
                                We reached here with our hard work and dedication
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10">

                            {/* Stat 1 */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
                                <Image
                                    src="/Vector.png"
                                    width={40}
                                    height={40}
                                    alt="Members Icon"
                                    className="w-10 h-10 object-contain"
                                />
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#4D4D4D] tracking-wide">2,245,341</h3>
                                    <p className="text-xs sm:text-sm text-[#717171]">Members</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
                                <Image
                                    src="/Vector (1).png"
                                    width={40}
                                    height={40}
                                    alt="Clubs Icon"
                                    className="w-10 h-10 object-contain"
                                />
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#4D4D4D] tracking-wide">46,328</h3>
                                    <p className="text-xs sm:text-sm text-[#717171]">Clubs</p>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
                                <Image
                                    src="/Vector (3).png"
                                    width={40}
                                    height={40}
                                    alt="Events Icon"
                                    className="w-10 h-10 object-contain"
                                />
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#4D4D4D] tracking-wide">828,867</h3>
                                    <p className="text-xs sm:text-sm text-[#717171]">Event Bookings</p>
                                </div>
                            </div>

                            {/* Stat 4 */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
                                <Image
                                    src="/Vector (3).png"
                                    width={40}
                                    height={40}
                                    alt="Payments Icon"
                                    className="w-10 h-10 object-contain"
                                />
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#4D4D4D] tracking-wide">1,926,436</h3>
                                    <p className="text-xs sm:text-sm text-[#717171]">Payments</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* 3. Description Section */}
                <section className="w-full px-4 md:px-12 py-10 lg:py-20">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-center">

                            {/* Image */}
                            <div className="flex justify-center w-full lg:w-1/2">
                                <Image
                                    src='/Frame 35.png'
                                    width={440}
                                    height={400}
                                    alt='The unseen of spending three years at Pixelgrade'
                                    className="object-contain max-w-[80%] sm:max-w-[60%] lg:max-w-full h-auto"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col items-center lg:items-start max-w-xl text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                    How to design your site footer like we did
                                </h1>
                                <p className="py-4 lg:py-6 text-sm lg:text-base text-gray-500 leading-relaxed">
                                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                                </p>
                                <button className="bg-[#4CAF50] hover:bg-[#43a047] text-white font-medium px-6 py-3 rounded text-base transition-colors duration-200 shadow-sm">
                                    Learn More
                                </button>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 4. Customer Feedback Section (নতুন যুক্ত করা হয়েছে) */}
                <section className="w-full bg-[#F5F7FA] py-10 lg:py-16 px-4 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                        {/* Left Side Logo/Image */}
                        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                            <Image
                                src="/image 9.png"
                                width={320}
                                height={320}
                                alt="Tesla Logo Card"
                                className="rounded-lg shadow-md object-cover w-full max-w-[280px] sm:max-w-[320px]"
                            />
                        </div>

                        {/* Right Side Content */}
                        <div className="w-full lg:w-2/3 flex flex-col justify-between">
                            <p className="text-[#717171] text-sm lg:text-base font-medium leading-relaxed">
                                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                            </p>

                            {/* Customer Info */}
                            <div className="mt-4">
                                <h4 className="text-[#4CAF50] text-lg font-semibold">Tim Smith</h4>
                                <p className="text-[#8993a4] text-sm mt-1">British Dragon Boat Racing Association</p>
                            </div>

                            {/* Logos & Link */}
                            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
                                {/* Client Logos */}
                                <div className="flex flex-wrap items-center gap-4 sm:gap-6 opacity-80">
                                    <Image src="/Logo flower.png" width={32} height={32} alt="logo1" className="object-contain" />
                                    <Image src="/Logo (s).png" width={32} height={32} alt="logo2" className="object-contain" />
                                    <Image src="/Logo (l).png" width={32} height={32} alt="logo3" className="object-contain" />
                                    <Image src="/Logo (m).png" width={32} height={32} alt="logo4" className="object-contain" />
                                    <Image src="/Logo (6).png" width={32} height={32} alt="logo5" className="object-contain" />
                                    <Image src="/Logo (5).png" width={32} height={32} alt="logo6" className="object-contain" />
                                </div>

                                {/* Action Link */}
                                <a href="#" className="flex items-center gap-2 text-[#4CAF50] hover:text-[#43a047] font-semibold text-base transition-colors duration-200">
                                    Meet all customers
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.25 4.5L15.75 9M15.75 9L11.25 13.5M15.75 9L2.25 9" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>
                {/* 5. Blog/Marketing Section */}
                <section className="w-full bg-white py-12 lg:py-20 px-4 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">

                        {/* Section Header */}
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#4D4D4D] leading-tight">
                                Caring is the new marketing
                            </h2>
                            <p className="mt-3 text-sm lg:text-base text-[#717171] leading-relaxed">
                                The Nexcent blog is the best place to read about the latest membership insights,
                                trends and more. See who's joining the community, read about how our community
                                are increasing their membership income and lot's more.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-6 items-start pt-4 pb-16">

                            {/* Card 1 */}
                            <div className="flex flex-col items-center relative">
                                <div className="w-full overflow-hidden rounded-lg shadow-sm">
                                    <Image
                                        src="/image 18.png" 
                                        width={368}
                                        height={286}
                                        alt="Creating Streamlined Safeguarding Processes"
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>
                                {/* Floating Content Box */}
                                <div className="absolute -bottom-20 bg-[#F5F7FA] p-4 sm:p-5 rounded-lg shadow-lg text-center w-[85%] sm:w-[90%] border border-gray-100 flex flex-col items-center justify-between min-h-[140px]">
                                    <h3 className="text-sm sm:text-base font-bold text-[#717171] leading-snug px-2">
                                        Creating Streamlined Safeguarding Processes with OneRen
                                    </h3>
                                    <a href="#" className="mt-3 flex items-center justify-center gap-2 text-[#4CAF50] hover:text-[#43a047] font-semibold text-sm transition-colors duration-200">
                                        Readmore
                                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.25 4.5L15.75 9M15.75 9L11.25 13.5M15.75 9L2.25 9" stroke="#4CAF50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex flex-col items-center relative">
                                <div className="w-full overflow-hidden rounded-lg shadow-sm">
                                    <Image
                                        src="/image 19.png"
                                        width={368}
                                        height={286}
                                        alt="What are your safeguarding responsibilities"
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>
                                {/* Floating Content Box */}
                                <div className="absolute -bottom-20 bg-[#F5F7FA] p-4 sm:p-5 rounded-lg shadow-lg text-center w-[85%] sm:w-[90%] border border-gray-100 flex flex-col items-center justify-between min-h-[140px]">
                                    <h3 className="text-sm sm:text-base font-bold text-[#717171] leading-snug px-2">
                                        What are your safeguarding responsibilities and how can you manage them?
                                    </h3>
                                    <a href="#" className="mt-3 flex items-center justify-center gap-2 text-[#4CAF50] hover:text-[#43a047] font-semibold text-sm transition-colors duration-200">
                                        Readmore
                                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.25 4.5L15.75 9M15.75 9L11.25 13.5M15.75 9L2.25 9" stroke="#4CAF50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex flex-col items-center relative md:col-span-2 lg:col-span-1 md:w-[50%] lg:w-full md:mx-auto">
                                <div className="w-full overflow-hidden rounded-lg shadow-sm">
                                    <Image
                                        src="/image 20.png"
                                        width={368}
                                        height={286}
                                        alt="Revamping the Membership Model"
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>
                                {/* Floating Content Box */}
                                <div className="absolute -bottom-20 bg-[#F5F7FA] p-4 sm:p-5 rounded-lg shadow-lg text-center w-[85%] sm:w-[90%] border border-gray-100 flex flex-col items-center justify-between min-h-[140px]">
                                    <h3 className="text-sm sm:text-base font-bold text-[#717171] leading-snug px-2">
                                        Revamping the Membership Model with Triathlon Australia
                                    </h3>
                                    <a href="#" className="mt-3 flex items-center justify-center gap-2 text-[#4CAF50] hover:text-[#43a047] font-semibold text-sm transition-colors duration-200">
                                        Readmore
                                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.25 4.5L15.75 9M15.75 9L11.25 13.5M15.75 9L2.25 9" stroke="#4CAF50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
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