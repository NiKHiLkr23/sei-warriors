import Image from "next/image";

export default function Home() {
  return (
    <section className=" min-h-screen overflow-hidden bg-none lg:bg-bgHeroPrimary bg-no-repeat bg-cover bg-center  w-full pt-[50px]    ">
      <div className="lg:hidden flex items-center justify-center w-full xl:max-w-7xl xl:mx-auto">
        <Image
          src="https://sei-warriors.s3.amazonaws.com/banner-red.png"
          width={1000}
          height={1000}
          alt=""
          className="w-full "
        />
      </div>
    </section>
  );
}
