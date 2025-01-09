import { useState } from 'react';

import { useParams } from 'react-router-dom';

import VideoList from '@/components/video/VideoList';
import VideoSortNav from '@/components/video/VideoSortNav';
import AuthorProfile from '@/components/author/AuthorProfile';
import EmptyResult from '@/components/empty/EmptyResult';
import AuthorProfileSkeleton from '@/components/skeleton/author/AuthorProfileSkeleton';
import VideoListSkeleton from '@/components/skeleton/video/VideoListSkeleton';
import { useVideos } from '@/hooks/useVideos';
import { useUsers } from '@/hooks/useUsers';

const AuthorDetailPage = () => {
  const [sortType, setSortType] = useState<'latest' | 'popular'>('latest');
  const { userId } = useParams<{ userId: string }>();
  const { userQuery } = useUsers(userId);
  const { videosQuery } = useVideos();

  const { data: author, isLoading: isAuthorLoading } = userQuery;
  const { data: videos, isLoading: isVideosLoading } = videosQuery;

  if (isAuthorLoading || isVideosLoading) {
    return (
      <main className="flex flex-col">
        <AuthorProfileSkeleton />
        <hr className="my-3" aria-hidden="true" />
        <header className="mb-2 flex items-center justify-between">
          <h2 className="font-bold">작성자가 업로드한 영상</h2>
          <VideoSortNav sortType={sortType} onSortChange={setSortType} />
        </header>
        <VideoListSkeleton />
      </main>
    );
  }

  const authorVideos =
    videos
      ?.filter(video => video.user_id === userId)
      .sort((a, b) => {
        if (sortType === 'latest') {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        }
        return b.like_heart - a.like_heart;
      }) ?? [];

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

        {authorVideos.length > 0 ? (
          <VideoList videos={authorVideos} />
        ) : (
          <EmptyResult message="작성자가 업로드한 영상이 없어요!" />
        )}
      </section>
    </main>
  );
};

export default AuthorDetailPage;
