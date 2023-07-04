"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";

export default function Navigation({
  menuLinks,
  customClasses,
}: {
  menuLinks: { title: string; url: string }[];
  customClasses?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Container className="relative">
      <header className={"absolute inset-x-0 top-0 z-50 " + customClasses}>
        <nav
          className="flex items-center justify-between p-6"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Dovetail Digital Inc.</span>
              <Image
                src={"/dd-logo-white.svg"}
                width="200"
                height="100"
                alt="dd-logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {menuLinks.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-md font-semibold leading-6 text-white no-underline hover:text-gray-200"
              >
                <Typography>{item.title}</Typography>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
        </nav>
      </header>
    </Container>
  );
}
