import { ButtonLink } from "@/components/button";
import { Circle, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const HomePage = () => {
  return (
    <div>
      <section className="bg-[url('/hero-bg.png')] dark:bg-[url('/hero-bg-2.png')] grid grid-cols-1 md:grid-cols-2 gap-5 py-24 px-5 md:px-10 min-h-dvh bg-cover bg-no-repeat">
        <div className="self-center">
          <Badge className="rounded-2xl">
            <p className="font-semibold xl:text-2xl">Weather and Forecast</p>
          </Badge>
          <h1 className="my-6 text-5xl font-extrabold xl:text-6xl">
            Daily <span>Weather</span> Insights
          </h1>
          <p className="font-semibold xl:text-2xl ">
            Get today&apos;s weather forecast with the latest updates on
            temperature, precipitation, and more
          </p>

          <div className="mt-8">
            <ButtonLink />
          </div>
        </div>
        <div className="self-center mt-10 md:mt-0">
          <div className="md:max-w-[80%] bg-hero-linear-gradient shadow-xl rounded-xl py-10 px-5">
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
              <h1 className="relative p-3 mx-auto my-6 font-extrabold text-8xl text-primary max-w-fit">
                24
                <Circle
                  strokeWidth={4}
                  size={15}
                  className="absolute top-0 right-0 font-bold text-primary"
                />
              </h1>
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
