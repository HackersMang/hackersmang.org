import Link from 'next/link';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function SocialMedia () {
    return (
        <div className='mt-4 flex flex-col lg:flex-row space-x-3 justify-center text-center p-4 text-neutral'>
            <div className="text-lg pb-2 lg:pb-0 font-semibold text-neutral">Connect with us</div>
            <div className='flex justify-center lg:justify-start space-x-6'>
                <Link href="https://www.instagram.com/hackersmang" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-secondary transition">
                    <FaInstagram size={24} />
                </Link>
                <Link href="https://in.linkedin.com/in/hackerspace-mangaluru-bb5038313" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-secondary transition">
                    <FaLinkedin size={24} />
                </Link>
                <Link href="https://x.com/hackersmang?lang=en" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-secondary transition">
                    <FaXTwitter size={24} />
                </Link>
                <Link href="https://www.youtube.com/@hackerspacemangaluru775" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-secondary transition">
                    <FaYoutube size={24} />
                </Link>
                <Link href="https://m.facebook.com/hackersmang/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-secondary transition">
                    <FaFacebook size={24} />
                </Link>
            </div>
        </div>
    )
}
