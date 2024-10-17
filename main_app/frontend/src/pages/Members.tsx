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
    switch (socialMedia) {
      case "mail":
        return (
          <a
            key={key}
            className="text-reset me-2"
            href={`mailto:${socialMediaLink}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="hover:text-gray-600"
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
            className="text-reset me-2"
            href={`${socialMediaLink}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="hover:text-gray-600"
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
            className="text-reset me-2"
            href={`${socialMediaLink}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="hover:text-gray-600"
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
            className="text-reset me-2"
            href={`${socialMediaLink}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="hover:text-gray-600"
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
      }, Leader`;
    }
    return `${
      member.team.charAt(0).toUpperCase() + member.team.slice(1)
    }, Member`;
  };

  const mapTeam = () => {
    return members.map((member: Member, index: number) => (
      <div
        key={index}
        className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        {member.image != null ? (
          <LoadingImage imageUri={member.image} className="rounded-t-lg" />
        ) : (
          <LoadingImage
            imageUri={"/static/main_app/assets/default-member.png"}
            className="rounded-t-lg"
          />
        )}
        <div className="px-5 py-4">
          <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>

          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
            {getMemberRole(member)}
          </p>
          <div className="flex ">
            {member.social_medias.map(
              (socialMedia: SocialMedia, index: number) =>
                renderSocialMedia(
                  socialMedia.social_media,
                  socialMedia.social_media_link,
                  index
                )
            )}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div
        className="container sm:mx-auto px-5 pb-12 max-w-screen-xl"
        style={{ paddingTop: 135 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {pageReady ? (
          <>
            {canMap ? (
              <>
                <div className="text-center mb-6">
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white  lg:text-4xl">
                    The{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                      8bit
                    </span>{" "}
                    Team
                  </h1>
                  <p className="text-gray-500">
                    At 8bit, our strength lies in the diverse talents and
                    collaboration of our members. Our team is divided into three
                    specialized groups—Software, Business, and Design—each
                    contributing uniquely to our collective success.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4">
                  {mapTeam()}
                </div>
              </>
            ) : (
              <div style={{ marginBottom: 700 }}>
                Uh oh! Something went wrong with our request for data. Please
                refresh and try again!
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center py-12">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Members />);
