import Image from 'next/image';
import Hero from '@/components/hero';
// import homeImg from 'public/homepage.jpg';

export default function Home() {
  return (
    <Hero 
      imgData={'/scale.jpg'} 
      imageAlt="Steel factory" 
      title="Scale your app to infinity" 
    />
  );
}
