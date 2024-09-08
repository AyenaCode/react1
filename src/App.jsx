import axios from "axios";
import { useEffect, useState } from "react";

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
          className="input bg-gray-800 border-accent focus:border-accent border mx-auto block my-5"
        />
      </header>
      <main>
        <ul className="flex flex-wrap ">
          {data.map((cook) => (
            <li className="card m-2 p-8 bg-blue-800" key={cook.idMeal}>
              {cook.strMeal}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
