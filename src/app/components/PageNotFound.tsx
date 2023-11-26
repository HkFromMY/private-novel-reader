import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex flex-col">
        <Image
        className="text-center"
        src="/404.png"
        height="320"
        width="320"
        alt="An image describing 404"
        />
        <p className="text-center text-3xl text-red-400 font-bold">404: Page Not Found</p>
        <div className="w-1/2 mx-auto mt-4 p-2 bg-amber-400 rounded-lg text-center">
          <Link className="text-sm font-bold" href={`/`}>Back to Home</Link>
        </div>
    </div>
  )
}

export default PageNotFound