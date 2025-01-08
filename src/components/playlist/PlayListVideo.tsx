import { getTimeAgo } from '@/utils/getTimeAgo';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { LuTableOfContents } from 'react-icons/lu';
import type { BookmarkProps } from '@/types/bookmark';

type PlayListProps = {
  bookmark: BookmarkProps;
  thumbnail: string;
};

const PlayListVideo = ({ bookmark, thumbnail }: PlayListProps) => {
  return (
    <div className="sticky top-0 z-10 mb-2 bg-white">
      <figure className="relative mb-3 aspect-video h-[80%] w-full overflow-hidden rounded-lg">
        <img
          src={thumbnail ? thumbnail : bookmark.thumbnail}
          alt={bookmark.title}
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="flex w-full flex-row justify-between gap-1">
        <div className="relative flex w-[90%] flex-row overflow-hidden whitespace-nowrap">
          <h2 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">
            {bookmark.title}
          </h2>
        </div>

        {bookmark.is_like ? (
          <IoHeartSharp size={24} className="mr-1" />
        ) : (
          <IoHeartOutline size={24} className="mr-1" />
        )}
      </div>

      <p>{bookmark.nickname}</p>

      <p className="mr-1 flex items-center gap-2 text-small">
        <span>{bookmark.is_open ? '공개' : '비공개'}</span>
        <span>/</span>
        <span>{getTimeAgo(bookmark.created_at)}</span>
      </p>

      <div className="mt-2 flex flex-row items-center">
        <LuTableOfContents size={24} className="mr-1" />
        재생목록 <h2 className="font-bold">({bookmark.video_list.length})</h2>
      </div>
    </div>
  );
};

export default PlayListVideo;