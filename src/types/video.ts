/* eslint-disable */
type VideoProps = {
  video_id: string;
  video_url: string;
  user_id: string;
  nickname: string;
  thumbnail: string;
  title: string;
  hash_tag: string[];
  like_heart: number;
  comments: string[];
  is_bookmarked: boolean;
  created_at: Date;
};

type VideoCategoryProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

interface VideoListProps {
  videos: VideoProps[];
}

type VideoStatsProps = {
  created_at: Date;
  like_heart: number;
  comments: string[];
  is_bookmarked: boolean;
};

export type { VideoProps, VideoCategoryProps, VideoListProps, VideoStatsProps };
