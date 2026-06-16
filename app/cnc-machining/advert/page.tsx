import type { Metadata } from "next";
import { CncMachiningPageContent } from "../page";

export const metadata: Metadata = {
  title: "CNC Machining Advert Landing Page | Procision",
  description:
    "Advert landing page for precision CNC machining leads, with added team context before the detailed service journey.",
};

export default function CncMachiningAdvertPage() {
  return <CncMachiningPageContent showMeetTeam />;
}
