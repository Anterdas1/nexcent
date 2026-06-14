import React from 'react';
import Image from 'next/image';

const Mange = () => {
    return (
        <div className="w-full px-4 py-6">
    {/* Header Section */}
    <div className="text-center max-w-xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-black text-gray-800 leading-tight">
            Manage your entire community <br className="hidden sm:inline" /> in a single system
        </h1>
        <p className="mt-2 text-gray-600 font-medium">Who is Nextcent suitable for?</p>
    </div>

    {/* Main Cards Section */}
    <main className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-10 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
            <div className="p-3 bg-green-50 rounded-tl-xl rounded-br-xl">
                <Image
                    src="/icon (1).png"
                    width={32}
                    height={32}
                    alt="Membership Organisations Icon"
                />
            </div>
            <h2 className="text-xl font-black mt-4 text-gray-800 min-h-[56px] flex items-center justify-center">
                Membership <br className="hidden md:inline" /> Organisations
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Our membership management software provides full automation of membership renewals and payments.
            </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
            <div className="p-3 bg-green-50 rounded-tl-xl rounded-br-xl">
                <Image
                    src="/icon (2).png"
                    width={32}
                    height={32}
                    alt="National Associations Icon"
                />
            </div>
            <h2 className="text-xl font-black mt-4 text-gray-800 min-h-[56px] flex items-center justify-center">
                National <br className="hidden md:inline" /> Associations
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Our membership management software provides full automation of membership renewals and payments.
            </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
            <div className="p-3 bg-green-50 rounded-tl-xl rounded-br-xl">
                <Image
                    src="/icon (3).png"
                    width={32}
                    height={32}
                    alt="Clubs And Groups Icon"
                />
            </div>
            <h2 className="text-xl font-black mt-4 text-gray-800 min-h-[56px] flex items-center justify-center">
                Clubs And <br className="hidden md:inline" /> Groups
            </h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Our membership management software provides full automation of membership renewals and payments.
            </p>
        </div>

    </main>
</div>
    );
};

export default Mange;