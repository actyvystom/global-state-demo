import styled from "styled-components";
import Counter from "./Counter";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;
// we receive the global state via our props animal, etc.
export default function CounterList({ animals, handleAdd, handleSubtract }) {
  return (
    <>
      <h2>Counters</h2>
      <List>
        {/* next prop drilling step: pass props to the next child component Counter, with naming according to naming ruls onXYZ */}
        {animals.map((animal) => (
          <li key={animal.id}>
            <Counter
              animal={animal}
              onAdd={handleAdd}
              onSubtract={handleSubtract}
            />
          </li>
        ))}
      </List>
    </>
  );
}
