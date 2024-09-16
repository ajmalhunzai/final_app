import React from "react";
import Contact from "../../../../Contact/Contact";
import Whatapp from "../../../../Whatapp/Whatapp";

import { Conatiner, FelxWrapper, FelxCard } from "./SingeleProducr1Elements";
import SingleNav from "./Singlenav";
const SingleMineral = () => {
  return (
    <Conatiner>
      <Whatapp />
      <SingleNav />
      <h3>Home / Minerals / SingeleProducr1</h3>
      <FelxWrapper>
        <FelxCard>

        </FelxCard>
        <FelxCard>
          <h1>Product Name</h1>
          <p>
            Lorem sipemLorem sipemLorem sipemLorem sipemLorem sipemLorem sipem
          </p>
        </FelxCard>
      </FelxWrapper>
      <Contact />
    </Conatiner>
  );
};

export default SingleMineral;
