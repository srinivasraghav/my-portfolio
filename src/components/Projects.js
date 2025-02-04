// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">Weather Station Project</h3>
          <p>
            Designed and implemented an IoT-based weather station using Raspberry Pi Pico W. Integrated real-time weather data 
            into a web dashboard and applied microservices architecture for efficient data processing.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Sentiment Analysis Project</h3>
          <p>
            Developed a machine learning-based sentiment analysis system to predict the sentiment of movie reviews using Python, 
            TensorFlow, and NLP techniques.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Microservices in Cloud (AWS)</h3>
          <p>
            Built a cloud-native microservices-based application on AWS using Spring Boot, Lambda, and API Gateway. Implemented 
            automated deployments with Jenkins and Docker.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
