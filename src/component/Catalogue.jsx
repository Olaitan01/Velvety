import React from "react";

function Catalogue() {
  const catalogues = [
    {
      feature: "All needs",
    },
    {
      feature: "Protect",
    },
    {
      feature: "Regenerates",
    },
    {
      feature: "Revitalize",
    },
    {
      feature: "Feeds",
    },
    {
      feature: "Regulates",
    },
    { feature: "Purifies" },
    {
      feature: "Makeup Removal",
    },
    { feature: "Exfoliates" },
    {
      feature: "Antioxidant",
    },
    {
      feature: "Soothes",
    },
    {
      feature: "Smoothes skin texture",
    },
    {
      feature: "Tones",
    },
    {
      feature: "Anti-waste",
    },
    {
      feature: "Hydrate",
    },
    {
      feature: "Stregthens",
    },
    {
      feature: "Regenerates after UV exposure Strengthens",
    },
  ];

  return (
    <div className="py-[6em]">
      <div className="flex flex-col gap-6 w-[80%] m-auto justify-center">
        <h3 className="headerStyle">All Products</h3>
        <span className="subHeading">Mild skincare & facial routine</span>
        <div className=" flex flex-row flex-wrap gap-4 :">
          {catalogues.map(({ feature }, index) => (
            <div
              key={index}
              className="border-[0.05em] border-[#899f87] hover:bg-[#e4ece0] hover:font-semibold cursor-pointer rounded-full text-center text-xl p-[0.5em] "
            >
              {feature}{" "}
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Catalogue;
