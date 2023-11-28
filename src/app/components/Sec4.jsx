import defaultAlienPlanets from "../../lib/alienPlanets.js";
import { useState } from "react";

export default function Sec4() {
  const [alienPlanets, setAienPlanets] = useState(defaultAlienPlanets);
  return (
    <div>
      <h3>Alien Planets</h3>
      <div className="planets-container">
        {alienPlanets.map((planets) => {
          return (
            <div key={alienPlanets.id} className="alien-planets">
              <p>{planets.emoji} </p>
              <p>{planets.name}</p>
              <p>{planets.distanceFromEarth}</p>
              <p>{planets.hasLife}</p>
              <p>{planets.atmosphere}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
