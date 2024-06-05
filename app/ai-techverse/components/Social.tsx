import SocialButton from "./SocialButton"
import { SOCIAL_LINKS } from "@/app/ai-techverse/constants"


const Social = () => {

    // Splitting the SOCIALS array into two arrays, each containing two buttons
    const firstColumn = SOCIAL_LINKS.slice(0, 2);
    const secondColumn = SOCIAL_LINKS.slice(2, 4);

    return (
        <div className="lg:flex-1 nav-link-outline rounded-3xl md:col-span-2 md:grid md:grid-cols-2 w-full text-left">
            <div className="md:col-span-2 nav-link-outline-bottom rounded-t-3xl pt-3 mx-4">
                <div className="grid grid-cols-[auto_1fr] items-center gap-1">
                    <span className="text-sm">Connect</span>
                    <img src="/2024-june/arrow-up-right.svg" alt="Share Icon" width={10} className="buttonIcon justify-self-start h-3.5 w-3.5 animate-pulse" />
                </div>
                <h3 className="text-2xl text-[#d4e20b]">Popular Space</h3>
            </div>
            <div className="md:col-span-1 m-2 md:mr-1 space-y-2">
                <SocialButton buttons={firstColumn} />
            </div>
            <div className="md:col-span-1 m-2 md:ml-1 space-y-2">
                <SocialButton buttons={secondColumn} />
            </div>
        </div>
    )
}

export default Social
