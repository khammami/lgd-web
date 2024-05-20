import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";
import NextLink from "next/link";
import { LgdBookIcon, GooglePlayIcon } from "@components/icons";

const classes = {
  link: "hover:underline decoration-from-font [text-underline-position:from-font]",
};

const config: DocsThemeConfig = {
  logo: (
    <>
      <LgdBookIcon />
      <span className="ml-4">Local Guides Directory</span>
    </>
  ),
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
    icon: <GooglePlayIcon />,
  },
  docsRepositoryBase: "https://github.com/khammami/lgd-web",
  footer: {
    text: (
      <div className="w-full">
        <div className="flex justify-between items-start mb-24 flex-wrap gap-10">
          <div className="max-lg:w-full">
            <NextLink href="/" className="inline-block text-center grayscale hover:grayscale-0 text-xs">
              <LgdBookIcon className="w-8 h-auto mx-auto my-8" />
              <span>Local Guides Directory</span>
            </NextLink>
          </div>
          <ul className="text-sm flex flex-col gap-4 max-lg:w-[46%]">
            <h3 className="text-lg font-bold">Google Local Guide</h3>
            <li>
              <NextLink
                href="https://maps.google.com/localguides/home"
                target="_blank"
                className={classes.link}
              >
                Local Guides Home
              </NextLink>
            </li>
          </ul>

          <ul className="text-sm flex flex-col gap-4 max-lg:w-[46%]">
            <h3 className="text-lg font-bold">Community</h3>
            <li>
              <NextLink
                href="https://www.localguidesconnect.com/"
                target="_blank"
                className={classes.link}
              >
                Local Guides Connect
              </NextLink>
            </li>
            <li>
              <NextLink
                href="https://www.localguidesconnect.com/t5/General-Discussion/bd-p/localguide/label-name/Meet-ups"
                target="_blank"
                className={classes.link}
              >
                Local Guides Meet-ups
              </NextLink>
            </li>
          </ul>

          <ul className="text-sm flex flex-col gap-4 max-lg:w-[46%]">
            <h3 className="text-lg font-bold">Download</h3>
            <li>
              <NextLink
                href="https:/:play.google.com"
                target="_blank"
                className={classes.link}
              >
                Google Play
              </NextLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-between flex-wrap gap-10 text-sm">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()}{" "}
            <NextLink
              href="https://github.com/khammami"
              target="_blank"
              className={`nx-text-primary-600 nx-underline`}
            >
              Khalil Hammami
            </NextLink>
            . All rights reserved.
          </p>
          <div className="flex flex-col gap-4 lg:items-end">
            <ul className="flex gap-5">
              <li>
                <NextLink
                  href="/privacy"
                  className={`nx-text-primary-600 nx-underline`}
                >
                  Privacy Policy
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="/terms"
                  className={`nx-text-primary-600 nx-underline`}
                >
                  Terms of Use
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  banner: {
    key: "lgd-disclaimer",
    dismissible: false,
    text: (
      <span className="text-sm">
        ⚠️ DISCLAIMER ⚠️ LGD <b>IS NOT</b> sponsored by Google or Local Guides
        team.
      </span>
    ),
  },
  toc: {
    backToTop: true,
  },
  navigation: false,
  primaryHue: { light: 22, dark: 22 },
  primarySaturation: { light: 80, dark: 50 },
  search: { component: null },
};

// 	#ef7a37 	hsl(22, 85%, 58%)

export default config;
