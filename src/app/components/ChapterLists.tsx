"use client"

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

type IdTitle = {
    id: number,
    title: string
}

const ChapterLists = ({ offset }: { offset: number }) => {
  const [idTitles, setIdTitles] = useState([])

  useEffect(() => {
    const getIdTitles = async () => {
        const response = await fetch(
        `/api/chapters?offset=${offset}`
        )
        const data = await response.json()
    
        setIdTitles(data)
    }

    getIdTitles().catch(console.error)
  }, [offset])

  return (
    <div className="mt-4 flex flex-col w-full bg-white rounded-lg">
        {
            // if not the last item, then render a divider after the content
            idTitles.map((idTitle: IdTitle, idx: number) => {
                if (idx !== idTitles.length - 1) {
                    return (
                        <Fragment key={idx}>
                            <div className="text-left p-4 text-sm">
                                <Link href={`/chapters/${idTitle.id}`}>{ idTitle.title }</Link>
                            </div> 
                            <hr className="flex-grow border-t border-gray-300" />
                        </Fragment>
                    )
                } else {
                    return (
                        <div key={idx} className="text-left p-4 text-sm">
                            <Link href={`/chapters/${idTitle.id}`}>{ idTitle.title }</Link>
                        </div>
                    )
                }
            })
        }
    </div>
  )
}

export default ChapterLists