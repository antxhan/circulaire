import Link from "next/link";
import Section from "../_components/Section";
import Image from 'next/image';

export default function Footer() {
  return (
    <Section>
      <footer className="flex justify-center h-[20rem] py-8">
        <div className="w-1/2 flex flex-col justify-between">
            <div className="h-[8rem] w-[8rem] bg-gray-500">animation</div>
            <div className="flex gap-4 flex-col">
                <div className="flex gap-2">
                    <Link href="https://www.linkedin.com/"> 
                        <Image
                            // className="bg-black text-white"
                            src="linkedin.svg"
                            alt="LinkedIn"
                            width={20}
                            height={20}
                            // style={{ filter: 'invert(1)' }} // add it when use dark mode
                        />
                    </Link>
                    <Link href="https://www.instagram.com/"> 
                        <Image
                            src="instagram.svg"
                            alt="Instagram"
                            width={20}
                            height={20}
                            // style={{ filter: 'invert(1)' }} // add it when use dark mode
                        />
                    </Link>
                </div>
                <span className="text-xs">© 2025 Circulaire. All rights reserved.</span>
            </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between">
            <div className="h-1/2 flex justify-end">
                <div className="w-1/3 flex flex-col ">
                    <h4 className="font-bold font-accent">Product</h4>
                    <nav className="flex flex-col gap-1">
                        <Link href="/" className="text-xs"> Features</Link>
                        <Link href="/" className="text-xs"> API</Link>
                    </nav>

                </div>
                <div className="w-1/3 flex flex-col " >
                    <h4 className="font-bold font-accent">Company</h4>
                    <nav className="flex flex-col gap-1">
                        <Link href="/"className="text-xs"> About</Link>
                        <Link href="/"className="text-xs"> Press</Link>
                    </nav>
                </div>
            </div>
            <div className="h-1/2 flex justify-end align-bottom">
                {/* Toggle here */}
                <div className="w-1/2 bg-pink-400"></div> 
            </div>
        </div>
      </footer>
    </Section>
  );
}
