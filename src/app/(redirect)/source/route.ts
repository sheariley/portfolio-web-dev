import { NextResponse } from 'next/server'
import { ExternalLinkUrls } from '@/lib/utils'

export function GET() {
  return NextResponse.redirect(ExternalLinkUrls.Source)
}
