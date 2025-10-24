import Link from 'next/link';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function SocialMedia() {
    return (
        <div className='flex flex-col items-start justify-start text-neutral-navy w-full gap-3 md:gap-6'>
            <div className="text-lg lg:text-2xl outfit-bold text-neutral-navy">Connect with us</div>
            <div className='flex space-x-6 items-center justify-start w-full min-h-12'>
                <Link href="https://www.instagram.com/hackersmang" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={28} />
                </Link>
                <Link href="https://in.linkedin.com/in/hackerspace-mangaluru-bb5038313" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={28} />
                </Link>
                <Link href="https://x.com/hackersmang?lang=en" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                    <FaXTwitter size={28} />
                </Link>
                <Link href="https://www.youtube.com/@hackerspacemangaluru775" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube size={28} />
                </Link>
                <Link href="https://m.facebook.com/hackersmang/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook size={28} />
                </Link>
            </div>
        </div>
    )
}
