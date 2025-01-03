import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/constants/constants';
import logoSvg from '@/assets/we-fit-logo.svg';

const SplashPage = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const { HOME, LOGIN } = ROUTER_PATH;
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(isLoggedIn ? HOME : LOGIN);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoggedIn, navigate, HOME, LOGIN]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <header className="mb-12 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col justify-start gap-2">
          <h1 className="text-2xl font-bold">당신의 운동 파트너🏃‍♂️</h1>
          <img src={logoSvg} alt="WeFitlogo" className="h-auto w-64" />
        </div>
      </header>
    </div>
  );
};

export default SplashPage;
