import { FeatureSection } from "./components/sections/FeaturesSection";
import { GuaranteeSection } from "./components/sections/GuaranteeSection";
import { InitialSection } from "./components/sections/InitialSection";
import { ProblemSection } from "./components/sections/ProblemSection";

export default function Home() {
  return (
    <main className='w-full'>
      <InitialSection />
      <ProblemSection />
      <FeatureSection />
      <GuaranteeSection />
    </main>
  )
}
