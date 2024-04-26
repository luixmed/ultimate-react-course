import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   {
//     id: 1,
//     description: "Passports",
//     quantity: 2,
//     packed: false,
//   },
//   {
//     id: 2,
//     description: "Socks",
//     quantity: 12,
//     packed: false,
//   },
//   {
//     id: 3,
//     description: "Shorts",
//     quantity: 4,
//     packed: false,
//   },
// ];

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    confirmed && setItems([]);
  }

  return (
    <>
      <GlobalStyles />
      <AppStyled>
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </AppStyled>
    </>
  );
}

export default App;
