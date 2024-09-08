import type { MetaFunction } from "@remix-run/node";
import Bio from "~/components/bio";
import Footer from "~/components/footer";
import Header from "~/components/header";
import MainPage from "~/components/mainpage";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <div className="w-4/5 md:w-3/5 mx-auto py-8">
        <Header />
        <Bio />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}
