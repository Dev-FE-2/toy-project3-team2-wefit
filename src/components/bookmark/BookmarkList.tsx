import BookmarkItem from './BookmarkItem';
import { VideoListProps } from '@/types/video';

const BookmarkList = ({ videos }: VideoListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {videos.map(video => (
        <BookmarkItem key={video.video_id} {...video} />
      ))}
    </div>
  );
};

export default BookmarkList;
