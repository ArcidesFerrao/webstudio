export const ProjectCard = ({ title, description, tech, link }: any) => (
  <div className="border p-4 rounded-md shadow-md">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    <p className="text-xs mt-2 text-gray-400">{tech}</p>
    {link && (
      <a href={link} className="text-blue-500 mt-2 block">
        View Live
      </a>
    )}
  </div>
);
