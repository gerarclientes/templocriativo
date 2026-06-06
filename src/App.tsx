/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroSection } from "./components/HeroSection";
import { JourneySection } from "./components/JourneySection";
import { OfferSection } from "./components/OfferSection";
import { ClosingSection } from "./components/ClosingSection";

export default function App() {
  return (
    <main className="bg-temple-white font-sans text-temple-black overflow-hidden relative">
      <HeroSection />
      <JourneySection />
      <OfferSection />
      <ClosingSection />
    </main>
  );
}
