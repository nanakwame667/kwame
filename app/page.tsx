import Image from "next/image";
import hubtel from "../public/images/hubtel.svg";
import hubtelsales from "../public/images/hubtel sales.svg";
import careforce from "../public/images/careforce.svg";
import zonesmockup from "../public/images/zonesmockup.svg";
import salesmockup from "../public/images/salesmockup.svg";
import caremockup from "../public/images/caremockup.svg";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-sans)] w-[70%] p-12 space-y-4">
      <div>
        <p className="font-medium italic">~Some of my works~ </p>
      </div>
      <section className="bg-[#EDFAF7] flex flex-col w-full rounded-3xl h-full p-6 space-y-6">
        <div className="flex items-center w-full justify-between ">
          <h1 className="font-semibold text-base">Zones Backoffice</h1>
          <Image src={hubtel} alt="hubtel" />
        </div>
        <div className="flex item-center w-full justify-between ">
          <div className="w-[50%] h-full flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-base text-[#757575]">
                Zones Backoffice is a portal that help businesses manage their
                inventory, help them manage their employees and merchants they
                work with. Order Performance can be tracked, relationship
                between the business and it’s merchants are fostered properly
                promoting profit maximization
              </p>
              <h1 className="font-medium">Role: Lead UX Designer</h1>
            </div>
            <div>
              <Button className="rounded-full" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-[50%] h-full flex items-center justify-end">
            <Image src={zonesmockup} alt="zonesmockup" />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 gap-6 w-full h-full">
        <section className="bg-[#ECEFFD] flex flex-col w-full rounded-3xl h-full p-6 space-y-6">
          <div className="flex items-center w-full justify-between">
            <h1 className="font-semibold text-base">Hubtel Sales</h1>
            <Image src={hubtelsales} alt="hubtel" />
          </div>
          <div className="flex item-center w-full justify-between ">
            <div className="w-[50%] h-full flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-base text-[#757575]">
                  Hubtel Sales connects you with a wider audience. By offering
                  delivery through our app, you can tap into a new customer base
                  and boost your business.
                </p>
                <h1 className="font-medium">Role: Lead UX Designer</h1>
              </div>
              <div>
                <Button className="rounded-full" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-[50%] h-full flex items-end justify-end">
              <Image src={salesmockup} alt="zonesmockup" />
            </div>
          </div>
        </section>
        <section className="bg-[#FFD7D5] flex flex-col w-full rounded-3xl h-full p-6 space-y-6">
          <div className="flex items-center w-full justify-between">
            <h1 className="font-semibold text-base">Careforce</h1>
            <Image src={careforce} alt="hubtel" />
          </div>
          <div className="flex item-center w-full justify-between ">
            <div className="w-[50%] h-full flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-base text-[#757575]">
                  Careforce allows riders enjoy immediate payouts after each
                  successful delivery—your hard work pays off right away! 
                </p>
                <h1 className="font-medium">Role: Lead UX Designer</h1>
              </div>
              <div>
                <Button className="rounded-full" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-[50%] h-full flex items-center justify-end">
              <Image src={caremockup} alt="zonesmockup" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
