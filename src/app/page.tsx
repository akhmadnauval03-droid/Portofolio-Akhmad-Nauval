import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillSection from "@/sections/SkillSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";
import { Toaster } from "react-hot-toast";
import AnimationLayout from "@/components/layout/AnimationLayout";
import SplashScreen from "@/components/splah screen/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />

      <AnimationLayout>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
        <Footer />
        <Toaster />
      </AnimationLayout>
    </>
  );
}

// import AboutSection from "@/sections/AboutSection";
// import HeroSection from "@/sections/HeroSection";
// import ProjectSection from "@/sections/ProjectSection";
// import SkillSection from "@/sections/SkillSection";
// import ContactSection from "@/sections/ContactSection";
// import Footer from "@/sections/Footer";
// import { Toaster } from "react-hot-toast";
// import AnimationLayout from "@/components/layout/AnimationLayout";
// import SplashScreen from "@/components/splah screen/SplashScreen";

// export default function Home() {
//   return (
//     <AnimationLayout>
//       <HeroSection />
//       <AboutSection />
//       <ProjectSection />
//       <SkillSection/>
//       <ContactSection/>
//       <Footer />
//       <Toaster/>
//     </AnimationLayout>
//   );
// }
