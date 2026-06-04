import * as React from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import SectionBand from "../components/layout/SectionBand";
import SectionDivider from "../components/layout/SectionDivider";
import SectionLabel from "../components/layout/SectionLabel";
import TeamSectionHeader from "../components/layout/TeamSectionHeader";
import MemberCard from "../components/MemberCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import { ROLE_ORDER, RoleName, isRoleName } from "../components/teamUtils";
import "../styles/styles.css";

interface SocialMedia {
  social_media: string;
  social_media_link: string;
}

interface Member {
  social_medias: SocialMedia[];
  name: string;
  role: string | null;
  image: string;
}

const Members = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    try {
      const memberData = (window as any).data as Member[];
      setMembers(memberData);
      setCanMap(true);
      setPageReady(true);
    } catch {
      setPageReady(true);
    }
    initFlowbite();
  }, []);

  if (!pageReady) {
    return (
      <SectionBand variant="hero" hero>
        <LoadingState message="Loading amazing team members..." />
      </SectionBand>
    );
  }

  if (!canMap) {
    return (
      <SectionBand variant="hero" hero>
        <ErrorState message="We couldn't load the members. Please refresh and try again." />
      </SectionBand>
    );
  }

  const rolePriority = (role: string | null): number => {
    const idx = isRoleName(role) ? ROLE_ORDER.indexOf(role as RoleName) : -1;
    return idx === -1 ? ROLE_ORDER.length : idx;
  };

  const leadership = members
    .filter((m) => isRoleName(m.role))
    .sort((a, b) => rolePriority(a.role) - rolePriority(b.role));
  const software = members.filter((m) => !isRoleName(m.role));

  return (
    <>
      <SectionBand variant="hero" hero blobs>
        <SectionLabel accent="light">Our people</SectionLabel>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-5">
          The 8bit Team
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed font-semibold">
          Our leadership and software builders work side by side to ship real
          projects at UH Manoa.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold shadow-pop bg-gradient-warm">
            <span className="text-sm">Leadership</span>
            <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full">
              {leadership.length}
            </span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold shadow-pop bg-primary-500">
            <span className="text-sm">Software Team</span>
            <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full">
              {software.length}
            </span>
          </div>
        </div>
      </SectionBand>

      <SectionDivider from="hero" to="white" />

      <SectionBand variant="white">
        {leadership.length > 0 && (
          <div className="mb-16">
            <TeamSectionHeader
              title="Leadership"
              count={leadership.length}
              solidClass="bg-gradient-warm"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {leadership.map((member, index) => (
                <MemberCard
                  key={`lead-${member.name}-${index}`}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  social_medias={member.social_medias}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {software.length > 0 && (
          <div>
            <TeamSectionHeader
              title="Software Team"
              count={software.length}
              solidClass="bg-primary-500"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {software.map((member, index) => (
                <MemberCard
                  key={`sw-${member.name}-${index}`}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  social_medias={member.social_medias}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </SectionBand>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Members />);
