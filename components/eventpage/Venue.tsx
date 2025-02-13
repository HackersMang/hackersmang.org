import { VenueInfoProps } from "@/lib/types";
import { formatEventDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Venue = ({ locationName, locationUrl, happeningOn }: VenueInfoProps): JSX.Element => {
    const formattedDate = formatEventDate(happeningOn.toUTCString());

    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-2">
            <h3 className="text-xl lg:text-2xl font-light text-primary outfit-extra-light">Happening On</h3>
            <p className="w-full h-full p-4 text-lg md:text-xl outfit-extra-light text-neutral">
                {formattedDate} at{" "}
                <Link href={locationUrl} target="_blank" rel="noopener noreferrer" className="underline">
                    {locationName}
                </Link>.
            </p>
        </div>
    );
};

export default Venue;
