/* eslint-disable @next/next/no-img-element */
"use client"

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
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse justify-center", className)}>
      {avatarUrls.map((url, index) => (
        <div key={index} className="relative group">
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
