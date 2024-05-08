import { Hero } from "@components/index-page/Hero";

export function IndexPage() {
  return (
    <div className="index">
      <Hero />
      <section className="text-center gap-14 justify-around container flex flex-col conf-block lg:flex-row-reverse lg:items-start lg:*:w-1/2">
        <div className="max-lg:text-center">
          <h2>Local Guides Directory</h2>
          <p>
            This app creates a directory for Google Local Guides to share their
            profiles and connect with fellow explorers. Local Guides can find
            each other and follow updates on their contributions to Google Maps.
          </p>
          <p>
            Local Guides is a global community of explorers who write reviews,
            share photos, answer questions, add or edit places, and check facts
            on Google Maps. Millions of people rely on contributions like yours
            to decide where to go and what to do.
          </p>
        </div>
      </section>
    </div>
  );
}
