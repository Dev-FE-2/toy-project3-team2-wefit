import Button from '../common/button/Button';
import { bookmarkCategories } from '@/mocks/bookmarkCategories';
import { VideoCategoryProps } from '@/types/video';

const bookmarkCategory = ({
  selectedCategory,
  onCategoryChange,
}: VideoCategoryProps) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {bookmarkCategories.map((category, index) => (
        <li key={index}>
          <Button
            variant={selectedCategory === category ? 'primary' : 'outline'}
            size="small"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default bookmarkCategory;
