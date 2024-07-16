import { ButtonLink } from "@/components/button";
import { Circle, Sun } from "lucide-react";

export const HomePage = () => {
  return (
    <div>
      <section className="bg-[url('/hero-bg.png')] grid grid-cols-2 gap-5 py-24 px-10 min-h-[35rem]">
        <div className="self-center">
          <p className="font-semibold text-primary">Weather and Forecast</p>
          <h1 className="my-6 text-5xl font-extrabold">
            Daily <span>Weather</span> Insights
          </h1>
          <p className="text-2xl font-semibold ">
            Get today&apos;s weather forecast with the latest updates on
            temperature, precipitation, and more
          </p>

          <div className="mt-8">
            <ButtonLink />
          </div>
        </div>
        <div className="">
          <div className="max-w-[80%] bg-hero-linear-gradient shadow-xl rounded-xl py-10 px-5">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold ">Kumasi</p>
              <Sun className="text-primary animate-spin-slow" size={90} />
            </div>
            <p className="text-3xl font-bold text-center">
              Today,{" "}
              {new Date().toLocaleString("en-US", {
                day: "2-digit",
                month: "long",
              })}
            </p>

            <div className="relative">
              <h1 className="my-6 font-extrabold text-center text-8xl text-primary">
                24
              </h1>
              <Circle
                strokeWidth={4}
                size={15}
                className="absolute top-0 font-bold right-40 text-primary"
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-center">Sunny</p>
            </div>
            <div className="flex justify-center gap-4 my-6 text-xl font-semibold divide-x-2 divide-black">
              <p>19 km/h </p>
              <p className="pl-3">Windy</p>
            </div>
            <div className="flex justify-center gap-4 my-6 text-xl font-semibold divide-x-2 divide-black">
              <p>Hum </p>
              <p className="pl-3">22%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
