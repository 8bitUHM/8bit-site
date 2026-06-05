import * as React from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import SectionBand from "../components/layout/SectionBand";
import SectionDivider from "../components/layout/SectionDivider";
import SectionLabel from "../components/layout/SectionLabel";
import SplitHero from "../components/layout/SplitHero";
import BentoTile from "../components/layout/BentoTile";
import Button from "../components/Button";
import "../styles/styles.css";

const Index = () => {
  React.useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <SectionBand variant="hero" hero blobs>
        <SplitHero
          title={
            <>
              We are <span className="text-white underline decoration-wavy decoration-white/60 underline-offset-8">8bit</span> @ UH Manoa
            </>
          }
          subtitle="We empower our members through immersive, hands-on software development."
          stats={[
            { label: "Campus", value: "UHM" },
            { label: "Focus", value: "Software" },
            { label: "Services", value: "Free" },
          ]}
        >
          <Button href="/members" variant="white">Meet the Team</Button>
          <Button href="/projects" variant="ghost">View Projects</Button>
          <Button href="/learning" variant="ghost">Learning Portal</Button>
        </SplitHero>
      </SectionBand>

      <SectionDivider from="hero" to="white" />

      <SectionBand variant="white">
        <SectionLabel accent="primary">What we do</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-10">
          Build, learn, and ship together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <BentoTile
            title="Digital Solutions"
            description="We bring software to life through innovative development and creative problem-solving."
            variant="mint"
            delay={0}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <BentoTile
            title="Unique Experiences"
            description="Real-life software development through hands-on projects and mentorship."
            variant="sky"
            delay={100}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
          />
          <BentoTile
            title="Learning Portal"
            description="Level up with our in-house tutorials and guided lessons — from your first commit to shipping full-stack apps."
            variant="violet"
            size="wide"
            delay={200}
            href="/learning"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            }
          />
          <BentoTile
            title="Client & Open Source"
            description="From paid client work to open source contributions — we build for impact."
            variant="warm"
            delay={300}
            href="/projects"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
          />
        </div>
      </SectionBand>

      <SectionDivider from="white" to="warm" />

      <SectionBand variant="warm" blobs>
        <SectionLabel accent="light">About 8bit</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-5">
              Students building real software at UH Manoa
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-4 font-semibold">
              8bit is a group of students passionate about software development and creating impactful software solutions. We specialize in full-stack website development and collaborate with clients while contributing to open source.
            </p>
            <p className="text-white/90 text-lg leading-relaxed font-semibold">
              Guided by student leadership, our members take on real client work and open source projects, gaining hands-on experience and professional growth along the way.
            </p>
          </div>
          <ul className="space-y-3">
            {["Full-stack web development", "Client project experience", "Open source contributions", "Student-led mentorship", "Free services for clients"].map((item) => (
              <li key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
                <span className="w-3 h-3 rounded-full bg-white flex-shrink-0" />
                <span className="text-base font-bold text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionBand>

      <SectionDivider from="warm" to="cool" />

      <SectionBand variant="cool" blobs>
        <SectionLabel accent="light">Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">
          Step inside a team meeting
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-pop">
              <iframe
                className="w-full aspect-video"
                allowFullScreen
                allow="accelerometer; magnetometer; gyroscope"
                src="https://panoraven.com/en/embed/WOfnSPPfuM"
                title="360° view of 8bit team meeting"
              />
            </div>
          </div>
          <div className="lg:col-span-2 p-7 sm:p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-pop">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-semibold">
              Experience an interactive 360° view of one of 8bit's team meetings with Oppkey. See how our teams collaborate in real time.
            </p>
          </div>
        </div>
      </SectionBand>

      <SectionDivider from="cool" to="white" />

      <SectionBand variant="white">
        <SectionLabel accent="violet">Join us</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 text-center">
          Ready to join our community?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
          Connect on Discord, explore our GitHub, or reach out via email. We're always looking for passionate students who want to grow their skills and make an impact.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          <a href="https://discord.gg/T7Eu75fpAf" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-7 rounded-3xl bg-white shadow-pop hover:-translate-y-1.5 transition-transform duration-300">
            <svg className="w-10 h-10 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span className="font-display font-bold text-lg text-gray-900">Join Discord</span>
          </a>
          <a href="https://github.com/8bituhm" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-7 rounded-3xl bg-white shadow-pop hover:-translate-y-1.5 transition-transform duration-300">
            <svg className="w-10 h-10 text-gray-800" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <span className="font-display font-bold text-lg text-gray-900">View GitHub</span>
          </a>
          <a href="mailto:8bituhmanoa@gmail.com" className="flex flex-col items-center gap-3 p-7 rounded-3xl bg-white shadow-pop hover:-translate-y-1.5 transition-transform duration-300">
            <svg className="w-10 h-10 text-primary-500" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <span className="font-display font-bold text-lg text-gray-900">Contact Us</span>
          </a>
        </div>
      </SectionBand>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Index />);
