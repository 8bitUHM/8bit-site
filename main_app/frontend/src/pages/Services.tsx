import * as React from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const Services = () => {
  return (
    <>
      <div
        className="container sm:mx-auto "
        style={{ paddingTop: 135 }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="my-3">
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Static website
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our static website service offers clients a sleek and polished
              online presence that caters to the client's needs. With the help
              of our organization design team and the use of cutting-edge
              industry-standard technologies, we create static websites that
              showcase your brand and message effectively.
            </p>
          </div>

          <div className="my-3">
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Dynamic web-app
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Utilizing the latest in web development frameworks and
              technologies, we build web applications that will engage your
              audience. With a powerful backend driving dynamic content and an
              intuitive administrator portal for easy content management, we
              empower you to keep your website fresh and relevant.
            </p>
          </div>
        </div>

        <div className="my-3">
          <h3 className="mb-2 text-xl font-bold dark:text-white">
            Infrastructure
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Along with the rest of our services, we handle site deployment and
            hosting on platforms like Vercel or AWS. Whether you're launching a
            new static website or upgrading to a dynamic web application, we
            take care of the infrastructure from deployment to domain
            management, allowing you to focus on what matters most.
          </p>
        </div>
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Services />);
