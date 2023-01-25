import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(
  req: NextRequest
): Promise<NextResponse | undefined> {
  console.error('middleware log', JSON.stringify(req.nextUrl.pathname));
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    console.error('middleware IF 1');
    return;
  }

  if (req.nextUrl.locale === 'default') {
    console.error('middleware IF 2');
    const locale = 'en-us';

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }
}
