import FinalProduct from "./components/FinalProduct";
import Header from "./components/Header";
import IntervieweeProfile from "./components/IntervieweeProfile";
import InterviewQuestions from "./components/InterviewQuestions";
import ResearchNotes from "./components/ResearchNotes";
import TimelineSection from "./components/TimelineSection";
// import TooMuchWork from "./components/TooMuchWork";
import TranscriptSection from "./components/TranscriptSection";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="space-y-20 pb-20">
        <IntervieweeProfile />
        <InterviewQuestions />

        {/* Video Section */}
        <VideoSection />
        {/* <TranscriptSection /> */}
        <TranscriptSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* Research Notes */}
        <ResearchNotes />

        {/* Final Product */}
        <FinalProduct />

        {/* Too mcuh work.. */}
        {/* <TooMuchWork /> */}
      </main>
    </div>
  );
}
