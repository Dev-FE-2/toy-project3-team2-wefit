import { useState } from 'react';

import { useParams } from 'react-router-dom';

import VideoList from '@/components/video/VideoList';
import VideoSortNav from '@/components/video/VideoSortNav';
import AuthorProfile from '@/components/author/AuthorProfile';
import { mockUsers } from '@/mocks/mockUsers';
import { mockVideos } from '@/mocks/mockVideos';

const AuthorDetailPage = () => {
  const [sortType, setSortType] = useState<'latest' | 'popular'>('latest');
  const { userId } = useParams<{ userId: string }>();

  const author = mockUsers.find(user => user.user_id === userId);
  const authorVideos = mockVideos
    .filter(video => video.user_id === userId)
    .sort((a, b) => {
      if (sortType === 'latest') {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      }
      return b.like_heart - a.like_heart;
    });

  if (!author) {
    return (
      <main className="p-4">
        <h1>존재하지 않는 유저입니다.</h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col">
      <AuthorProfile author={author} authorVideos={authorVideos} />
      <hr className="my-3" aria-hidden="true" />

      <section aria-label="업로드한 영상 목록">
        <header className="mb-2 flex items-center justify-between">
          <h2 className="font-bold">
            작성자가 업로드한 영상 ({authorVideos.length}개)
          </h2>
          <VideoSortNav sortType={sortType} onSortChange={setSortType} />
        </header>
        <VideoList videos={authorVideos} />
      </section>
    </main>
  );
};

export default AuthorDetailPage;
