import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  image: string;
}

const projects: Project[] = [
  {
    id: 'rehabify',
    title: 'Rehabify',
    description: 'Addiction Recovery Platform',
    longDescription:
      'A comprehensive platform aimed at improving addiction recovery services with features for tracking progress and connecting with support groups.',
    tags: ['TypeScript', 'React', 'Node.js', 'Tailwind-css', 'Go'],
    links: {
      github: 'https://github.com/Ratnesh-Team/Rehabify',
      live: 'https://rehabify.ratn.tech/',
    },
    image: '/rehabify.png',
  },
  {
    id: 'secret-operator',
    title: 'Secret Operator',
    description: 'Secure Key Management',
    longDescription:
      'A Kubernetes operator for managing secrets and sensitive information with enhanced security protocols.',
    tags: ['Go', 'Kubernetes', 'Security'],
    links: {
      github: 'https://github.com/initializ/secrets-operator',
    },
    image: '/operator.png',
  },
  {
    id: 'unzip-n-open',
    title: 'Unzip N Open',
    description: 'CLI File Management Tool',
    longDescription:
      'A command-line interface tool that simplifies file management for developers with intuitive commands and efficient operations.',
    tags: ['Go', 'CLI'],
    links: {
      github: 'https://github.com/ratnesh-maurya/Unzip_N_Open',
    },
    image: '/cli.png',
  },
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    description: 'Real-time Exchange Rates',
    longDescription:
      'A currency converter application that provides real-time exchange rates and supports multiple currencies for accurate conversions.',
    tags: ['TypeScript', 'React', 'Tailwind-css'],
    links: {
      github: 'https://github.com/ratnesh-maurya/currency-converter',
      live: 'https://currency.ratn.tech/',
    },
    image: '/currency-converter.png',
  },
];

function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto   px-2 font-sans shadow-lg bg-white/85 dark:bg-gray-950/70 shadow-black  backdrop-blur-2xl rounded-xl mr-2 ml-2 p-2 mb-16  sm:p-6   sm:mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center sm:text-start ">
          <h1 className="text-4xl font-bold text-teal-600 dark:text-gray-200 ">Projects 👨‍💻</h1>
        </div>

        <section className="py-10" id="projects">
          <div className="max-w-3xl mx-auto px-2">
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="pb-6 border-b border-gray-300 outline-teal-600 outline  outline-offset-0 outline-2 p-4 rounded-xl dark:border-gray-700">
                  <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-teal-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-md font-medium text-teal-800 dark:text-teal-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 dark:text-orange-500 flex items-center gap-1 group"
                      >
                        GitHub
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 dark:text-orange-500 dark:hover:text-orange-600 flex items-center gap-1 group"
                      >
                        Live Demo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectsPage;