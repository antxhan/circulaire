import Link from "next/link";
import Wrapper from "../_components/Wrapper";
import Image from 'next/image';

export default function Footer() {
  return (
      <footer>
        <Wrapper fullWidthComponent className="flex justify-center" >
            <div className="w-1/2 flex flex-col justify-between gap-8">
                <div className="h-[8rem] w-[8rem] bg-gray-500">animation</div>
                <div className="flex gap-2 flex-col">
                    <Link 
                        href="https://www.linkedin.com/company/circulaire/"
                        target="_blank" 
                        rel="noopener noreferrer"
                    > 
                        <Image
                            src="socials/linkedin.svg"
                            alt="LinkedIn"
                            width={20}
                            height={20}
                            // style={{ filter: 'invert(1)' }} // add it when use dark mode
                        />
                    </Link>
                    <span className="text-xs">{`© ${new Date().getFullYear()} Circulaire. All rights reserved.`}</span>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between gap-8">
                <div className="h-1/2 flex justify-end gap-40">
                    <div className="flex flex-col ">
                        <h4 className="font-bold font-accent">Product</h4>
                        <nav className="flex flex-col gap-1">
                            <Link href="/" className="text-xs"> Features</Link>
                            <Link href="/" className="text-xs"> API</Link>
                        </nav>

                    </div>
                    <div className="flex flex-col " >
                        <h4 className="font-bold font-accent">Company</h4>
                        <nav className="flex flex-col gap-1">
                            <Link href="/"className="text-xs"> About</Link>
                            <Link href="/"className="text-xs"> Press</Link>
                        </nav>
                    </div>
                </div>
                <div className="h-1/2 flex justify-end align-bottom">
                    <div className="w-1/2 bg-pink-400">
                        Toggle
                    </div> 
                </div>
            </div>
        </Wrapper>
      </footer>
  );
}
