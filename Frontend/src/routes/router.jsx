import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout";

// Lazy pages (Optimization ⚡)
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Contact = lazy(() => import("../pages/Contact"));

// Loader fallback
const Loader = () => (
  <div className="text-center py-20">Loading...</div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback={<Loader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;