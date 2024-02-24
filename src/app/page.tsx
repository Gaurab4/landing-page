import Navbar from "@/components/navbar/page";
import AlumiPage from "@/components/screens/alumni-page/page";
import Heropage from "@/components/screens/hero-page/page";
import LeapAdvantagePage from "@/components/screens/leap-advantage-page/page";
import StudentAckPage from "@/components/screens/student-ack-page/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
        <Navbar/>
        <Heropage/>
        <LeapAdvantagePage/>
        <StudentAckPage/>
        <AlumiPage/>
    </main>
  );
}
