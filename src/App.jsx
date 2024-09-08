import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setData(res.data.meals));
  }, []);
  return (
    <div className="h-full">
      <header>
        <h1 className="text-center text-green-400 m-8">React Cook</h1>
        <input
          type="text"
          placeholder="Tatez le nom d'un aliment (en Anglais)"
          className="input w-96 text-center bg-gray-800 border-accent focus:border-accent border mx-auto block my-5"
        />
      </header>
      <main>
        <ul className="mx-4 flex flex-wrap">
          {data.map((cook) => (
            <Card key={cook.idMeal}>
              <h2 className="text-center m-2 text-xl font-bold">
                {cook.strMeal}
              </h2>
              <p className="text-center p-2">Origin : {cook.strArea} </p>
              <img
                className=" rounded-md w-[100%]"
                src={cook.strMealThumb}
                alt={`image ${cook.strMeal}`}
              />
              <p className="line-clamp-6 p-4">{cook.strInstructions} </p>
            </Card>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
