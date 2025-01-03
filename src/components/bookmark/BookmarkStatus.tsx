import { IoHeartOutline } from 'react-icons/io5';
import { VscComment } from 'react-icons/vsc';
import { FaStar } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { formatNumber } from '@/utils/formatNumber';
import { getTimeAgo } from '@/utils/getTimeAgo';
import { VideoStatsProps } from '@/types/video';

const BookmarkStatus = ({
  created_at,
  like_heart,
  comments,
  is_bookmarked,
}: VideoStatsProps) => {
  return (
    <div className="text-gray-600 mt-1 flex justify-between">
      <div className="flex flex-grow items-center font-bold">
        <div className="mr-2 flex items-center">
          <IoHeartOutline size={16} className="mr-1" />
          <span className="text-xs">{formatNumber(like_heart)}</span>
        </div>
        <div className="flex items-center">
          <VscComment size={16} className="mr-1" />
          <span className="mr-3 text-xs">{formatNumber(comments.length)}</span>
        </div>
        <time className="flex flex-grow items-center">
          <span className="mr-3 text-xs">{getTimeAgo(created_at)}</span>
        </time>
      </div>
      <div className="flex flex-grow items-center">
        <FaRegTrashAlt size={16} className="mr-1" />
        <FaStar size={16} className={is_bookmarked ? 'text-primary' : ''} />
      </div>
    </div>
  );
};

export default BookmarkStatus;
