import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

const App = () => {
  const [data, setData] = useState([]);
  const [serchValue, setSerchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + serchValue)
      .then((res) => setData(res.data.meals));
  }, [serchValue]);
  return (
    <div className="h-full">
      <header>
        <h1 className="text-center text-green-400 m-8">React Cook</h1>
        <input
          type="text"
          placeholder="Tapez le nom d'un aliment (en Anglais)"
          className="input w-96 text-center bg-gray-800 border-accent focus:border-accent border mx-auto block my-5"
          onChange={(e) => setSerchValue(e.target.value)}
        />
      </header>
      <main>
        <ul className="mx-4 flex flex-wrap">
          {data &&
            data
              .slice(0, 24)
              .map((cook) => <Card key={cook.idMeal} cook={cook}></Card>)}
        </ul>
      </main>
    </div>
  );
};

export default App;
