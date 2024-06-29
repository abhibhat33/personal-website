// app/routes/about.tsx

import type { MetaFunction } from "@remix-run/node";
import Header from "../components/header";
import Footer from "~/components/footer";
import AboutContent from "~/components/aboutcontent";

export const meta: MetaFunction = () => {
  return [
    { title: "About Me" },
    { name: "description", content: "Details about Abhishek Bhat." },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-3/5 mx-auto">
        <Header />
        <AboutContent />
        <Footer />
      </div>
    </div>
  );
}
