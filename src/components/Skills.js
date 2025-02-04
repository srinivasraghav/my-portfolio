// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-blue-100 py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
      <ul className="grid grid-cols-2 gap-4 text-lg">
        <li>Java 8/11</li>
        <li>Spring Boot</li>
        <li>Microservices Architecture</li>
        <li>RESTful APIs</li>
        <li>AWS (EC2, S3, Lambda)</li>
        <li>Docker & Kubernetes</li>
        <li>Angular & React</li>
        <li>MongoDB, MySQL, Oracle</li>
        <li>CI/CD with Jenkins, Bamboo, Git</li>
        <li>Agile Methodologies</li>
      </ul>
    </section>
  );
};

export default Skills;
