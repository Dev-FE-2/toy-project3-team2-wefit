import Button from '@/components/common/button/Button';
import LabelInput from '@/components/common/label-input/LabelInput';
import { useRef, useState } from 'react';
import videoUpload from '@/assets/video-upload.svg';
import thumnailUpload from '@/assets/thumnail-upload.svg';

const VideoAddPage = () => {
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef<HTMLInputElement>(null);
  const hashTagArr = [
    '가슴',
    '등',
    '어깨',
    '하체',
    '복근',
    '팔',
    '엉덩이',
    '종아리',
  ];

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
          setImgFile(reader.result as string);
        }
      };
    }
  };

  const handleImageReset = () => {
    setImgFile('');
    if (imgRef.current) {
      imgRef.current.value = '';
    }
  };
  return (
    <>
      <div className="mb-4">
        <p className="mb-2 text-base font-bold">영상 업로드</p>
        <div className="flex flex-col items-center rounded-medium bg-gray-100 p-medium shadow-inner">
          <img
            src={videoUpload}
            alt="영상 업로드 이미지"
            className="mb-5 h-20 w-full"
          />
          <p className="text-xsmall font-bold">원하는 동영상을 추가해보아요!</p>
        </div>
      </div>
      <div className="mb-2">
        <LabelInput
          title="영상 제목"
          placeholder="영상 제목을 입력해주세요."
          description=""
        />
      </div>
      <div className="mb-2">
        <p className="mb-2 text-base font-bold">해시 태그</p>
        <div className="flex flex-wrap gap-small">
          {hashTagArr.map(tag => (
            <Button size="small" variant="outline">
              {tag}
            </Button>
          ))}
          <Button size="small" variant="outline">
            추가 입력
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2 text-base font-bold">썸네일</p>
        <div className="w-full overflow-auto rounded-medium">
          {imgFile ? (
            <img src={imgFile} alt="프로필 이미지" />
          ) : (
            <div className="flex flex-col items-center bg-gray-100 p-medium shadow-inner">
              <img
                src={thumnailUpload}
                alt="썸네일 업로드 이미지"
                className="mb-5 h-20 w-full cursor-pointer"
                onClick={handleInput}
              />
              <p className="text-xsmall font-bold">썸네일을 추가해보아요!</p>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          id="profileImg"
          onChange={saveImgFile}
          ref={imgRef}
          className="hidden"
        />
      </div>
      <div className="flex w-full gap-small">
        <Button type="submit" className="w-1/2">
          업로드
        </Button>
        <Button
          type="reset"
          variant="outline"
          className="w-1/2"
          onClick={handleImageReset}
        >
          취소
        </Button>
      </div>
    </>
  );
};

export default VideoAddPage;
