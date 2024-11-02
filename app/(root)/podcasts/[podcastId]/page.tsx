'use client'

import React from "react";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";



const PodcastDetails = ({ params: { podcastId } }: { params: { podcastId: Id<'podcasts'> } }) => {
  

  const podcasts = useQuery(api.podcasts.getPodcastById, { podcastId })

     return (
       <section className="flex w-full flex-col">
        <header className="mt-9 flex items-center justify-between">
          <h1 className="text-20 font-bold text-white-1">Current Playing</h1>
          <figure className="flex gap-3">
          <Image
            src="/icons/headphone.svg"
            width={24}
            height={24}
            alt="headphone"
          />
          <h2 className="text-16 font-bold text-white-1">{podcasts?.views}</h2>
        </figure>
        </header>
       </section>
     )
}

export default PodcastDetails