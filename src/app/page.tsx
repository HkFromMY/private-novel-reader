"use client"

import React, { useState } from 'react'
import ChapterLists from './components/ChapterLists'

const Page = () => {
  const offsetList = Array.from({ length: 307 }, (_, index) => index)
  const [offset, setOffset] = useState(0)

  return (
    <div className="m-4 text-center">
      <h1 className="text-3xl font-bold">Private Novel Reader</h1>
      <p className="text-xs mt-8">Please select a chapter to read</p>

      <select onChange={(evt) => setOffset(parseInt(evt.target.value))} id="page" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mt-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {
          offsetList.map(offsetNo => {
            return (
              <option key={offsetNo} value={offsetNo}>{ 'Page ' + (offsetNo + 1)}</option>
            )
          })
        }
      </select>

      <ChapterLists offset={offset} />
      <div className="mt-4">
        <p className="text-sm text-slate-600">This is for educational purposes only</p>
      </div>
    </div>
  )
}

export default Page