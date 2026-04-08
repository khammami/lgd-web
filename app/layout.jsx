/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'
import { LgdBookIcon, GooglePlayIcon } from '@components/icons'
import NextLink from 'next/link'
import FirebaseProvider from '../context/firebaseContext'

export const metadata = {
  title: {
    default: 'Local Guides Directory',
    template: '%s – LGD'
  },
  description: 'Local Guides Directory'
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <>
          <LgdBookIcon className="w-6 h-auto" />
          <span className="ml-4">Local Guides Directory</span>
        </>
      }
      projectLink="https://github.com/khammami/lgd-web"
      chatLink="https://play.google.com/"
      chatIcon={<GooglePlayIcon />}
    />
  )

  const footer = (
    <Footer>
      <div className="w-full">
        <div className="flex justify-between items-start mb-24 flex-wrap gap-10">
          <div className="max-lg:w-full">
            <NextLink
              href="/"
              className="inline-block text-center grayscale hover:grayscale-0 text-xs"
            >
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
                className="hover:underline decoration-from-font [text-underline-position:from-font]"
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
                className="hover:underline decoration-from-font [text-underline-position:from-font]"
              >
                Local Guides Connect
              </NextLink>
            </li>
            <li>
              <NextLink
                href="https://www.localguidesconnect.com/t5/General-Discussion/bd-p/localguide/label-name/Meet-ups"
                target="_blank"
                className="hover:underline decoration-from-font [text-underline-position:from-font]"
              >
                Local Guides Meet-ups
              </NextLink>
            </li>
          </ul>

          <ul className="text-sm flex flex-col gap-4 max-lg:w-[46%]">
            <h3 className="text-lg font-bold">Download</h3>
            <li>
              <NextLink
                href="https://play.google.com"
                target="_blank"
                className="hover:underline decoration-from-font [text-underline-position:from-font]"
              >
                Google Play
              </NextLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-between flex-wrap gap-10 text-sm">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()}{' '}
            <NextLink
              href="https://github.com/khammami"
              target="_blank"
              className="text-primary underline"
            >
              Khalil Hammami
            </NextLink>
            . All rights reserved.
          </p>
          <div className="flex flex-col gap-4 lg:items-end">
            <ul className="flex gap-5">
              <li>
                <NextLink href="/privacy" className="text-primary underline">
                  Privacy Policy
                </NextLink>
              </li>
              <li>
                <NextLink href="/terms" className="text-primary underline">
                  Terms of Use
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Footer>
  )

  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={
            <Banner storageKey="lgd-disclaimer" dismissible={false}>
              <span className="text-sm">
                ⚠️ DISCLAIMER ⚠️ LGD <b>IS NOT</b> sponsored by Google or
                Local Guides team.
              </span>
            </Banner>
          }
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/khammami/lgd-web"
          pageMap={pageMap}
          navigation={false}
          toc={{ backToTop: true }}
          search={null}
        >
          <FirebaseProvider>{children}</FirebaseProvider>
        </Layout>
      </body>
    </html>
  )
}
