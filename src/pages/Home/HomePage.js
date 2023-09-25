import { FeaturedProducts } from "./components/FeaturedProducts";
import {Hero} from "./components/Hero";
import {Testimonials} from "./components/Testimonials";
import {Faq} from "./components/Faq";
import { useTitle } from "../../hooks/useTitle";

export const HomePage = () => {
  useTitle("Access Computer Science eBooks - CodeVerse")
  return (
   <main>
      <Hero/>
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
   </main>
  )
}
