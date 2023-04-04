import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { comparePasswords, createJWT } from '@/lib/auth';
import { serialize } from 'cookie';

export async function POST(request: NextRequest) {
  let body = await request.json();

  const user = await db.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return NextResponse.json({ error: 'Invalid Login' }, { status: 401 });
  }

  const isUser = await comparePasswords(body.password, user.password);

  if (!isUser) {
    return NextResponse.json({ error: 'Invalid Login' }, { status: 401 });
  }

  const jwt = await createJWT(user);
  const serial = serialize(process.env.COOKIE_NAME, jwt, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Set-Cookie': `${serial}`,
    },
  });
}
