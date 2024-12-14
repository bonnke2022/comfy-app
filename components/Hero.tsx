import Link from "next/link";
import heroOne from "../app/assets/hero1.webp";
import heroTwo from "../app/assets/hero2.webp";
import heroThree from "../app/assets/hero3.webp";
import heroFour from "../app/assets/hero4.webp";
import Image from "next/image";

const carouselImages = [heroOne, heroTwo, heroThree, heroFour];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight">
          We're changing the way people shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          nostrum illo autem ab amet sint, nihil aspernatur illum doloribus at
          itaque dolor accusamus quas nobis omnis, eum recusandae temporibus ut?
        </p>
        <div className="mt-10">
          <Link href="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index: number) => {
          return (
            <div className="carousel-item" key={index}>
              <Image
                src={image}
                alt="img"
                className="rounded-box h-full w-80 object-cover"
                unoptimized
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
