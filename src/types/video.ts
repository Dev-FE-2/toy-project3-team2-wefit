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

type VideoSortNavProps = {
  sortType: 'latest' | 'popular';
  onSortChange: (type: 'latest' | 'popular') => void;
};

export type { VideoProps, VideoCategoryProps, VideoSortNavProps };
