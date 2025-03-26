
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";




const tech = {
  "Programming Languages": "Golang, Typescript, Python, Elixir, C++",
  Frameworks: "Go-Gin, NextJS, Tailwind, React, Flask, Phoenix",
  Database: "Postgres, MongoDB, Redis",
  "Platform/Cloud": " AWS, Kubernetes, Terraform, Docker",
}
const experiences = [
  {
    period: "08/2023 — Present",
    role: "Software Development Engineer",
    company: "@ initializ.ai ",
    link: "https://www.linkedin.com/company/initializ/about/",
  },
  {
    period: "03/2023 — 07/2023",
    role: "Software Developer Intern",
    company: "@ EMSEC Pvt. Ltd.",
    link: "https://www.linkedin.com/company/emsec/about/",
  },

]

const blogs = [
  {
    title: "Optimizing Memory Layout in Go: A Deep Dive into Struct Design",
    slug: "Optimizing-Memory-Layout-in-Go-A-Deep-Dive-into-Struct-Design",
    date: "Jan 25, 2025",
  },
  {
    title: "Easily Deploy Your Nanoc Website to S3 with GitHub Actions",
    slug: "Easily-Deploy-Your-Nanoc-Website-to-S3-with-GitHub-Actions",
    date: "Nov 23, 2024",
  },
  {
    title: "Architectural Design for a Ride App such as OLA, UBER, RAPIDO",
    slug: "Architectural-Design-for-a-Ride-App-such-as-OLA-UBER-RAPIDO",
    date: "Jul 30, 2024",
  }
];

const certificates = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/2d49d590-5c98-4e64-915b-e9ca3e50ec62",
  },
  {
    title: "Developing Secure Software",
    issuer: "The Linux Foundation",
    link: "https://www.credly.com/badges/af06b77a-d878-48be-85a1-ea37bb893aaf/linked_in_profile",
  },
  {
    title: "GitHub Copilot",
    issuer: "Github",
    link: "https://www.credly.com/badges/0feb784b-3712-41ad-8666-8e3b01ed17f8/linked_in_profile",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto  px-2 shadow-2xl dark:bg-gray-950/70 shadow-black  backdrop-blur-xl rounded-xl mr-2 ml-2 p-2  sm:p-6   sm:mx-auto">


      <div >
        <h1 className="text-3xl font-bold text-center sm:text-start text-teal-600 dark:text-gray-200   ">Ratnesh Maurya</h1>
      </div>
      <div className="px-2">

        <section className="py-6">
          <h2 className="text-3xl font-bold font-merriweather mb-6">Hey there! 👋</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I am a <span className="font-semibold">Software Development Engineer</span>, passionate about backend development and cloud-native technologies. Currently I am working at {" "}
            <a
              href="https://www.linkedin.com/company/initializ/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-bold"
            >
              Initializ
            </a>
            , where  I collaborate with <a
              href="https://www.loannetwork.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-bold"
            >
              Loannetwork
            </a> to enhance their digital lending platform by integrating services like NSDL, Aadhaar, and PAN verification. I also built a secure Key Management System with client-side encryption and designed a Kubernetes Controller. Previously, I interned at{" "}
            <a
              href="https://www.linkedin.com/company/emsec/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-bold"
            >
              EMSEC Pvt. Ltd.
            </a>
            , developing scalable RESTful APIs and data scraping frameworks.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Find me on</span>
            <a href="https://x.com/ratnesh_maurya_"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-orange-600 font-bold">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/ratnesh-maurya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 font-bold">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/ratnesh-maurya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 font-bold">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-40 flex-shrink-0 text-muted-foreground">{exp.period}</div>
                <div className="flex flex-col md:flex-row items-start gap-2">
                  <div className="font">{exp.role}</div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline hover:text-orange-700"
                  >
                    {exp.company}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="py-6">
          <h2 className="text-2xl font-bold mb-6">Technologies I have worked with</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            {Object.entries(tech).map(([category, items]) => (
              <div key={category} className="flex flex-col md:flex-row items-start gap-2">
                <h3 className="font-semibold mb-1 underline ">{category}:</h3>
                <p>{items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-6">Recent Blogs</h2>
          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-2">
                <span className="text-muted-foreground">{blog.date}</span>
                <Link href={`/blogs/${blog.slug}`}>
                  <p className="underline hover:decoration-teal-600 hover:dark:decoration-orange-400">{blog.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <div key={index} className="flex gap-4 items-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:decoration-teal-600 hover:dark:decoration-orange-400"
                >
                  {cert.title}
                </a>
                <span className="text-muted-foreground">by {cert.issuer}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>

  );
}