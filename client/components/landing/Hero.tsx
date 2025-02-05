import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-16 pb-32 md:gap-28 lg:py-24 xl:flex-row">
      <div className="relative flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight tracking-tight">
        ShrimpSense
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-900 leading-snug tracking-normal mt-2">
         Smarter farming, healthier shrimp.

        </h2>
        <p className="mt-6 text-lg text-gray-500 xl:max-w-[520px]">
          Optimize shrimp health, growth, and disease prevention with our AI-driven water quality monitoring system. 
          Ensure a sustainable and efficient farming experience with real-time insights.
        </p>
        <div className="mt-5 flex flex-col w-full gap-4 sm:flex-row">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="flex items-center gap-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out">
            <Image src="/play.svg" alt="play" width={16} height={16} />
            Learn More
          </Button>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col xl:w-1/2 gap-6">
        <Card className="w-full rounded-3xl bg-white border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
          <CardHeader className="p-6 bg-blue-50 rounded-t-3xl">
            <p className="text-blue-800 text-2xl font-semibold">Farm Statistics</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <p className="text-gray-500">pH Level</p>
                <p className="text-blue-800 text-2xl font-semibold">7.5</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">Temperature</p>
                <p className="text-blue-800 text-2xl font-semibold">28°C</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">Oxygen Level</p>
                <p className="text-blue-800 text-2xl font-semibold">6.3 mg/L</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">Salinity</p>
                <p className="text-blue-800 text-2xl font-semibold">15 ppt</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6">
            <Badge variant="outline" className="bg-blue-600 text-white">
              Optimal
            </Badge>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
