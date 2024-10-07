import Image from "next/image";
import { HyperText } from "@/components/magicui/hyper-text";
import Link from "next/link";

const Header = () => {
    return (
        <header className="m-2 mt-2 lg:m-6 lg:mb-1 p-0 outline outline-[1.5px]">
            <div className="flex items-center justify-between h-16">
                {/* Logo Section */}
                <div className="h-full w-20 lg:w-32 flex justify-center items-center text-sm p-0 cursor-pointer">
                    <Link href="/" passHref>
                        <Image
                            src="/hackerspace-mangalore-logo.PNG"
                            alt="hackersmang-logo"
                            width={48}
                            height={48}
                            className="rounded-full cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Title Section */}
                <div className="hidden flex-grow lg:flex justify-center items-center">
                    <h1 className="text-4xl outfit-bold">HACKERSMANG</h1>
                </div>

                {/* Menu Button with Link */}
                <div className="h-full w-20 lg:w-32 flex justify-center items-center outline outline-[1.5px] text-sm p-0">
                    <Link href="/menu" passHref>
                        <HyperText
                            className="outfit-bold text-white cursor-pointer"
                            text="MENU"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
