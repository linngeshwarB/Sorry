import { Inter, Rubik_Mono_One, Dancing_Script } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import ApologySection from "@/components/ApologySection";
import CoreMemorySection from "@/components/CoreMemorySection";
import QualitiesSection from "@/components/QualitiesSection";
import FinalMessage from "@/components/FinalMessage";

const inter = Inter({ subsets: ["latin"] });
const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${inter.className} bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 min-h-screen`}
      style={{
        '--font-rubik-mono': rubikMonoOne.style.fontFamily,
        '--font-dancing-script': dancingScript.style.fontFamily,
      } as React.CSSProperties & {
        '--font-rubik-mono': string;
        '--font-dancing-script': string;
      }}
    >
      <HeroSection />
      <ApologySection />
      <CoreMemorySection />
      <QualitiesSection />
      <FinalMessage />
    </div>
  );
}
