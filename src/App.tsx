import React from "react";
import { BeersType } from "./types/beers";
import { useAxios } from "./useAxios";


const App = () => {

  const { loading, error, data } = useAxios("https://api.punkapi.com/v2/beers");

 if (loading) { 
  return <div>loading...</div>
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message || error}</p>
      </div>
    );
  }

  return (
    <div className="vtmn-w-full vtmn-h-full vtmn-bg-background-tertiary vtmn-px-4 vtmn-pt-4 vtmn-pb-8 vtmn-flex vtmn-flex-col">
      <h1 className="vtmn-typo_title-2 vtmn-ml-2 vtmn-mb-2">🍺 I want a Beeeeerrrrr !!! 🍺</h1>
      <section>
        <ul className="vtmn-w-full vtmn-h-full vtmn-overflow-auto" data-testid="beerList">
        {data?.map((beer:BeersType) => { 
          return (
          <li 
            className="hover:vtmn-bg-background-secondary vtmn-bg-background-primary vtmn-shadow-200 vtmn-p-4 vtmn-my-2 vtmn-flex vtmn-flex-row vtmn-justify-between" 
            key={beer.name}
          >
            {/* <div className="vtmn-flex vtmn-gap-2">
              {beer.eco && <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Logo_bi%C3%A8re.svg' height={24} width={24}/>} */}
              <span>{beer.name}</span>
            {/* </div> */}
            <span>{beer.abv}°</span>
          </li>
          )
        })}
      </ul>
      </section>
    </div>
  );
}

export default App;
