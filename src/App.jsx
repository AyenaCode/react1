import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
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
      <main></main>
    </div>
  );
};

export default App;
