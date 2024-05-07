import Link from "next/link";
import { clsx } from "clsx";
import { GooglePlayIcon, LgdHeroIcon } from "@components/icons";

export function Hero() {
  return (
    <div className="hero-bg xl">
      <div className="hero-container xl:py-20">
        <div className="container conf-block">
          <section
            className={clsx(
              "flex-wrap gap-14 justify-center items-center flex max-sm:flex-col",
              "[&_h3]:text-white [&_h3]:text-2xl max-lg:[&_h3]:text-center",
              "[&_pre]:!bg-transparent [&_pre]:ring-0 [&_pre_span]:text-[--shiki-dark]",
              "[&_h3]:font-extralight",
              "[&_code]:whitespace-pre-wrap" /* fix scroll on mobile for code-blocks */
            )}
          >
            <div className="max-md:grow max-xl:w-full flex flex-col items-center gap-8 py-8">
              <LgdHeroIcon />
            </div>

            <div>
              <h3>Local Guides Directory</h3>
              code a
            </div>
          </section>

          <Link className=" block w-fit mx-auto mt-10" href="/learn">
            <button className="gap-4 bg-orange-800 hover:bg-orange-600 text-white font-bold p-4 px-4 rounded inline-flex items-center">
              <GooglePlayIcon />
              <span>Google Play Store</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
