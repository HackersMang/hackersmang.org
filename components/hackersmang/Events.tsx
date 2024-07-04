import { EVENT_DETAILS } from "@/constants";
import Link from "next/link";

const Events = () => {
  return (
    <div className="col-span-2 flex flex-col justify-left items-start m-2 md:m-3 max-h-[700px]">
      <h3 className="text-[#9b9b9b] text-2xl font-bold mb-2">Events</h3>
      <div className="overflow-y-auto text-[#9b9b9b] no-scrollbar max-h-[700px] text-lg flex flex-col gap-2 w-full">
        {EVENT_DETAILS.map((event, index) => (
          <div key={index} className="overflow-hidden min-h-20 p-4 md:p-6 gap-1 my-1 bg-[#1d1d1c] rounded-xl">
            <div className="text-lg md:text-2xl lg:text-3xl font-bold">
              <Link href={"/ai-techverse"} className="view hover:text-[#d4e20b]">{event.title}</Link>
            </div>
            <p className="text-sm md:text-xl text-gray-30">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
