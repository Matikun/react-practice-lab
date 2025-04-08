import React, { useCallback, useState } from "react";
import ListItem from "./ListItem";

type Item = {
  id: number;
  name: string;
  clicked: boolean;
};

const listItems = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  clicked: false,
}));

const BigList: React.FC = () => {
  const [items, setItems] = useState<Item[]>(listItems);

  const handleClick = useCallback((id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, clicked: !item.clicked } : item
      )
    );
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onClick={handleClick} />
      ))}
    </ul>
  );
};

export default BigList;
