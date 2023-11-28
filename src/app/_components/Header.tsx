"use client";

import React, { useState } from "react";
import Link from "next/link";

type Props = {};

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Freicoin",
    href: "/about",
  },
  {
    title: "Rich list",
    href: "/",
  },
  {
    title: "Markets",
    href: "/",
  },
  {
    title: "API",
    href: "/",
  },
  {
    title: "FAQ",
    href: "/",
  },
];

export default function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="mx-auto flex flex-col items-center md:p-4 md:flex-row md:justify-between lg:justify-normal lg:border-b">
      {/* Logo */}
      <Link className="hidden lg:flex lg:items-center lg:mr-12" href={"/"}>
        <img
          src="./freicoin-logo.png"
          className="mr-1 h-9 w-9"
          alt="freicoin logo"
        />
        <p className="text-2xl italic font-medium">Freicoin</p>
      </Link>

      <div className="p-4 w-full flex items-center md:p-0 md:order-last md:w-2/4 lg:w-3/5 lg:justify-end">
        {/* Menu button */}
        <button
          title="menu button"
          aria-expanded="false"
          aria-controls="main-menu"
          className="mr-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            aria-hidden={isMenuOpen}
            focusable={isMenuOpen}
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_2)">
              <path
                d="M1.5 6H23.5C23.7652 6 24.0196 5.89464 24.2071 5.7071C24.3946 5.51957 24.5 5.26521 24.5 5C24.5 4.73478 24.3946 4.48043 24.2071 4.29289C24.0196 4.10536 23.7652 4 23.5 4H1.5C1.23478 4 0.98043 4.10536 0.792893 4.29289C0.605357 4.48043 0.5 4.73478 0.5 5C0.5 5.26521 0.605357 5.51957 0.792893 5.7071C0.98043 5.89464 1.23478 6 1.5 6Z"
                fill="#374957"
              />
              <path
                d="M23.5002 9H9.50015C9.23494 9 8.98058 9.10536 8.79305 9.29289C8.60551 9.48043 8.50015 9.73478 8.50015 10C8.50015 10.2652 8.60551 10.5196 8.79305 10.7071C8.98058 10.8946 9.23494 11 9.50015 11H23.5002C23.7654 11 24.0197 10.8946 24.2073 10.7071C24.3948 10.5196 24.5002 10.2652 24.5002 10C24.5002 9.73478 24.3948 9.48043 24.2073 9.29289C24.0197 9.10536 23.7654 9 23.5002 9Z"
                fill="#374957"
              />
              <path
                d="M23.5002 19H9.50015C9.23494 19 8.98058 19.1053 8.79305 19.2929C8.60551 19.4804 8.50015 19.7348 8.50015 20C8.50015 20.2652 8.60551 20.5195 8.79305 20.7071C8.98058 20.8946 9.23494 21 9.50015 21H23.5002C23.7654 21 24.0197 20.8946 24.2073 20.7071C24.3948 20.5195 24.5002 20.2652 24.5002 20C24.5002 19.7348 24.3948 19.4804 24.2073 19.2929C24.0197 19.1053 23.7654 19 23.5002 19Z"
                fill="#374957"
              />
              <path
                d="M23.5 14H1.5C1.23478 14 0.98043 14.1054 0.792893 14.2929C0.605357 14.4805 0.5 14.7348 0.5 15C0.5 15.2653 0.605357 15.5196 0.792893 15.7071C0.98043 15.8947 1.23478 16 1.5 16H23.5C23.7652 16 24.0196 15.8947 24.2071 15.7071C24.3946 15.5196 24.5 15.2653 24.5 15C24.5 14.7348 24.3946 14.4805 24.2071 14.2929C24.0196 14.1054 23.7652 14 23.5 14Z"
                fill="#374957"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_2">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        {/* Search input */}
        <div className="relative w-full max-w-[25rem] flex items-center md:order-last rounded lg:w-2/4">
          <input
            type="search"
            aria-description="search for address, tx hash, block height..."
            placeholder="Search address, tx hash, block height ..."
            className="absolute left-0 pl-2 pr-8 text-sm h-8 w-full rounded shadow-sm border"
          />
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
          >
            <g clipPath="url(#clip0_5_269)">
              <path
                d="M13.829 13.0047L10.347 9.52276C11.2959 8.36227 11.7624 6.88148 11.6501 5.38667C11.5378 3.89186 10.8552 2.4974 9.74363 1.49173C8.63202 0.486053 7.17638 -0.0538907 5.67783 -0.0164222C4.17928 0.0210464 2.75245 0.633061 1.69248 1.69303C0.632511 2.753 0.0204971 4.17983 -0.0169715 5.67838C-0.05444 7.17693 0.485504 8.63256 1.49118 9.74418C2.49685 10.8558 3.89131 11.5384 5.38612 11.6507C6.88093 11.763 8.36172 11.2965 9.52221 10.3476L13.0041 13.8295C13.1141 13.9358 13.2615 13.9946 13.4144 13.9932C13.5674 13.9919 13.7137 13.9306 13.8219 13.8224C13.93 13.7142 13.9914 13.5679 13.9927 13.415C13.994 13.262 13.9352 13.1147 13.829 13.0047ZM5.83321 10.5004C4.91023 10.5004 4.00797 10.2267 3.24055 9.71395C2.47312 9.20117 1.87498 8.47233 1.52177 7.61961C1.16856 6.76689 1.07614 5.82858 1.25621 4.92333C1.43627 4.01809 1.88073 3.18657 2.53337 2.53392C3.18602 1.88128 4.01754 1.43682 4.92278 1.25676C5.82803 1.07669 6.76634 1.16911 7.61906 1.52232C8.47178 1.87553 9.20062 2.47366 9.7134 3.24109C10.2262 4.00852 10.4999 4.91078 10.4999 5.83376C10.4985 7.07101 10.0064 8.25718 9.1315 9.13205C8.25663 10.0069 7.07046 10.499 5.83321 10.5004Z"
                fill="#374957"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_269">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <nav
        id="main-menu"
        role="navigation"
        aria-label="Main menu"
        className={
          isMenuOpen
            ? "w-full flex flex-col gap-2 items-center text-[0.90rem] text-slate-600 border-t md:border-b-2 md:flex-row"
            : "hidden text-[0.95rem] md:flex md:items-center md:gap-4"
        }
      >
        {navLinks.map((link) => (
          <Link
            onClick={() => setIsMenuOpen(false)}
            key={link.title}
            href={link.href}
            className="px-4 py-1 w-full border-b md:px-0 md:py-0 md:min-w-max md:border-none md:text-slate-400 md:font-medium"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
