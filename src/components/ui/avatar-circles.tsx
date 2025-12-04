/* eslint-disable @next/next/no-img-element */
"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface Avatar {
  imageUrl: string
  profileUrl?: string
}
interface AvatarCirclesProps {
  className?: string
  avatarUrls: Avatar[]
}

export const AvatarCircles = ({
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <div key={index} className="relative group">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 text-amber-400 fill-amber-400"
              />
            ))}
          </div>
          <a
            href={url.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              className="h-12 w-12 rounded-full border-2 border-white dark:border-gray-800 transition-transform group-hover:scale-110"
              src={url.imageUrl}
              width={48}
              height={48}
              alt={`Avatar ${index + 1}`}
            />
          </a>
        </div>
      ))}
    </div>
  )
}
