import { NextRequest, NextResponse } from 'next/server'
import { getPostBySlug } from '../../../../lib/blog'

export async function GET(
  request: NextRequest,
  ctx: { params: Promise<{ slug: string }> }
) {
  const searchParams = request.nextUrl.searchParams

  const { slug } = await ctx.params
  const locale = searchParams.get('locale') || 'en'

  try {
    const post = await getPostBySlug(slug)

    return NextResponse.json({
      locale,
      data: post
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json({}, { status: 404 })
  }
}
