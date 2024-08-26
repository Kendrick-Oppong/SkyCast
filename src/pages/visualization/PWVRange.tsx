import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useWeatherAnalysis } from "@/hooks/useWeatherAnalysis";

export const PWVRange = () => {
  const { daily, weekly, monthly } = useWeatherAnalysis();

  return (
    <Tabs defaultValue="daily" className="my-10 text-center">
      <TabsList className="mx-auto border border-primary">
        <TabsTrigger value="daily">Daily</TabsTrigger>
        <TabsTrigger value="weekly">Weekly</TabsTrigger>
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
      </TabsList>

      <TabsContent
        value="daily"
        className="flex flex-col items-center justify-center"
      >
        <Carousel className="w-full max-w-sm mt-2 sm:max-w-md lg:max-w-2xl">
          <CarouselContent className="-ml-1">
            {daily.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-2 my-auto md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2 border rounded-sm border-primary ">
                  <p className="font-semibold">{data.weather}</p>
                  <p>{data.date}</p>
                  <p>PWV: {data.pwv} mm</p>
                  <p>ZTD: {data.ztd} mm</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </TabsContent>

      <TabsContent
        value="weekly"
        className="flex flex-col items-center justify-center"
      >
        <Carousel className="w-full max-w-sm mt-2 sm:max-w-md lg:max-w-2xl">
          <CarouselContent className="-ml-1">
            {weekly.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-2 my-auto md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2 border rounded-sm border-primary ">
                  <p className="font-semibold">{data.weather}</p>
                  <p>{data.week}</p>
                  <p>PWV: {data.pwv} mm</p>
                  <p>ZTD: {data.ztd} mm</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </TabsContent>

      <TabsContent
        value="monthly"
        className="flex flex-col items-center justify-center"
      >
        <Carousel className="w-full max-w-sm mt-2 sm:max-w-md lg:max-w-2xl">
          <CarouselContent className="-ml-1">
            {monthly.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-2 my-auto md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2 border rounded-sm border-primary ">
                  <p className="font-semibold">{data.weather}</p>
                  <p>{data.month}</p>
                  <p>PWV: {data.pwv} mm</p>
                  <p>ZTD: {data.ztd} mm</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="relative bottom-0">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </TabsContent>
    </Tabs>
  );
};
