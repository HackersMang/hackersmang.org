import Image from "next/image";

export const Hero = () => {
    return (
        <section className="grid grid-cols-4 lg:grid-cols-8 gap-1 md:gap-4 outline outline-1 outline-gray-800 mx-4 my-2 min-h-[100px] max-h-[200px]">
            <div className="col-start-1 col-end-3 flex flex-col justify-left items-start m-2 md:m-3 max-h-[200px]">
                <h3 className="text-[#9b9b9b] text-2xl font-bold mb-2">About</h3>
                <div className="overflow-y-auto text-[#9b9b9b]">
                    <p>
                        We use this internally for our col-span-* utilities. Note that since this configures the grid-column shorthand property directly, we include the word span directly in the value name, it’s not baked into the class name automatically. That means you are free to add entries that do whatever you want here — they don’t just have to be span utilities.
                    </p>
                    <p>
                        If you need to use a one-off grid column value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
                    </p>
                </div>
                <p>
                    We use this internally for our col-span-* utilities. Note that since this configures the grid-column shorthand property directly, we include the word span directly in the value name, it’s not baked into the class name automatically. That means you are free to add entries that do whatever you want here — they don’t just have to be span utilities.
                </p>
                <p>
                    If you need to use a one-off grid column value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.                </p>
            </div>
            <div className="col-start-3 col-end-5 flex justify-left items-start m-2 md:m-3">
                <h3 className="text-[#9b9b9b] text-2xl font-bold mb-2">Events</h3>
            </div>
            <div className="col-start-5 col-end-9 flex justify-left items-start font-extrabold text-[22px] md:text-[44px] lg:text-5xl text-[#d4e20b] m-2 md:m-3">
                <h3 className="text-[#9b9b9b] text-2xl font-bold mb-2">Event Details</h3>
            </div>
        </section>
    );
};

export default Hero;
