import { useLoaderData } from "@remix-run/react";
import Thoota from "~/blogs/thoota";
import Footer from "~/components/footer";
import Header from "~/components/header";

export function clientLoader() {
  return { message: "Loading" };
}

export default function OurFarm() {
    const loader = useLoaderData<typeof clientLoader>();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
    <div className="w-3/5 mx-auto">
      <Header />
      <Thoota />
      <Footer />
    </div>
  </div>
  )
}
