import * as React from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import SectionBand from "../components/layout/SectionBand";
import SectionDivider from "../components/layout/SectionDivider";
import SectionLabel from "../components/layout/SectionLabel";
import SplitHero from "../components/layout/SplitHero";
import ProcessStep from "../components/layout/ProcessStep";
import Button from "../components/Button";
import "../styles/styles.css";

interface ServiceRowProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  panelBg: string;
  reverse?: boolean;
}

const ServiceRow: React.FC<ServiceRowProps> = ({
  title,
  description,
  icon,
  panelBg,
  reverse = false,
}) => (
  <div
    className={`service-panel ${panelBg} text-white shadow-pop animate-slide-up ${reverse ? "md:flex-row-reverse" : ""}`}
  >
    <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-white/25 flex items-center justify-center text-white">
      {icon}
    </div>
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">{title}</h3>
      <p className="text-white/90 text-base sm:text-lg leading-relaxed font-semibold">
        {description}
      </p>
    </div>
  </div>
);

const Services = () => {
  React.useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <SectionBand variant="hero" hero blobs>
        <SplitHero
          title="Our Services"
          subtitle="We charge nothing for our services."
          showLogo={false}
        >
          <Button href="mailto:8bituhmanoa@gmail.com" variant="white">Get in Touch</Button>
        </SplitHero>
        <p className="mt-10 text-white/90 text-lg max-w-3xl leading-relaxed font-semibold">
          At 8bit, we take the time to assess your unique needs and goals. Through a personalized consultation, we analyze how we can best support your vision, then customize our services to deliver the right solutions.
        </p>
      </SectionBand>

      <SectionDivider from="hero" to="white" />

      <SectionBand variant="white">
        <SectionLabel accent="primary">How it works</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-10">
          From idea to launch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProcessStep
            step={1}
            title="Consult"
            description="We learn about your goals, audience, and requirements through a personalized consultation."
            accent="primary"
          />
          <ProcessStep
            step={2}
            title="Build"
            description="Our software, design, and business teams collaborate to build the right solution for you."
            accent="accent"
          />
          <ProcessStep
            step={3}
            title="Launch"
            description="We handle deployment, hosting, and domain management so you can focus on what matters."
            accent="violet"
          />
        </div>
      </SectionBand>

      <SectionDivider from="white" to="soft" />

      <SectionBand variant="soft">
        <SectionLabel accent="accent">What we offer</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-10">
          Services tailored to your needs
        </h2>
        <div className="space-y-6">
          <ServiceRow
            title="Static Website"
            description="Our static website service offers clients a sleek and polished online presence. With our design team and cutting-edge technologies, we create websites that showcase your brand and message effectively."
            panelBg="bg-primary-500"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10" viewBox="0 0 16 16">
                <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                <path d="M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1zM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1zM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643z" />
              </svg>
            }
          />
          <ServiceRow
            title="Dynamic Web App"
            description="Utilizing the latest web development frameworks, we build applications that engage your audience. A powerful backend drives dynamic content with an intuitive admin portal for easy management."
            panelBg="bg-gradient-cool"
            reverse
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10" viewBox="0 0 16 16">
                <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1m1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2z" />
              </svg>
            }
          />
          <ServiceRow
            title="Infrastructure"
            description="We handle site deployment and hosting on platforms like AWS or UH-hosted servers. From deployment to domain management, we take care of the infrastructure."
            panelBg="bg-gradient-warm"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10" viewBox="0 0 16 16">
                <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z" />
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" />
              </svg>
            }
          />
        </div>
      </SectionBand>

      <SectionDivider from="soft" to="violet" />

      <SectionBand variant="violet" blobs>
        <div className="max-w-xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-white dark:bg-gray-800 shadow-pop">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Interested in 8bit services?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg font-semibold">
            Get in touch to discuss how we can help bring your vision to life.
          </p>
          <Button href="mailto:8bituhmanoa@gmail.com">Send us an Email</Button>
        </div>
      </SectionBand>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Services />);
