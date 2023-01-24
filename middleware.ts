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

  // If the locale is 'default' we want to redirect the user to en-us, so that there's always a suffix trailing the root url (business req)
  if (req.nextUrl.locale === 'default') {
    return NextResponse.redirect(
      new URL(`/en-us/${req.nextUrl.pathname}`, req.url)
    );
  }
}
