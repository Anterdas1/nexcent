import Image from 'next/image';
import React from 'react';

const Client = () => {
    return (
        <div className='mt-6'>
            <div className='text-center'>
                <h1 className='text-xl font-black'>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='flex justify-center items-center gap-4 mt-5'>
                <Image
                    src='/Logo (1).png'
                    width={25}
                    height={25}
                    alt='kana dakh'
                />
                <Image
                    src='/Logo (2).png'
                    width={25}
                    height={25}
                    alt='kana dakh'
                />
                <Image
                    src='/Logo (3).png'
                    width={25}
                    height={25}
                    alt='kana dakh'
                />
                <Image
                    src='/Logo (4).png'
                    width={25}
                    height={25}
                    alt='kana dakh'
                />
                <Image
                    src='/Logo (5).png'
                    width={25}
                    height={25}
                    alt='kana dakh'
                />
                <Image
                    src='/Logo (6).png'
                    width={25}
                    height={25}
                    alt='kana dakh'
                />
                <Image
                    src='/Logo (7).png'
                    width={25}
                    height={25}
                    alt='kana dakh'
                />

            </div>
        </div>
    );
};

export default Client;