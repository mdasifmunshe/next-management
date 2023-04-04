import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { createJWT, hashPassword } from '@/lib/auth';
import { serialize } from 'cookie';

export default async function register(request: NextRequest) {
  let body = await request.json();

  try {
    const user = await db.user.create({
      data: {
        email: body.email,
        password: await hashPassword(body.password),
        username: body.firstName,
      },
    });

    const jwt = await createJWT(user);
    const cookie = serialize(process.env.COOKIE_NAME, jwt, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return new Response('Hello, Next.js!', {
      status: 200,
      headers: {
        'Set-Cookie': `${cookie}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
