import SingleRIghtSideItem from "./SingleRIghtSideItem";

function NewsRightSide() {
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {/* <!-- news item --> */}
        <SingleRIghtSideItem></SingleRIghtSideItem>
        {/* <!-- news item ends --> */}

        {/* <!-- news item --> */}
        {/* <div className="col-span-12 md:col-span-8">
          
          <div className="col-span-12 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                The power of liberalism can combat oppression in all its forms
              </h3>
            </a>
            <p className="text-base text-[#292219]">
              True liberals stand for individual freedom, explains Deirdre
              Nansen McCloskey, an iconoclastic economist
            </p>
            <p className="mt-5 text-base text-[#94908C]">18 Feb 2021</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NewsRightSide;
