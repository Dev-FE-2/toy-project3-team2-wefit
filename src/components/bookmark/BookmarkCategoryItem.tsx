import SimpleProfile from '@/components/common/simple-profile/SimpleProfile';
// import BookmarkCategorySkeleton from '@/components/skeleton/bookmark/BookmarkCategorySkeleton';
// import MusicSkeleton from '@/components/skeleton/music/MusicSkeleton';
import { useUsers } from '@/hooks/useUsers';
import { PlayListProps } from '@/types/playList';
import { cn } from '@/utils/cn';
import { getTimeAgo } from '@/utils/getTimeAgo';
import { Link } from 'react-router-dom';

type BookmarkCategoryItemProps = {
  category: PlayListProps;
  selectedCategory?: string;
  isBookmark: boolean;
};

const BookmarkCategoryItem = ({
  category,
  selectedCategory,
}: BookmarkCategoryItemProps) => {
  const { userQuery } = useUsers(category.user_id);
  const userData = userQuery.data;

  // if (userQuery.isLoading) {
  //   return isBookmark ? <BookmarkCategorySkeleton /> : <MusicSkeleton />;
  // }
  return (
    <>
      <div className="">
        <Link
          to={`/playlist/${category.category_id}`}
          key={`link-${category.category_id}`}
        >
          <div className="mb-2">
            <figure className="relative mb-2 aspect-video h-[80%] w-full overflow-hidden rounded-lg">
              <img
                src={category.category_thumbnail}
                alt={category.category_id}
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </Link>
        <div
          className={cn(
            'flex w-full flex-row justify-between gap-1',
            selectedCategory === '전체' && 'flex-col',
          )}
        >
          <div className="relative flex w-[100%] flex-row overflow-hidden whitespace-nowrap">
            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">
              {category.title}
            </h2>
            <h2 className="font-bold">
              ({category.categoried_videos?.length || 0})
            </h2>
          </div>
          <div className="min-w-20">
            <SimpleProfile {...userData} imageSize="large" textSize="small" />
          </div>
          <Link
            to={`/playlist/${category.category_id}`}
            key={`link-title-${category.category_id}`}
          >
            <p className="flex items-center overflow-hidden whitespace-nowrap text-small">
              최종 수정일 {getTimeAgo(category.updated_at)}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export { BookmarkCategoryItem };