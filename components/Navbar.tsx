'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/assets/icons/logo.svg'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router =  useRouter();

    const user={};
  return (
    <header className='navbar'>
        <nav>
            <Link href="/" >
                <Image 
                    src="/assets/icons/logo.svg"
                    alt='Logo'
                    width={32}
                    height={32}

                />

                <h1>SnapCast</h1>
            </Link>

            {user && (
                <figure>
                    <button onClick={() => router.push('/profile/123456') }>
                        <Image
                            src="/assets/images/dummy.jpg"
                            alt="User"
                            width={36}
                            height={36}
                            className='rounded-full aspect-square'
                        />
                    </button>

                    <button className='cursor-pointer'>
                        <Image
                            src="/assets/icons/logout.svg"
                            alt="logout"
                            width={24}
                            height={24}
                            className='rotate-180'

                        />
                    </button>
                </figure>
            ) }
        </nav>
    </header>
  )
}

export default Navbar