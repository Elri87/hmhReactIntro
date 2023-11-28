"use client";

//import { useState } from "react";
import Sec1 from "./components/Sec1.jsx";
import Divider from "./components/Divider.jsx";
import Sec2 from "./components/Sec2.jsx";
import Sec3 from "./components/Sec3.jsx";
import Sec4 from "./components/Sec4.jsx";

export default function Home() {
  return (
    <div>
      <Sec1 />
      <Divider />
      <Sec2 />
      <Divider />
      <Sec3 />
      <Divider />
      <Sec4 />
    </div>
  );
}

/*export default function Home() {
  //const [dragons, setDragons] = useState(defaultDragons);

  return (
    <div>
      <h1>Dragons</h1>
      {dragons.map((dragon) => {
        return (
          <div>
            <div key={dragon.id} className="border">
              <h2>{dragon.name}</h2>
              <p>{dragon.emoji}</p>
              <p>{dragon.color}</p>
            </div>
            <Divider />
          </div>
        );
      })}
    </div>
  );
}*/
