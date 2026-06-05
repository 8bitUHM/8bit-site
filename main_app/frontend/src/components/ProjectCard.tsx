import * as React from "react";
import LoadingImage from "./LoadingImage";

interface Tag {
  tag_name: string;
}

export interface ProjectCardProps {
  name: string;
  description: string;
  github_link: string;
  deploy_link: string;
  client: string;
  paid_client_project: boolean;
  in_development: boolean;
  image: string | null;
  tags: Tag[];
  index?: number;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  github_link,
  deploy_link,
  client,
  paid_client_project,
  in_development,
  image,
  tags,
  index = 0,
  featured = false,
}) => {
  const imageHeight = featured ? "h-80 sm:h-96" : "h-72 sm:h-80";

  const imageEl = (
    <LoadingImage
      imageUri={image ?? "/static/main_app/assets/default-member.png"}
      className={`w-full ${imageHeight} object-cover group-hover:scale-105 transition-transform duration-500`}
    />
  );

  return (
    <div
      className={`group card-pop card-pop-hover overflow-hidden animate-slide-up flex flex-col ${featured ? "lg:col-span-2" : ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        {deploy_link ? (
          <a href={deploy_link} target="_blank" rel="noreferrer" className="block">
            {imageEl}
          </a>
        ) : (
          imageEl
        )}
        {client && (
          <div className={`absolute top-4 left-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wide rounded-full shadow-pop ${paid_client_project ? "bg-lime-500 text-white" : "bg-white text-gray-900"}`}>
            {paid_client_project ? "Paid Client" : "Client Project"}
          </div>
        )}
        {in_development && (
          <div className="absolute top-4 right-4 bg-sunset-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide rounded-full shadow-pop">
            In Dev
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {deploy_link ? (
          <a href={deploy_link} target="_blank" rel="noreferrer" className="block mb-2 group/link">
            <h3 className={`font-display font-bold text-gray-900 dark:text-white group-hover/link:text-primary-600 dark:group-hover/link:text-primary-400 transition-colors ${featured ? "text-3xl" : "text-2xl"}`}>
              {name}
            </h3>
          </a>
        ) : (
          <h3 className={`font-display font-bold text-gray-900 dark:text-white mb-2 ${featured ? "text-3xl" : "text-2xl"}`}>{name}</h3>
        )}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>
        {client && (
          <p className="text-sm text-primary-700 dark:text-primary-300 mb-4 font-bold">
            Built for {client}
          </p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, tagKey) => (
              <span
                key={tagKey}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm bg-primary-600"
              >
                {tag.tag_name}
              </span>
            ))}
          </div>
        )}
        <a
          href={github_link}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center justify-center w-full px-4 py-3 text-sm font-bold text-white bg-gradient-cool rounded-full hover:-translate-y-0.5 transition-transform duration-200 shadow-pop-accent"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
