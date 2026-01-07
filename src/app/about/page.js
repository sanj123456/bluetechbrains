import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import WhatWeDo from "@/components/about/WhatWeDo";
import WwwBelief from "@/components/about/WwwBelief";
import Brands from "@/components/Brands/Brands";
import Contactusforabout from "@/components/Contactusforabout/contactusforabout";
import Infrastructureforabout from "@/components/Infrastructureforabout/Infrastructureforabout";
import Pillars from "@/components/Pillars/Pillars";

import Team from "@/components/Team/Team";
import React from "react";
import OurJourney from "@/components/about/OurJourney";
import KnowMore from "@/components/common/KnowMore";
import OurPhilosophy from "@/components/about/OurPhilosophy";

export default function Page() {
  return (
    <>
      <Contactusforabout />
      <Brands />
      <WhatWeBelieve />
      <WwwBelief />
      <WhatWeDo />
      <KnowMore />
      <OurPhilosophy />
      <Infrastructureforabout />
      <Team />
      <Pillars />

      <OurJourney />
    </>
  );
}
