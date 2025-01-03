import user1 from '@/assets/user/user1.png';
import user2 from '@/assets/user/user2.png';
import user3 from '@/assets/user/user3.png';

const mockUsers = [
  {
    user_id: 'user1',
    user_image: user1,
    nickname: 'Allright24_박재훈',
    description: '안녕하세요 올라잇입니다!',
    follower: 430540,
    following: 2043,
    comments: ['와우', '대박', '좋아요'],
    my_upload_video: ['1', '2', '4'],
    my_watched_video: ['1', '2', '4'],
  },
  {
    user_id: 'user2',
    user_image: user2,
    nickname: '내추럴 우형재',
    description: '안녕하세요 우형재입니다!',
    follower: 95933,
    following: 3495,
    comments: ['와우', '대박', '좋아요'],
    my_upload_video: ['3'],
    my_watched_video: ['3'],
  },
  {
    user_id: 'user3',
    user_image: user3,
    nickname: '아모띠 amotti',
    description: '안녕하세요 아모띠입니다!',
    follower: 604939,
    following: 39845,
    comments: ['와우', '대박', '좋아요'],
    my_upload_video: ['5'],
    my_watched_video: ['5'],
  },
];

export { mockUsers };
