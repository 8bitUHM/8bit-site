import * as React from "react";
import LoadingImage from "../components/LoadingImage";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

interface SocialMedia {
  social_media: string;
  social_media_link: string;
}

interface Member {
  social_medias: SocialMedia[];
  name: string;
  team: string;
  is_leader: boolean;
  image: string;
}

const Members = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    try {
      const memberData = (window as any).data as any;
      const softwareMemberArray: Member[] = [];
      const businessMemberArray: Member[] = [];
      const designMemberArray: Member[] = [];

      memberData.forEach((member: Member) => {
        switch (member.team) {
          case "software":
            softwareMemberArray.push(member);
            break;
          case "business":
            businessMemberArray.push(member);
            break;
          case "design":
            designMemberArray.push(member);
            break;
        }
      });

      let retMemberData: Member[] =
        softwareMemberArray.concat(businessMemberArray);

      retMemberData = retMemberData.concat(designMemberArray);
      setMembers(retMemberData);

      setCanMap(true);
      setPageReady(true);
    } catch (e: any) {
      setPageReady(true);
    }

    initFlowbite();
  }, []);

  const renderSocialMedia = (
    socialMedia: string,
    socialMediaLink: string,
    key: number
  ) => {
    const baseClasses = "p-2 rounded-lg transition-all duration-200 hover:scale-110";
    
    switch (socialMedia) {
      case "mail":
        return (
          <a
            key={key}
            href={`mailto:${socialMediaLink}`}
            target="_blank"
            className={`${baseClasses} text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20`}
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
          </a>
        );
      case "linkedin":
        return (
          <a
            key={key}
            href={`${socialMediaLink}`}
            target="_blank"
            className={`${baseClasses} text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20`}
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        );
      case "instagram":
        return (
          <a
            key={key}
            href={`${socialMediaLink}`}
            target="_blank"
            className={`${baseClasses} text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20`}
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
        );

      case "github":
        return (
          <a
            key={key}
            href={`${socialMediaLink}`}
            target="_blank"
            className={`${baseClasses} text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700`}
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
        );
    }
  };

  const getMemberRole = (member: Member): string => {
    if (member.is_leader) {
      return `${
        member.team.charAt(0).toUpperCase() + member.team.slice(1)
      } Leader`;
    }
    return `${
      member.team.charAt(0).toUpperCase() + member.team.slice(1)
    } Member`;
  };

  const getTeamColor = (team: string): string => {
    switch (team) {
      case "software":
        return "primary";
      case "business":
        return "accent";
      case "design":
        return "purple";
      default:
        return "primary";
    }
  };

  const mapTeam = () => {
    return members.map((member: Member, index: number) => (
      <div
        key={index}
        className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 animate-slide-up"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden">
          {member.image != null ? (
            <LoadingImage 
              imageUri={member.image} 
              className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          ) : (
            <LoadingImage
              imageUri={"/static/main_app/assets/default-member.png"}
              className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Leader Badge */}
          {member.is_leader && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Leader
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {member.name}
          </h3>

          <p className="mb-4 text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
            {getMemberRole(member)}
          </p>

          {/* Social Media Links */}
          {member.social_medias.length > 0 && (
            <div className="flex items-center gap-1">
              {member.social_medias.map(
                (socialMedia: SocialMedia, index: number) =>
                  renderSocialMedia(
                    socialMedia.social_media,
                    socialMedia.social_media_link,
                    index
                  )
              )}
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <>
      <div
        className="container sm:mx-auto px-4 sm:px-6 max-w-screen-xl"
        style={{ paddingTop: 120, paddingBottom: 100 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {pageReady ? (
          <>
            {canMap ? (
              <>
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
                    The{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                      8bit
                    </span>{" "}
                    Team
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                    At 8bit, our strength lies in the diverse talents and
                    collaboration of our members. Our team is divided into three
                    specialized groups—Software, Business, and Design—each
                    contributing uniquely to our collective success.
                  </p>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                  {mapTeam()}
                </div>
              </>
            ) : (
              <div className="text-center py-16 sm:py-20">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-md mx-4 sm:mx-auto">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Oops! Something went wrong</h3>
                  <p className="text-sm sm:text-base text-red-600 dark:text-red-400 mb-4">We couldn't load the members. Please refresh and try again.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="px-4 py-2 text-sm sm:text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 sm:py-20">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-4 border-transparent border-t-accent-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400">Loading amazing team members...</p>
            <div className="mt-2 flex space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Members />);
