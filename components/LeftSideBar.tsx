'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, useClerk } from '@clerk/nextjs';
import { sidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';
import { Button } from './ui/button';


const LeftSideBar = () => {
  
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  // const { audio } = useAudio();

  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
          <Link href= "/" className='flex cursor-pointer items-center pb-10 gap-1 max-lg:justify-center'>

          <Image src="/icons/logo.svg" alt = "logo" width={23} height={27} />
          
          <h1 className='text-24 text-white-1 font-extrabold max-lg:hidden'>Podcastr</h1>

          </Link>
          
         {sidebarLinks.map(({route, label, imgURL}) => {
           
           const isActive = pathname === route || pathname.startsWith(`${route}/`);

          return <Link href={route} key={label} className={cn('flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start' , {
             'bg-nav-focus border-r-4 border-orange-1'  : isActive
            })}>
              
                 <Image src={imgURL} alt={label} width={24} height={24}/>
                 <p>{label}</p>
            </Link>
          
         })}

        </nav>
        <SignedOut>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button asChild className="text-16 w-full bg-orange-1 font-extrabold">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button className="text-16 w-full bg-orange-1 font-extrabold" onClick={() => signOut(() => router.push('/'))}>
            Log Out
          </Button>
        </div>
      </SignedIn>
    </section>
  )
}

export default LeftSideBar