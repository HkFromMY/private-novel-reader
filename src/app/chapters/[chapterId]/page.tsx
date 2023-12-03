import React from 'react'
import PageNotFound from '@/app/components/PageNotFound'
import Link from 'next/link'

async function getChapter(id: string) {
  try {
    const response = await fetch(
      `${process.env.URL}/api/chapters/${id}`
    )
    const data = await response.json()
    return data
  } catch(error) {
    if (error instanceof SyntaxError && error.message.includes("Unexpected end of JSON input")) {
      return ""

    }
  }
}

const Page = async ({ params }: {params: { chapterId: string } }) => {
  const chapter = await getChapter(params.chapterId);
  const renderNavigateButtons = (chapterId: number) => {
    if (chapterId === 1) {
      return (
        <div className="bg-green-400 px-8 py-2 rounded-lg outline-none ml-auto">
          <Link href={`/chapters/${parseInt(params.chapterId) + 1}`}>下一章</Link>
        </div>
      )

    } else if (chapterId === 859) {
      return (
        <div className="bg-amber-400 px-8 py-2 rounded-lg outline-none">
          <Link href={`/chapters/${parseInt(params.chapterId) - 1}`}>上一章</Link>
        </div>
      )

    } else {
      return (
        <>
          <div className="bg-amber-400 px-8 py-2 rounded-lg outline-none">
            <Link href={`/chapters/${parseInt(params.chapterId) - 1}`}>上一章</Link>
          </div>
          <div className="bg-green-400 px-8 py-2 rounded-lg outline-none">
            <Link href={`/chapters/${parseInt(params.chapterId) + 1}`}>下一章</Link>
          </div>
        </>
      )

    }
  }

  return (
    <div className="md:max-w-2xl m-6 rounded-lg flex flex-col tracking-wider">
      {
        chapter === "" ?
        <PageNotFound />
        :
        <>
          <div>
            <h2 className="text-2xl font-bold">{chapter.title}</h2>
          </div>
          <div className="mt-8 text-xl flex flex-col">
            <div className="flex justify-between ml-auto bg-amber-400 px-8 py-2 rounded-lg outline-none">
              <Link className="text-base" href='/'>回到首页</Link>
            </div>
            {chapter.content.split("\n").map((content: string, idx: number) => {
              return (
                  <p className="mt-6 indent-4 leading-8 tracking-wider text-slate-800 text-justify" key={idx}>{content}</p>
              )
            })}
          </div>
          <div className="mt-8 mb-4 flex flex-row justify-between items-center">
            {
              renderNavigateButtons(parseInt(params.chapterId))
            }
          </div>
        </>
      }
    </div>
  )
}

export default Page