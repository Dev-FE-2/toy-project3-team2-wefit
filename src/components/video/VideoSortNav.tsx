import Button from '../common/button/Button';

import { VideoSortNavProps } from '@/types/video';

const VideoSortNav = ({ sortType, onSortChange }: VideoSortNavProps) => {
  return (
    <nav className="flex items-center gap-2">
      <Button
        variant={sortType === 'latest' ? 'primary' : 'outline'}
        size="small"
        onClick={() => onSortChange('latest')}
      >
        최신순
      </Button>
      <Button
        variant={sortType === 'popular' ? 'primary' : 'outline'}
        size="small"
        onClick={() => onSortChange('popular')}
      >
        인기순
      </Button>
    </nav>
  );
};

export default VideoSortNav;
