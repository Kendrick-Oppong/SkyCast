import { Disc } from "lucide-react";

export const AboutPage = () => {
  return (
    <>
      <section className="bg-[url('/about-us.png')] h-96">
        <h1 className="flex items-center justify-center h-full text-4xl font-bold text-primary bg-black/50">
          About
        </h1>
      </section>

      <section className="p-2 mx-auto md:p-5 md:max-w-6xl ">
        <div className="grid grid-cols-1 gap-8 p-3 px-5 mb-12 border rounded-lg shadow-lg border-secondary md:grid-cols-2">
          <div className="self-center pt-5 md:pt-0">
            <h2 className="mb-6 text-3xl font-extrabold text-primary ">
              Our Mission
            </h2>
            <p className="mb-6">
              SkyCast is dedicated to providing accurate and up-to-date weather
              forecasts to help you stay prepared for the day. Whether it's
              planning your daily activities or preparing for severe weather, we
              aim to give you the information you need to stay safe and
              informed.
            </p>
          </div>
          <div>
            <img
              src="/mission.svg"
              alt="Our Mission"
              loading="lazy"
              className=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 p-3 px-5 mb-12 border rounded-lg shadow-lg md:grid-cols-2 border-secondary">
          <div>
            <img
              src="/features.svg"
              alt="Features"
              className=""
              loading="lazy"
            />
          </div>
          <div className="self-center">
            <h2 className="mb-6 text-3xl font-bold text-primary text text-navy">
              Features
            </h2>
            <ul className="mb-6 space-y-3 [&>li]:flex [&>li]:items-center [&>li]:gap-3">
              <li>
                <Disc className="text-primary" /> Real-time weather updates
              </li>
              <li>
                <Disc className="text-primary" /> Detailed temperature and
                precipitation forecasts
              </li>
              <li>
                <Disc className="text-primary" /> Weather alerts and
                notifications
              </li>
              <li>
                <Disc className="text-primary" /> User-friendly interface
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
