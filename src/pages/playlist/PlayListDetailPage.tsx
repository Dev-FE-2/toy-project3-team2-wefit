import NotFoundPage from '../NotFoundPage';
import PlayListVideo from '@/components/playlist/PlayListVideo';
import PlayList from '@/components/playlist/PlayList';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { useVideos } from '@/hooks/useVideos';
import { PlayListProps } from '@/types/playList';
import { useMusics } from '@/hooks/useMusics';
import { useUsers } from '@/hooks/useUsers';

const PlayListDetailPage = () => {
  const { currentUserQuery } = useUsers();
  const { categoriesQuery } = useCategories(currentUserQuery.data.user_id);
  const { playlistId } = useParams();
  const [videoUrl, setVideoUrl] = useState('');
  const { videosQuery } = useVideos();
  const musicsQuery = useMusics();

  if (
    videosQuery.isLoading ||
    categoriesQuery.isLoading ||
    musicsQuery.isLoading
  ) {
    return <div>Loading...</div>;
  }

  if (videosQuery.isError) {
    return <div>Error: {videosQuery.error?.message}</div>;
  }

  if (categoriesQuery.isError) {
    return <div>Error: {categoriesQuery.error?.message}</div>;
  }

  if (musicsQuery.isError) {
    return <div>Error: {musicsQuery.error?.message}</div>;
  }

  // 카테고리 필터링
  const filteredPlayLists: PlayListProps[] = (
    categoriesQuery.data || []
  ).filter(category => {
    return category.category_id === String(playlistId);
  });

  // 음악 필터링
  const filteredMusics: PlayListProps[] = (musicsQuery.data || []).filter(
    music => {
      return music.list_id === String(playlistId);
    },
  );

  const handleVideoUrlChange = (newVideoUrl: string) => {
    setVideoUrl(newVideoUrl); // 업데이트된 videoUrl 저장
  };

  if (filteredPlayLists.length > 0) {
    return (
      <>
        {filteredPlayLists.map(playlist => (
          <div key={playlist.list_id}>
            <PlayListVideo object={playlist} videoUrl={videoUrl} />
            <PlayList
              object={playlist}
              onVideoUrlChange={handleVideoUrlChange}
            />
          </div>
        ))}
      </>
    );
  } else if (filteredMusics.length > 0) {
    return (
      <>
        {filteredMusics.map(music => (
          <div key={music.list_id}>
            <PlayListVideo object={music} videoUrl={videoUrl} />
            <PlayList object={music} onVideoUrlChange={handleVideoUrlChange} />
          </div>
        ))}
      </>
    );
  } else {
    return <NotFoundPage />;
  }
};

export default PlayListDetailPage;
