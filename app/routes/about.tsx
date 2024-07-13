import { useLoaderData } from "@remix-run/react";
import AboutContent from "~/components/aboutcontent";
import Footer from "~/components/footer";
import Header from "~/components/header";

export function clientLoader() {
  return { message: "Loading" };
}

export default function About() {
    const loader = useLoaderData<typeof clientLoader>();
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-black">
    <div className="w-3/5 mx-auto">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  </div>
  )
}
