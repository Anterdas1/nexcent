import React from 'react';
import Image from 'next/image';

const Mange = () => {
    return (
        <div>
            <div className="mt-6 text-center">
                <h1 className="text-xl font-black">
                    Manage your entire community <br />
                    in a single system
                </h1>
                <p>Who is Nextcent suitable for?</p>
            </div>

            <main className="flex flex-col md:flex-row justify-center gap-10 mt-10">
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/icon (1).png"
                        width={25}
                        height={25}
                        alt="icon"
                    />
                    <h1 className="text-xl font-black mt-3">
                        Membership <br /> Organisations
                    </h1>
                    <p className="mt-2">
                        Our membership management <br />
                        software provides full automation of <br />
                        membership renewals and payments
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/icon (2).png"
                        width={25}
                        height={25}
                        alt="icon"
                    />
                    <h1 className="text-xl font-black mt-3">
                        National <br /> Associations
                    </h1>
                    <p className="mt-2">
                        Our membership management <br />
                        software provides full automation of <br />
                        membership renewals and payments
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/icon (3).png"
                        width={25}
                        height={25}
                        alt="icon"
                    />
                    <h1 className="text-xl font-black mt-3">
                        Clubs And  <br /> Groups
                    </h1>
                    <p className="mt-2">
                        Our membership management <br />
                        software provides full automation of <br />
                        membership renewals and payments
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Mange;