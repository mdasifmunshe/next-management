import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const user = await db.user.findMany();

  if (!user) {
    return NextResponse.json({ text: 'No User' }, { status: 200 });
  }

  return NextResponse.json(user, { status: 200 });
}
