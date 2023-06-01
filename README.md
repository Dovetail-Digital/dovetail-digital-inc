# Dovetail Digital Corp Site

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Our website will be deployed on Vercel. At time of writing, it is currently all being done locally.

## Strapi Headless CMS

This project uses a content management system (CMS) called Strapi. Strapi is a headless system, meaning it provides content to us over API calls. This allows us to decoouple the front-end completely from the back-end.

To run your site locally, you must also have the Strapi CMS service running locally. The repo for the service is located [here](https://gitlab.com/dovetail-digital/dovetail-digital-site-strapi).

The strapi instance will have all the content types created, as that is stored in code. It will not have instances of that content, however.
