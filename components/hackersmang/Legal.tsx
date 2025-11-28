import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

export default function Legal() {
    return (
        <div className='flex flex-col items-start justify-start text-neutral-navy w-full gap-3 md:gap-6'>
            <div className="text-lg lg:text-2xl outfit-bold text-neutral-navy">Legal</div>
            <div className="text-neutral-navy outfit-extra-light flex flex-col items-start justify-start w-full gap-3 md:gap-6">
                <Link 
                    href="/cofc" 
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref 
                    className="text-neutral-navy hover:text-neutral-navy hover:underline transition-colors flex flex-row items-center justify-start w-full gap-3"
                >
                    <span>Code of Conduct</span>
                    <GoArrowUpRight size={16} className="text-neutral-navy" />
                </Link>
            </div>
        </div>
    );
}

