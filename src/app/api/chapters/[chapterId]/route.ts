import data from '@/app/data/cleaned.json'
 
type Chapter = {
  index: number, // used this as the main id, because it is easier to navigate
  id: number,
  title: string,
  content: string
}

export async function GET(
  req: Request,
  { params }: { params: { chapterId: string } }
) {
  
  const chapterIntQueried = parseInt(params.chapterId)
  const isNumericOnly = /^[0-9]+$/.test(params.chapterId)

  if (isNaN(chapterIntQueried) || (!isNumericOnly)) {
    return new Response(JSON.stringify({ status: "error", message: "Query Params Given is Incorrect!" }), { status: 400 });

  } else {
    // find the correct novel and return to the client
    const target_chapter = (data as Chapter[]).filter(chapter => chapter.index === parseInt(params.chapterId))[0]
    return new Response(JSON.stringify(target_chapter));
    
  }
  
}