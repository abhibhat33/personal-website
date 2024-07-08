import { useLoaderData } from "@remix-run/react";

export function clientLoader() {
  return { message: "hiiii" };
}

export default function About() {
    const loader = useLoaderData<typeof clientLoader>();
  return <h1>{loader.message}</h1>;
}
