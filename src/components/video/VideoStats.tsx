import { BsClockHistory } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import { VscComment } from 'react-icons/vsc';
import { FaStar, FaRegStar } from 'react-icons/fa';

import { formatNumber } from '@/utils/formatNumber';
import { getTimeAgo } from '@/utils/getTimeAgo';
import { VideoStatsProps } from '@/types/video';
import { mockComments } from '@/mocks/mockComment';

const VideoStats = ({
  video_id,
  created_at,
  is_bookmarked,
  like_heart,
}: VideoStatsProps) => {
  const commentsCount = mockComments.filter(
    comment => comment.video_id === video_id,
  ).length;

  return (
    <div className="flex items-center gap-2 text-gray">
      <time className="flex items-center">
        <BsClockHistory size={16} className="mr-1" />
        <span className="text-xs">{getTimeAgo(created_at)}</span>
      </time>

      <div className="flex items-center">
        <IoHeartOutline size={16} className="mr-1" />
        <span className="text-xs">{formatNumber(like_heart)}</span>
      </div>

      <div className="flex items-center">
        <VscComment size={16} className="mr-1" />
        <span className="text-xs">{formatNumber(commentsCount)}</span>
      </div>

      <div className="flex items-center">
        {is_bookmarked ? (
          <FaStar size={16} className="text-primary" />
        ) : (
          <FaRegStar size={16} />
        )}
      </div>
    </div>
  );
};

export default VideoStats;
