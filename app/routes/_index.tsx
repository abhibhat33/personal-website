// app/routes/_index.tsx

import type { MetaFunction } from "@remix-run/node";
import Header from "../components/header";
import Bio from "../components/bio";
import Footer from "~/components/footer";
import MainPage from "~/components/MainPage";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-3/5 mx-auto">
        <Header />
        <Bio />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}
