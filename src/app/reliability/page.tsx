import Image from 'next/image';
import Hero from '@/components/hero';
// import homeImg from 'public/homepage.jpg';

export default function ReliabilityPage() {
  return (
    <Hero 
      imgData={'/reliability.jpg'} 
      imageAlt="Welding" 
      title="Super high reliability hosting" 
    />
  );
}
