import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { ServicesPreview } from "@/components/services-preview";
// import { FeaturedProjects } from "@/components/featured-projects"; // oculto temporalmente
// import { Numbers } from "@/components/numbers"; // oculto temporalmente

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ServicesPreview />
      {/* <FeaturedProjects /> */}
      {/* <Numbers /> */}
    </>
  );
}
