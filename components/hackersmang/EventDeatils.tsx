import { EVENT_DETAILS } from "@/constants";
import Image from "next/image";

const EVENT_IMAGES = [
  "/ai-techverse/cards/hero-card.png",
  "/ai-techverse/cards/hero-card.png",
  "/ai-techverse/cards/hero-card.png",
  "/ai-techverse/cards/hero-card.png",
  "/ai-techverse/cards/hero-card.png"
];

const EventDetails = () => {
  return (
    <div className="col-start-5 col-end-9 flex flex-col justify-left items-start m-2 md:m-3 max-h-[700px]">
      <h3 className="text-[#9b9b9b] text-2xl font-bold mb-2">Event Details</h3>
      <div className="overflow-y-auto text-[#9b9b9b] no-scrollbar max-h-[700px] text-lg flex flex-col gap-2 w-full">
        {EVENT_IMAGES.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={image}
              alt={`Event image ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-auto rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
