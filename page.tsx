'use client';
import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <motion.section
    className="mb-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-semibold mb-4 border-b pb-2">{title}</h2>
    {children}
  </motion.section>
);

const data = {
  name: "Prakhar Jauhari",
  role: "Software Developer | Java | Spring Boot | React",
  email: "jauhari.prakhar2001@gmail.com",
  linkedin: "https://linkedin.com/in/jauhari-prakhar",
  education: [
    "Jaypee Institute of Information and Technology - B.Tech CSE (7.2 CGPA)",
    "DPS Ghaziabad - Class 12th (89%)",
    "St Paul’s Academy - Class 10th (91%)"
  ],
  experience: [
    {
      company: "Tata Consultancy Services",
      role: "Software Developer",
      date: "June 2024 – Present",
      points: [
        "Developed modules using Spring MVC, JSP, Angular in a metadata-driven architecture.",
        "Built REST APIs, transformed Java objects to JSON, and optimized SQL queries.",
        "Scheduled batch jobs and collaborated across teams to enhance application performance."
      ]
    }
  ],
  projects: [
    {
      name: "Employee Management System",
      tech: "Java Spring Boot, React, MySQL",
      details: [
        "CRUD operations with Spring Data JPA and RESTful API.",
        "Postman for API testing, Axios for backend API calls."
      ]
    },
    {
      name: "Hospital System",
      tech: "JSP, Servlets, JDBC",
      details: [
        "Role-based login panels and real-time updates using JSP sessions.",
        "Used JDBC to interact with MySQL database."
      ]
    }
  ],
  achievements: [
    "Event-Driven Microservices, Mastering System Design (Udemy)",
    "200+ problems solved on Leetcode",
    "Mastering Algorithms 2023 by Coding Minutes"
  ],
  skills: {
    languages: "Java, C++, HTML/CSS, SQL",
    tools: "Spring Boot, Spring MVC, DBMS, OOPs, Java Collections"
  }
};

export default function Portfolio() {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto space-y-10 text-gray-800 dark:text-gray-100">
      <header className="text-center space-y-2">
        <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          {data.name}
        </motion.h1>
        <p className="text-xl">{data.role}</p>
        <div className="flex justify-center gap-6 pt-2">
          <a href={`mailto:${data.email}`} className="flex items-center gap-2 text-blue-500 hover:underline">
            <Mail /> Email
          </a>
          <a href={data.linkedin} className="flex items-center gap-2 text-blue-500 hover:underline">
            <Linkedin /> LinkedIn
          </a>
        </div>
      </header>

      <Section title="Education">
        <ul className="list-disc list-inside space-y-1">
          {data.education.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </Section>

      <Section title="Experience">
        {data.experience.map((exp, i) => (
          <div key={i} className="mb-6">
            <p className="font-semibold">{exp.company} - {exp.role} ({exp.date})</p>
            <ul className="list-disc list-inside ml-4">
              {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Projects">
        {data.projects.map((proj, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">{proj.name}</p>
            <p className="text-sm text-gray-500">{proj.tech}</p>
            <ul className="list-disc list-inside ml-4">
              {proj.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Achievements">
        <ul className="list-disc list-inside">
          {data.achievements.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </Section>

      <Section title="Technical Skills">
        <p><strong>Languages:</strong> {data.skills.languages}</p>
        <p><strong>Frameworks & Tools:</strong> {data.skills.tools}</p>
      </Section>

      <footer className="text-center pt-10 border-t mt-10 text-sm text-gray-500">
        Designed by Prakhar Jauhari • © 2025
      </footer>
    </main>
  );
}