import { NextRequest, NextResponse } from 'next/server'
import { getSortedPosts } from '../../../lib/blog'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const locale = searchParams.get('locale') || 'en'

  const posts = getSortedPosts(locale)

  return NextResponse.json({
    locale,
    data: posts
  })
}
