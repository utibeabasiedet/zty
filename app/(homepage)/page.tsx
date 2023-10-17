import {
  Hero,
  Benefits,
  Howitworks,
  Signup,
  Partners,
  FaqPage,
  Testimonials,
} from "./home/components";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Benefits />
      <Howitworks />
      <Testimonials />
      <FaqPage />

      <Signup />

      <Partners />
    </main>
  );
}
