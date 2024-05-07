import { Hero } from "@components/index-page/Hero";

export function IndexPage() {
  return (
    <div className="index">
      <Hero />
      <section className="text-center gap-14 justify-around container flex flex-col conf-block lg:flex-row-reverse lg:items-start lg:*:w-1/2">
      <div className="max-lg:text-center">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          iaculis vulputate risus, eu placerat ex auctor at. Nulla facilisi.
          Aliquam at sem dolor. Phasellus lorem risus, tincidunt a sapien sed,
          ornare eleifend arcu. Sed malesuada tempus sem ac ultrices. Proin
          laoreet metus nec felis placerat, pharetra tristique ex tristique. Ut
          quis ante ut nisi tempus iaculis. Quisque cursus sem ut augue cursus
          tincidunt. Proin dapibus felis et vehicula semper. Donec facilisis
          nibh in nibh aliquam faucibus. Phasellus nec dapibus ex.
        </p>
        </div>
      </section>
    </div>
  );
}
