import { Li } from "./ItemStyled";

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <Li packed={item.packed}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </Li>
  );
}

export default Item;
