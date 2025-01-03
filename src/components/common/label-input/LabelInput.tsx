import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { useDebounce } from '@/hooks/usedebounce';

type LabelInputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  placeholder: string;
  description: string;
};

const LabelInput = (props: LabelInputProps) => {
  const { title, placeholder, description, ...inputProps } = props;
  const [desc, setDesc] = useState(description);

  const debouncedValue = useDebounce({
    value: desc,
    delay: 1000,
  });

  console.log(debouncedValue); //삭제 예정

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  return (
    <div className="mb-2 max-w-container">
      <p className="text-base font-bold">{title}</p>
      <input
        {...inputProps}
        className="mt-1 w-full rounded-medium border border-black p-2 px-4 focus:!border-primary focus:outline-none"
        placeholder={placeholder}
        value={desc}
        onChange={handleChange}
      />
    </div>
  );
};

export default LabelInput;
