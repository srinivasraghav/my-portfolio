// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Yoga Sai Raghav Kodaganti</h2>
        <p className="text-xl mb-6">A Full Stack Developer specializing in Java, Spring Boot, and Microservices</p>
        <p className="text-lg">
          I build scalable applications with a focus on cloud technologies like AWS and containerization tools like Docker and Kubernetes.
        </p>
      </div>
    </section>
  );
};

export default Home;
