"use client";
import { Typography } from "@mui/material";
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
  console.log("RES", testimonials);
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <Typography variant="h2">Testimonials</Typography>
          <Typography>Teams we have helped</Typography>
        </div>
        <div className="mx-auto mt-8 flow-root max-w-2xl sm:mt-8 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={String(testimonial.id)}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.text}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={
                        process.env.STRAPI_SERVER +
                        testimonial.profilePicture.data.attributes.url
                      }
                      alt=""
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
  );
}
