import { useState } from 'react';
import BookmarkCategory from '@/components/bookmark/BookmarkCategory';
import BookmarkList from '@/components/bookmark/BookmarkList';
import EmptyResult from '@/components/empty/EmptyResult';
import { mockVideos } from '@/mocks/mockVideos';
import BookmarkHeader from '@/components/bookmark/BookmarkHeader';
const BookmarkPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredVideos = mockVideos.filter(video => {
    if (selectedCategory === '전체' && video.is_bookmarked === true)
      return true;
    return video.hash_tag.includes(selectedCategory);
  });

  return (
    <main className="flex flex-col gap-2">
      <BookmarkCategory
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <BookmarkHeader />
      {!filteredVideos.length ? (
        <EmptyResult
          message={
            selectedCategory === '카테고리'
              ? '카테고리를 추가해볼까요? '
              : '북마크를 추가해볼까요?'
          }
        />
      ) : (
        <BookmarkList videos={filteredVideos} />
      )}
    </main>
  );
};

export default BookmarkPage;
