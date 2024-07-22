import React from "react";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="min-h-screen px-8 py-12 bg-light-grey">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-primary">
          About SkyCast
        </h1>
        <p className="text-lg text-grey-navy">
          Learn more about SkyCast and how we bring you the latest weather
          updates.
        </p>
      </header>
      <section className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-navy">Our Mission</h2>
        <p className="mb-6 text-lg text-grey-navy">
          SkyCast is dedicated to providing accurate and up-to-date weather
          forecasts to help you stay prepared for the day. Whether it's planning
          your daily activities or preparing for severe weather, we aim to give
          you the information you need to stay safe and informed.
        </p>
        <h2 className="mb-6 text-3xl font-bold text-navy">Features</h2>
        <ul className="mb-6 text-lg list-disc list-inside text-grey-navy">
          <li>Real-time weather updates</li>
          <li>Detailed temperature and precipitation forecasts</li>
          <li>Weather alerts and notifications</li>
          <li>User-friendly interface</li>
        </ul>
        <h2 className="mb-6 text-3xl font-bold text-navy">Our Team</h2>
        <p className="mb-6 text-lg text-grey-navy">
          Our team of experienced meteorologists and software developers work
          around the clock to ensure that SkyCast provides the most accurate and
          timely weather information available. We are passionate about weather
          and dedicated to helping you stay informed.
        </p>
        <h2 className="mb-6 text-3xl font-bold text-navy">Contact Us</h2>
        <p className="mb-6 text-lg text-grey-navy">
          If you have any questions, feedback, or suggestions, we would love to
          hear from you. Please feel free to{" "}
          <Link to="/contact" className="text-primary hover:underline">
            contact us
          </Link>
          .
        </p>
      </section>
      <footer className="mt-12 text-center">
        <Link to="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </footer>
    </div>
  );
};
