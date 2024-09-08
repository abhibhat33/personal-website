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
    <div className="min-h-screen">
      <div className="w-4/5 md:w-3/5 mx-auto py-8">
        <Header />
        <Thoota />
        <Footer />
      </div>
  </div>
  )
}
