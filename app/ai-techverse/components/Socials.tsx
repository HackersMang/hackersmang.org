import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function SocialDock() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Dock>
        <DockIcon>
          <Icons.gitHub className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <Icons.facebook className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <Icons.x className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <Icons.youtube className="h-6 w-6" />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <Image src="/social/github.svg" alt="Github" width={24} height={24}/>
  ),
  facebook: (props: IconProps) => (
    <Image src="/social/facebook.svg" alt="Facebook" width={24} height={24}/>
  ),
  twitter: (props: IconProps) => (
    <Image src="/social/twitter.svg" alt="Twitter" width={24} height={24}/>
  ),
  youtube: (props: IconProps) => (
    <Image src="/social/youtube.svg" alt="YouTube" width={24} height={24}/>
  ),
  x: (props: IconProps) => (
    <Image src="/social/x.svg" alt="X" width={24} height={24}/>
  )
};
