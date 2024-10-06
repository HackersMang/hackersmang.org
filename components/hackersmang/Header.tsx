import Image from "next/image"
import { HyperText } from "@/components/magicui/hyper-text";

const Header = () => {
    return (
        <header className="m-2 mt-2 lg:m-6 lg:mb-1 p-0 outline outline-[1.5px]">
            <div className="flex items-center justify-between h-16">
                {/* Logo Section */}
                <div className="h-full w-20 lg:w-32 flex justify-center items-center text-sm p-0">
                    <Image src="/hackerspace-mangalore-logo.PNG" alt="hackersmang-logo" width={48} height={48} className="rounded-full" />
                </div>

                {/* Title Section */}
                <div className="hidden flex-grow lg:flex justify-center items-center">
                    <h1 className="text-4xl outfit-bold">HACKERSPACE MANGALURU</h1>
                </div>

                {/* Menu Button with Outline */}
                <div className="h-full w-20 lg:w-32 flex justify-center items-center outline outline-[1.5px] text-sm p-0">
                    <HyperText
                        className="outfit-bold text-white cursor-pointer"
                        text="MENU"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header