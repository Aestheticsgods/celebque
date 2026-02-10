import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';

// GET current user's creator profile
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    if (!user.isCreator) {
      return NextResponse.json(
        { error: 'User is not a creator' },
        { status: 403 }
      );
    }

    const creator = await prisma.creator.findUnique({
      where: { userId: user.id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        posts: true,
        subscribers: true,
      },
    });

    if (!creator) {
      return NextResponse.json(
        { error: 'Creator profile not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        ...creator,
        subscriberCount: creator.subscribers.length,
        postCount: creator.posts.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching creator profile:', error);
    return NextResponse.json(
      { error: 'Failed to fetch creator profile' },
      { status: 500 }
    );
  }
}
