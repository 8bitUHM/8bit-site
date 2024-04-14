import * as React from "react";
import Navbar from "../components/Navbar";
import LoadingImage from "../components/LoadingImage";
import { useEffect, useState } from "react";

interface SocialMedia {
  social_media: string;
  social_media_link: string;
}

interface Member {
  social_medias: SocialMedia[];
  name: string;
  team: string;
  is_leader: boolean;
  role: string;
  image: string;
}

const Members = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [designMemberData, setDesignMemberData] = useState<Member[]>([]);
  const [businessMemberData, setBusinessMemberData] = useState<Member[]>([]);
  const [softwareMemberData, setSoftwareMemberData] = useState<Member[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "apiUser";
        const password = "apiPassword";
        const encodedCredentials = btoa(`${username}:${password}`);

        const headers = new Headers();
        headers.append("Authorization", `Basic ${encodedCredentials}`);

        const res = await fetch(`/api/members`, {
          method: "GET",
          headers: headers,
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          data.forEach((member: Member) => {
            switch (member.team) {
              case "design":
                setDesignMemberData((prevDesignMemberData) => [
                  ...prevDesignMemberData,
                  member,
                ]);
                break;
              case "business":
                setBusinessMemberData((prevBusinessMemberData) => [
                  ...prevBusinessMemberData,
                  member,
                ]);
                break;
              case "software":
                console.log(member.image == null);
                setSoftwareMemberData((prevSoftwareMemberData) => [
                  ...prevSoftwareMemberData,
                  member,
                ]);
                break;
            }
          });
          setCanMap(true);
        }
      } catch (e: any) {
        console.log(e);
      } finally {
        setPageReady(true);
      }
    };

    fetchData();
  }, []);

  const mapTeam = (team: string) => {
    switch (team) {
      case "business":
        return businessMemberData.map((member: Member, index: number) => (
          <div key={index} className="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div className="team-list position-relative overflow-hidden shadow rounded">
              {member.image != null ? (
                <LoadingImage
                  imageUri={member.image}
                  className="img-fluid float-left"
                />
              ) : (
                <LoadingImage
                  imageUri={"/static/assets/default-member.png"}
                  className="img-fluid float-left"
                />
              )}
              <div className="content float-right p-4">
                <h5 className="title mb-0">{member.name}</h5>
                <small className="text-muted">{member.role}</small>
              </div>
            </div>
          </div>
        ));
      case "design":
        return designMemberData.map((member: Member, index: number) => (
          <div key={index} className="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div className="team-list position-relative overflow-hidden shadow rounded">
              {member.image != null ? (
                <LoadingImage
                  imageUri={member.image}
                  className="img-fluid float-left"
                />
              ) : (
                <LoadingImage
                  imageUri={"/static/assets/default-member.png"}
                  className="img-fluid float-left"
                />
              )}
              <div className="content float-right p-4">
                <h5 className="title mb-0">{member.name}</h5>
                <small className="text-muted">{member.role}</small>
              </div>
            </div>
          </div>
        ));
      case "software":
        return softwareMemberData.map((member: Member, index: number) => (
          <div key={index} className="col-lg-3 col-md-4 col-6 mt-4 pt-2">
            <div className="team-list position-relative overflow-hidden shadow rounded">
              {member.image != null ? (
                <LoadingImage
                  imageUri={member.image}
                  className="img-fluid float-left"
                />
              ) : (
                <LoadingImage
                  imageUri={"/static/assets/default-member.png"}
                  className="img-fluid float-left"
                />
              )}
              <div className="content float-right p-4">
                <h5 className="title mb-0">{member.name}</h5>
                <small className="text-muted">{member.role}</small>
              </div>
            </div>
          </div>
        ));
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="container text-left my-5 my-md-1"
        style={{ paddingTop: 150 }}
      >
        {pageReady ? (
          <>
            {canMap ? (
              <>
                <div className="mb-4">
                  <div className="row">
                    <div className="col-12 text-center">
                      <div className="section-title">
                        <h4 className="title ">Software Team</h4>
                        <p className="text-muted para-desc mx-auto mb-0">
                          Our Software Team pioneers innovation, transforming
                          ideas into robust digital solutions. With expertise in
                          coding and problem-solving, they craft seamless
                          experiences that propel our organization forward.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">{mapTeam("software")}</div>
                </div>
                <hr></hr>
                <div className="mb-4">
                  <div className="row">
                    <div className="col-12 text-center">
                      <div className="section-title">
                        <h4 className="title ">Business Team</h4>
                        <p className="text-muted para-desc mx-auto mb-0">
                          The driving force behind client acquisition and member
                          engagement. With strategic prowess and a passion for
                          connection, they fuel our organization's growth and
                          community spirit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">{mapTeam("business")}</div>
                </div>
                <hr></hr>
                <div className="mb-4">
                  <div className="row">
                    <div className="col-12 text-center">
                      <div className="section-title">
                        <h4 className="title ">Design Team</h4>
                        <p className="text-muted para-desc mx-auto mb-0">
                          The creative visionaries shaping our brand's identity.
                          With an eye for aesthetics and a flair for innovation,
                          they craft captivating visuals that elevate our
                          message and captivate our audience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">{mapTeam("design")}</div>
                </div>
              </>
            ) : (
              <div>
                Uh oh! Something went wrong with our request for data. Please
                refresh and try again!
              </div>
            )}
          </>
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border my-5"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Members;
