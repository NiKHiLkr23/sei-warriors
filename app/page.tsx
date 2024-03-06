import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" min-h-screen overflow-hidden  bg-bgHeroPrimaryMobile lg:bg-bgHeroPrimary bg-no-repeat bg-cover bg-center  w-full pt-[50px]    ">
      <div className="absolute bottom-5 right-5 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-end gap-5">
          <Link
            href="https://twitter.com/SeiWarriorNFT"
            prefetch={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/images/img_ico_x.png"
              width={200}
              height={200}
              alt="Sei Warriors"
              className="w-10 h-10"
            />
          </Link>

          <Link
            href="https://discord.com/invite/TGNzBtyPUu"
            prefetch={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/images/img_ico_dc.png"
              width={200}
              height={200}
              alt="Sei Warriors"
              className="w-10 h-10"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
