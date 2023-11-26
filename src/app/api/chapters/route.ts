import data from '@/app/data/cleaned.json'

type Chapters = {
    index: number,
    id: number,
    title: string,
    content: string
}

type IdTitle = {
    id: number,
    title: string
}

export async function GET(
  req: Request,
  { params }: { params: { chapterId: string } }
) {
  // get data from JSON file
  let chapters = data as Chapters[];

  // get query string and slice the whole data
  const url_obj: URL = new URL(req.url);
  const offsetParam: string | null = url_obj.searchParams.get("offset")
  const offset: number = offsetParam !== null ? parseInt(offsetParam) : NaN
  chapters = chapters.slice(offset * 10, (offset * 10) + 10)

  // reformat the data structure
  let idTitleList: IdTitle[] = [];
  for (let i = 0; i < chapters.length; i++) {
    let idTitle: IdTitle = { id: chapters[i].index, title: chapters[i].title }
    idTitleList.push(idTitle)
  }

  // return back to the client
  return new Response(JSON.stringify(idTitleList))
}