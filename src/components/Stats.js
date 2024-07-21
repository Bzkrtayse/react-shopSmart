export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your shopping list 🪄 </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Mission accomplished! You've got everything you need. Well done!"
          : ` You have ${numItems} items on your list, You have completed (${percentage}%) of your shopping list!`}
      </em>
    </footer>
  );
}
