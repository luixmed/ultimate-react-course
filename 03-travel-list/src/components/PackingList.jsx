import { useState } from "react";
import FilterList from "./FilterList";
import Item from "./Item";
import { Div } from "./PackingListStyled";
import ClearList from "./ClearList";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <Div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div>
        <FilterList sortBy={sortBy} setSortBy={setSortBy} />
        <ClearList onClearList={onClearList} />
      </div>
    </Div>
  );
}

export default PackingList;
