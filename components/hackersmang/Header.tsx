import Image from "next/image"

const Header = () => {
    return (
        <section className="grid grid-cols-4 lg:grid-cols-6 gap-1 md:gap-4 justify-center items-center outline outline-1 outline-gray-800">
            <div className="col-start-1 col-end-2 flex justify-center items-center m-2 md:m-3">
                <Image src="/hackersmang-logo.jpg" alt="hackersmang-logo" width={75} height={75} className="rounded-full m-2 w-12 md:w-16" />
            </div>
            <div className="col-end-5 col-span-3 lg:col-end-7 lg:col-span-3 flex justify-center items-center font-extrabold text-[22px] md:text-[44px] lg:text-5xl text-[#d4e20b] m-2 md:m-3">
                Hackerspace Mangaluru
            </div>
        </section>
    )
}

export default Header