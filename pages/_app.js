import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
// initial data for the global state
const initialAnimals = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];

export default function App({ Component, pageProps }) {
  // initialize global state in topmost component
  const [animals, setAnimals] = useState(initialAnimals);
  // handler for adding animal counts
  function handleAdd(animalId) {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }
  // handler for subtracting from counts
  function handleSubtract(animalId) {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId
          ? { ...animal, count: Math.max(animal.count - 1) }
          : animal
      )
    );
  }
  const animalCounts = animals.map((animal) => animal.count);
  const countSum = animalCounts.reduce((a, b) => a + b);
  const countAverage = countSum / animals.length;
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;
  return (
    <>
      <GlobalStyle />
      <Layout countSum={countSum} dragonCount={dragonCount}>
        {/* pass props animals, handleAdd, handleSubtract to our first component  */}
        <Component
          {...pageProps}
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          countAverage={countAverage}
          countSum={countSum}
          dragonCount={dragonCount}
        />
      </Layout>
    </>
  );
}
