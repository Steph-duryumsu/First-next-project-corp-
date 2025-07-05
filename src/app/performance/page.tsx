import Image from 'next/image';
import Hero from '@/components/hero';
// import homeImg from 'public/homepage.jpg';

export default function PerformancePage() {
  return (
    <Hero 
      imgData={'/performance.jpg'} 
      imageAlt="Welding" 
      title="We serve high performance applications" 
    />
  );
}
