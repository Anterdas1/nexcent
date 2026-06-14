import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* 6. CTA & Footer Section */}
            <footer className="w-full">

                {/* Upper CTA Section */}
                <div className="w-full bg-[#F5F7FA] py-12 lg:py-16 px-4 text-center">
                    <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] max-w-2xl leading-tight sm:leading-none">
                            Pellentesque suscipit <br className="hidden sm:inline" /> fringilla libero eu.
                        </h2>
                        <button className="bg-[#4CAF50] hover:bg-[#43a047] text-white font-medium px-6 py-3 rounded flex items-center gap-2 text-base transition-colors duration-200 shadow-sm">
                            Get a Demo
                            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.25 4.5L15.75 9M15.75 9L11.25 13.5M15.75 9L2.25 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Main Dark Footer */}
                <div className="w-full bg-[#263238] text-white py-12 lg:py-16 px-4 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

                        {/* Column 1: Logo & Copyright */}
                        <div className="md:col-span-4 flex flex-col justify-between gap-6">
                            <div className="flex items-center gap-2">
                                {/* Nexcent Logo Placeholder */}
                                <div className="flex items-center gap-1">
                                    <span className="w-3 h-3 bg-[#4CAF50] rounded-sm transform rotate-45 block"></span>
                                    <span className="w-3 h-3 bg-[#4CAF50] rounded-sm transform -rotate-45 block -ml-1"></span>
                                </div>
                                <span className="text-2xl font-bold tracking-wide">Nexcent</span>
                            </div>

                            <div className="text-sm text-[#F5F7FA] opacity-80 flex flex-col gap-2">
                                <p>Copyright © 2020 Nexcent ltd.</p>
                                <p>All rights reserved</p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-4">
                                {/* Instagram */}
                                <a href="#" className="w-8 h-8 rounded-full bg-[#4D585E] hover:bg-[#4CAF50] flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                {/* Dribbble / Web */}
                                <a href="#" className="w-8 h-8 rounded-full bg-[#4D585E] hover:bg-[#4CAF50] flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 24c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm0-22c-5.514 0-10 4.486-10 10 0 4.743 3.31 8.71 7.734 9.743-.09-.844-.148-2.122.032-3.036.163-.827.873-4.355.873-4.355s-.217-.433-.217-1.077c0-1.008.585-1.761 1.313-1.761.619 0 .918.465.918 1.023 0 .622-.396 1.553-.6 2.414-.171.722.362 1.311 1.072 1.311 1.287 0 2.278-1.357 2.278-3.316 0-1.734-1.247-2.947-3.027-2.947-2.062 0-3.272 1.547-3.272 3.146 0 .623.24 1.29.54 1.655.059.072.068.135.05.212-.055.228-.178.723-.202.823-.031.137-.104.166-.239.103-1.893-.88-2.618-3.21-2.618-5.176 0-4.215 3.56-8.087 9.176-8.087 4.817 0 8.006 3.483 8.006 7.253 0 4.632-2.585 8.118-6.34 8.118-1.238 0-2.402-.67-2.8-.143-.31.815-.722 1.954-.852 2.457-.25.968-.74 1.942-1.127 2.545 1.01.297 2.073.456 3.176.456 5.514 0 10-4.486 10-10s-4.486-10-10-10z" /></svg>
                                </a>
                                {/* Twitter */}
                                <a href="#" className="w-8 h-8 rounded-full bg-[#4D585E] hover:bg-[#4CAF50] flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </a>
                                {/* YouTube */}
                                <a href="#" className="w-8 h-8 rounded-full bg-[#4D585E] hover:bg-[#4CAF50] flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.652 0h14.696c2.569 0 4.652 2.083 4.652 4.652v14.696c0 2.569-2.083 4.652-4.652 4.652h-14.696c-2.569 0-4.652-2.083-4.652-4.652v-14.696c0-2.569 2.083-4.652 4.652-4.652zm11.23 12.312l-5.631-3.142c-.443-.247-.968.075-.968.58v6.28c0 .505.525.827.968.58l5.631-3.142c.421-.235.421-.841 0-1.076z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Links Columns Right */}
                        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">

                            {/* Column 2: Company */}
                            <div className="flex flex-col gap-3">
                                <h4 className="text-lg font-semibold tracking-wide text-white mb-2">Company</h4>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">About us</a>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">Blog</a>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">Contact us</a>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">Pricing</a>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">Testimonials</a>
                            </div>

                            {/* Column 3: Support */}
                            <div className="flex flex-col gap-3">
                                <h4 className="text-lg font-semibold tracking-wide text-white mb-2">Support</h4>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">Help center</a>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">Terms of service</a>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">Legal</a>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">Privacy policy</a>
                                <a href="#" className="text-sm text-[#F5F7FA] opacity-80 hover:opacity-100 transition-opacity">Status</a>
                            </div>

                            {/* Column 4: Newsletter / Stay up to date */}
                            <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
                                <h4 className="text-lg font-semibold tracking-wide text-white mb-2">Stay up to date</h4>
                                <div className="relative w-full max-w-[250px] sm:max-w-full">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full bg-[#4D585E] text-white text-sm px-4 py-2.5 rounded-md pr-10 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-[#4CAF50] transition-all"
                                    />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-[#4CAF50] transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 1.5L1.5 7.5L7.5 10.5L10.5 16.5L16.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;