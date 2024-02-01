'use client';
import { useRouter } from 'next/navigation';
const About = () => {
  const navigate = useRouter();
  const handleClick = () => {
    navigate.push('/news');
  };

  return (
    <>
      <div>About</div>
      <div>
        <button onClick={handleClick}> Go to News</button>
      </div>
    </>
  );
};

export default About;
