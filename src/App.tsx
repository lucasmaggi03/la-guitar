import { use, useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { db } from "./data/db.js";
import "./App.css";

function App() {
  const [data, setData] = useState(db);
  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              name={guitar.name}
              price={guitar.price}
              image={guitar.image}
              description={guitar.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
