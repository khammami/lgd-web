import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import NextLink from "next/link";

const classes = {
  link: "hover:underline decoration-from-font [text-underline-position:from-font]",
};

const config: DocsThemeConfig = {
  logo: <span>LGD</span>,
  project: {
    link: "https://github.com/khammami/lgd-web",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – LGD",
      };
    }
  },
  chat: {
    link: "https://play.google.com/",
    icon: (
      <svg fill="currentColor" height="24" width="24" viewBox="0 0 32 32">
        <g>
          <path d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z" />
          <path d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z" />
          <path d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z" />
          <path d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z" />
        </g>
      </svg>
    ),
  },
  docsRepositoryBase: "https://github.com/khammami/lgd-web",
  footer: {
    text: (
      <div className="w-full">
        <div className="flex justify-between items-start mb-24 flex-wrap gap-10">
          <a href="/" className="max-lg:w-full">
            icon
          </a>

          <ul className="text-sm flex flex-col gap-4 max-lg:w-[46%]">
            <h3 className="text-lg font-bold">Google Local Guide</h3>
            <li>
              <NextLink href="https://maps.google.com/localguides/home" className={classes.link}>
                Local Guides Home
              </NextLink>
            </li>
          </ul>

          <ul className="text-sm flex flex-col gap-4 max-lg:w-[46%]">
            <h3 className="text-lg font-bold">Community</h3>
            <li>
              <NextLink href="https://www.localguidesconnect.com/" className={classes.link}>
                Local Guides Connect
              </NextLink>
            </li>
            <li>
              <NextLink href="https://www.localguidesconnect.com/t5/General-Discussion/bd-p/localguide/label-name/Meet-ups" className={classes.link}>
                Local Guides Meet-ups
              </NextLink>
            </li>
          </ul>

          <ul className="text-sm flex flex-col gap-4 max-lg:w-[46%]">
            <h3 className="text-lg font-bold">Download</h3>
            <li>
              <NextLink href="/" className={classes.link}>
                Google Play
              </NextLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-between flex-wrap gap-10 text-sm">
          <p className="text-sm">Copyright © {new Date().getFullYear()} Khalil Hammami. All rights reserved.</p>
          <div className="flex flex-col gap-4 lg:items-end">
            <ul className="flex gap-5">
              <li>
                <NextLink href="/privacy" className={`nx-text-primary-600 nx-underline`}>
                Privacy Policy
              </NextLink>
              </li>
              <li>
                <NextLink href="/terms" className={`nx-text-primary-600 nx-underline`}>
                Terms of Use
              </NextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
  navigation: false,
  primaryHue: { light: 22, dark: 22 },
  primarySaturation: { light: 80, dark: 50 },
};

// 	#ef7a37 	hsl(22, 85%, 58%)

export default config;
