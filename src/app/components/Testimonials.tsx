"use client";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
export default function Testimonials({
  testimonials,
}: {
  testimonials: {
    id: Number;
    name: String;
    handle: String;
    text: String;
    profilePicture: any;
  }[];
}) {
  return (
    <Container>
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <Typography variant="h2">Testimonials</Typography>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-[3rem] lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div
                  key={String(testimonial.id)}
                  className="sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 mx-0 shadow-sm ring-1 ring-gray-900/5">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.text}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image
                        className="h-10 w-10 rounded-full bg-gray-50"
                        src={
                          testimonial.profilePicture.data.attributes.formats
                            .thumbnail.url
                        }
                        alt=""
                        width="40"
                        height="40"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">{`${testimonial.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
