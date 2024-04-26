import { Footer } from "./StatsStyled";

function Stats({ items }) {
  if (!items.length)
    return (
      <Footer>
        <p>Start adding some items to your packing list 🚀</p>
      </Footer>
    );

  // ***** Derived State *****
  const numberItems = items.length;
  const numberItemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberItemsPacked / numberItems) * 100);

  return (
    <Footer>
      <p>
        {percentage === 100
          ? "You got everything ready to go! 🛬"
          : `💼 You have ${numberItems} items on your list, and you already packed ${numberItemsPacked} (${percentage}%)`}
      </p>
    </Footer>
  );
}

export default Stats;
