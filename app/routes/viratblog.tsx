import { useLoaderData } from "@remix-run/react";
import ViratKohli from "~/blogs/viratkohli";
import Footer from "~/components/footer";
import Header from "~/components/header";

export function clientLoader() {
  return { message: "Loading" };
}

export default function ViratBlog() {
    const loader = useLoaderData<typeof clientLoader>();
  return (
    <div className="min-h-screen">
      <div className="w-4/5 md:w-3/5 mx-auto py-8">
        <Header />
        <ViratKohli />
        <Footer />
      </div>
  </div>
  )
}
