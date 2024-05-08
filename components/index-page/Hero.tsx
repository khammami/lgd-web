import Link from "next/link";
import { clsx } from "clsx";
import { GooglePlayIcon, LgdHeroIcon } from "@components/icons";

export function Hero() {
  return (
    <div className="hero-bg xl">
      <div className="hero-container index-gradient xl:py-20">
        <div className="container text-white conf-block">
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
              <LgdHeroIcon className="w-52" />
            </div>

            <div>
              <h3>Calling all Local Guides!</h3>
              <p>
              Want to connect with fellow Local Guides in your city or worldwide? 
              Local Guides Directory (LGD) makes it easy!
              </p>
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
