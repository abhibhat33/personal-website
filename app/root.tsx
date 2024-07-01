import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,Routes, Route
} from "@remix-run/react";
import "./tailwind.css";
import Index from "./routes/_index";
import About from "./routes/about";
import Blogs from "./routes/blogs";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
  <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
  </Routes>
}
