import Image from "next/image";
import React from "react";

export const Market = () => {
  return (
    <section className="market-section flex flex-col w-full items-center gap-20 py-20">
      <h2 className="text-4xl font-bold bg-clip-text ">
        Explore Our Digital Resources
      </h2>
      <div className="flex w-full gap-4">
        <div className="product-card flex flex-col gap-2">
          <div className="text-center">
            <h3 className="text-xl font-medium">
              Freelancer Contract + Proposal Templates
            </h3>
          </div>
          <Image
            className="self-center"
            src="/assets/contracts.png"
            alt="contracts template"
            width={200}
            height={200}
          />
          <div>
            <p className="font-extralight text-sm">
              A ready-to-use bundle to help beginner freelancers close deals
              with confidence.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">MZN 500.00</h3>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="product-card flex flex-col  gap-2">
          <div className="text-center">
            <h3 className="text-xl font-medium ">
              Why Next.js is the Future of Web Development
            </h3>
          </div>
          <Image
            className="self-center"
            src="/assets/nextjs.png"
            alt="nextjs template"
            width={200}
            height={200}
          />
          <div>
            <p className="font-extralight text-sm">
              A short and practical ebook explaining why Next.js is a must-learn
              framework for developers.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">MZN 300.00</h3>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="product-card flex flex-col gap-2">
          <div className="text-center">
            <h3 className="text-xl font-medium">
              How to Get Clients as a Beginner Freelancer
            </h3>
          </div>
          <Image
            className="self-center"
            src="/assets/Beginner-Freelancer-2.png"
            alt="contracts template"
            width={200}
            height={200}
          />
          <div>
            <p className="font-extralight text-sm">
              A ready-to-use bundle to help beginner freelancers close deals
              with confidence.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">MZN 500.00</h3>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};
