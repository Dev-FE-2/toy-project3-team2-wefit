import Button from '../common/button/Button';
import { UserProps } from '@/types/user';
import { VideoProps } from '@/types/video';
import { formatNumber } from '@/utils/formatNumber';

type AuthorProfileProps = {
  author: UserProps;
  authorVideos: VideoProps[];
};

type StatItem = {
  label: string;
  value: number;
};

const AuthorProfile = ({ author, authorVideos }: AuthorProfileProps) => {
  const stats: StatItem[] = [
    { label: '팔로워', value: author.follower },
    { label: '팔로잉', value: author.following },
    { label: '업로드 영상', value: authorVideos.length },
  ];

  return (
    <section className="flex flex-col gap-3">
      <header className="flex items-center gap-4">
        <h1 className="text-xl font-bold">{author.nickname}</h1>
        <Button variant="outline" size="small">
          팔로우
        </Button>
      </header>

      <article className="flex items-center gap-6 px-2">
        <figure className="h-16 w-16 overflow-hidden rounded-full">
          <img
            src={author.user_image}
            alt={`${author.nickname}님의 프로필`}
            className="w-ull h-full object-cover"
          />
        </figure>

        <dl className="flex items-center gap-8">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <dt className="text-gray-600 text-sm">{label}</dt>
              <dd className="text-lg font-bold">{formatNumber(value)}</dd>
            </div>
          ))}
        </dl>
      </article>

      <p className="text-gray-600 px-2 text-sm">{author.description}</p>
    </section>
  );
};

export default AuthorProfile;
