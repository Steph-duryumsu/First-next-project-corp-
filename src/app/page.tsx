import Image from 'next/image';
import Hero from '@/components/hero';
// import homeImg from 'public/homepage.jpg';

export default function Home() {
  return (
    <Hero 
      imgData={'/home.jpg'} 
      imageAlt="Car factory" 
      title="Professional cloud hosting" 
    />
  );
}
