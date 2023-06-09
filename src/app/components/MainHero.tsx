"use client";

import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function MainHero({
  title,
  introText,
  heroImage,
  cta,
}: {
  title: String;
  introText: String;
  heroImage: any;
  cta: any;
}) {
  return (
    <div className="relative isolate overflow-hidden bg-[#02150F] bg-[url('/background.svg')] bg-cover bg-no-repeat bg-blend-soft-light lg:min-h-[630px]">
      <svg
        className="inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#1B9B74] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <Container className="relative pb-24">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <Typography variant="h1" color="white">
            {title}
          </Typography>
          <p className="mt-6 text-lg leading-8 text-gray-300">{introText}</p>
          <div className="mt-10 flex items-center gap-x-6">
            {cta[0] && (
              <Button
                variant="contained"
                color="primary"
                className="hover:bg-white hover:text-black"
                href={cta[0].url}
              >
                {cta[0].text}
              </Button>
            )}
            {cta[1] && (
              <Button
                variant="outlined"
                className="text-white border-white hover:border-dovetail-green hover:text-dovetail-green hover:opacity-90"
                href={cta[1].url}
              >
                {cta[1].text}
              </Button>
            )}
          </div>
        </div>
        <div className="absolute top-0 left-[60%] right-0 bottom-0 w-full max-h-[35rem] overflow-hidden rounded-md">
          <Image
            src={heroImage.data.attributes.url}
            alt={heroImage.data.attributes.alternativeText}
            className="hidden lg:block w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 object-left object-contain"
            width={"1141"}
            height={"707"}
            priority={true}
            placeholder="blur"
            blurDataURL="/hp-pic.png"
          />
        </div>
      </Container>
    </div>
  );
}
