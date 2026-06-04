import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import SectionBand from "../components/layout/SectionBand";
import SectionDivider from "../components/layout/SectionDivider";
import SectionLabel from "../components/layout/SectionLabel";
import ProjectCard from "../components/ProjectCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import "../styles/styles.css";

interface Tag {
  tag_name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  github_link: string;
  deploy_link: string;
  client: string;
  paid_client_project: boolean;
  in_development: boolean;
  image: string;
  tags: Tag[];
}

const Projects = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    try {
      const data = (window as any).data as Project[];
      setProjectData(data);
      setCanMap(true);
      setPageReady(true);
    } catch {
      setPageReady(true);
    }
    initFlowbite();
  }, []);

  if (!pageReady) {
    return (
      <SectionBand variant="cool" hero>
        <LoadingState message="Loading amazing projects..." />
      </SectionBand>
    );
  }

  if (!canMap) {
    return (
      <SectionBand variant="cool" hero>
        <ErrorState message="We couldn't load the projects. Please refresh and try again." />
      </SectionBand>
    );
  }

  const [featured, ...rest] = projectData;

  return (
    <>
      <SectionBand variant="cool" hero blobs>
        <SectionLabel accent="light">Portfolio</SectionLabel>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-5">
          Our Projects
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed font-semibold">
          Explore the innovative projects we've built, from client solutions to open source contributions.
        </p>
      </SectionBand>

      <SectionDivider from="cool" to="white" />

      <SectionBand variant="white">
        {projectData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featured && (
              <ProjectCard
                key={`featured-${featured.name}`}
                {...featured}
                index={0}
                featured={projectData.length >= 2}
              />
            )}
            {rest.map((project, index) => (
              <ProjectCard
                key={`${project.name}-${index}`}
                {...project}
                index={index + 1}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block p-10 rounded-3xl bg-gradient-cool shadow-pop max-w-md">
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/25 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-2xl font-display font-bold text-white mb-2">Projects Coming Soon!</p>
              <p className="text-sm text-white/90 font-semibold">8bit's open source projects are in the making!</p>
            </div>
          </div>
        )}
      </SectionBand>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Projects />);
