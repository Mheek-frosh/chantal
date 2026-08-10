import { ConsultationCta } from "@/components/consultation-cta";
import { ConsultationModal } from "@/components/consultation-modal";
import { Experience } from "@/components/experience";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { OpeningLoader } from "@/components/opening-loader";
import { Pathways } from "@/components/pathways";
import { PostpartumFeature } from "@/components/postpartum-feature";
import { Programs } from "@/components/programs";
import { Results } from "@/components/results";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Testimonials } from "@/components/testimonials";
import { TrustStrip } from "@/components/trust-strip";

export default function Home() {
  return (
    <>
      <OpeningLoader />
      <SmoothScroll />
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Pathways />
        <PostpartumFeature />
        <Method />
        <Programs />
        <Experience />
        <Results />
        <Testimonials />
        <Faq />
        <ConsultationCta />
      </main>
      <SiteFooter />
      <ConsultationModal />
    </>
  );
}
