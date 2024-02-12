import SingleLeftSide from "./SingleLeftSide";

export default function NewsLeftSide() {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {/* <!-- news item --> */}
      <SingleLeftSide />
      {/* <!-- news item ends --> */}
      {/* <!-- news item --> */}
      {/* <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
        <div className="col-span-12 md:col-span-6">
          <a href="">
            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
              Gold hits eight-month low as higher bond yields dent its appeal
            </h3>
          </a>
          <p className="text-base text-[#292219]">
            Exchange traded funds tracking the metal sustain biggest outflows in
            a year
          </p>
          <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
        </div>

        <div className="col-span-12 md:col-span-6">
          <img className="w-full" src="./assets/thumb.png" alt="thumb" />
        </div>
      </div> */}
      {/* <!-- news item ends --> */}
      {/* <!-- news item --> */}
      {/* <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <div className="col-span-12 md:col-span-4">
          <a href="#">
            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
              Spac led by tech founders targets Europe’s unicorns for US
              listings
            </h3>
          </a>
          <p className="text-base text-[#292219]">
            Tailwind International looks to bypass EU and UK markets to build a
            European tech franchise
          </p>
          <p className="mt-5 text-base text-[#94908C]">Yesterday</p>
        </div>
      </div> */}
      {/* <!-- news item ends --> */}
    </div>
  );
}
