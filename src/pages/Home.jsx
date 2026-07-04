import Hero from "../components/home/Hero";
import ImpactStats from "../components/home/ImpactStats";
import LearnIslam from "../components/home/LearnIslam";
import AIDaeeSection from "../components/home/AIDaeeSection";
import ResearchHub from "../components/home/ResearchHub";
import Programs from "../components/home/Programs";
import ImpactDashboard from "../components/home/ImpactDashboard";
import UpcomingEvents from "../components/home/UpcomingEvents";
import Publications from "../components/home/Publications";
import Welfare from "../components/home/Welfare";
import DonateCTA from "../components/home/DonateCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <LearnIslam />
      <AIDaeeSection />
      <ResearchHub />
      <Programs />
      <ImpactDashboard />
      <UpcomingEvents />
      <Publications />
      <Welfare />
      <DonateCTA />
    </main>
  );
}
