import { useRef } from 'react';

import thumnailUpload from '@/assets/thumnail-upload.svg';
import { ThumbnailUploadProps } from '@/types/thumbnail';

const ThumbnailUpload = ({ imgFile, onImageChange }: ThumbnailUploadProps) => {
  const imgRef = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    imgRef.current?.click();
  };

  const saveImgFile = () => {
    if (imgRef.current?.files && imgRef.current.files[0]) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (reader.result) {
          onImageChange(reader.result as string);
        }
      };
    }
  };

  return (
    <figure className="flex flex-col gap-2">
      <p className="text-base font-bold">썸네일</p>
      <div className="aspect-video w-full overflow-auto rounded-medium">
        {imgFile ? (
          <img
            src={imgFile}
            alt="프로필 이미지"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex aspect-video flex-col items-center justify-center bg-gray-100 p-medium shadow-inner">
            <img
              src={thumnailUpload}
              alt="썸네일 업로드 이미지"
              className="cursor-pointer"
              onClick={handleInput}
            />
            <p className="text-xsmall font-bold text-gray">
              썸네일을 추가해보아요!
            </p>
          </div>
        )}
      </div>
      <input
        id="profileImg"
        ref={imgRef}
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        onChange={saveImgFile}
        className="hidden"
      />
    </figure>
  );
};

export default ThumbnailUpload;
