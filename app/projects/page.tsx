import { Projects } from '@/components/projects';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <>
      <Navigation />
      <Projects />
      <Footer />
    </>
  );
}