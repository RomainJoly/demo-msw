import React, { useEffect, useState } from "react";
import { getbeers } from "./api/beers";
import { BeersType } from "./types/beers";


const App = () => {

  const [beers, setBeers] = useState<BeersType[]>()

  useEffect(() => {
    getbeers('https://api.punkapi.com/v2/beers').then(resp => setBeers(resp))
  }, [])

 if (!beers) { 
  return <>loading...</>
  }

  return (
    <div className="vtmn-w-full vtmn-h-full vtmn-bg-background-tertiary vtmn-px-4 vtmn-pt-4 vtmn-pb-8 vtmn-flex vtmn-flex-col">
      <h1 className="vtmn-typo_title-2 vtmn-ml-2 vtmn-mb-2">I want a Beeeeerrrrr !!!</h1>
      <section>
        <ul className="vtmn-w-full vtmn-h-full vtmn-overflow-auto">
        {beers?.map((b) => { 
          return (
          <li className="hover:vtmn-bg-background-secondary vtmn-bg-background-primary vtmn-shadow-200 vtmn-p-4 vtmn-my-2 vtmn-flex vtmn-flex-row vtmn-justify-between" key={b.name}>
            <span>{b.name}</span>
            <span>{b.abv}°</span>
          </li>
          )
        })}
      </ul>
      </section>
      <p>
        <small>
          Edit <code>src/mocks/handlers.js</code> with your logic.
        </small>
      </p>
    </div>
  );
}

export default App
