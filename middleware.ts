import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(
  req: NextRequest
): Promise<NextResponse | undefined> {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    req.nextUrl.pathname.includes('/frontend-api') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === 'default') {
    return NextResponse.redirect(
      new URL(`/en-us/${req.nextUrl.pathname}`, req.url)
    );
  }
}
