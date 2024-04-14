import React from "react";

import PoliceLayout from "../../layout/PoliceLayout";
import Panel from "@/components/common/Leftpanel.js/Panel";
import PrimaryAnalysis from "./PrimaryAnalysis";
import SecondaryAnalysis from "./SecondaryAnalysis";
import ThirdAnalysis from "./ThirdAnalysis";
import Filter from "./Filter";


const PoliceDashboard = () => {



  return (
    <PoliceLayout>
      <div class="bg-[#080F25] text-[#D3DCFF] w-full h-screen flex flex-row relative flex-shrink">
        <Panel />
        <div class="w-full h-[81vh] flex flex-col px-8 pt-4 text-[#AEB9E1] text-lg">
          <div class="flex flex-col  w-full">
            <Filter />
            <div class="flex justify-between  py-0 px-1 mt-4">
              <PrimaryAnalysis />
              <SecondaryAnalysis />
              <ThirdAnalysis />
            </div>
          </div>
        </div>
      </div>

    </PoliceLayout>
  );
};

export default PoliceDashboard;
