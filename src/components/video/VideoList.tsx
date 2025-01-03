import VideoItem from './VideoItem';
import { VideoListProps } from '@/types/video';

const VideoList = ({ videos }: VideoListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {videos.map(video => (
        <VideoItem key={video.video_id} {...video} />
      ))}
    </div>
  );
};

export default VideoList;
