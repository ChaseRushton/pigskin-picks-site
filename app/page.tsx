import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import ScreenshotGallery from '@/components/ScreenshotGallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <ScreenshotGallery />
      <FeatureGrid />
    </main>
  );
}
