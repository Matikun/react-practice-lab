import React from "react";

type Item = {
  id: number;
  name: string;
  clicked: boolean;
};

type Props = {
  item: Item;
  onClick: (id: number) => void;
};

const ListItem = React.memo(({ item, onClick }: Props) => {
  console.log("Rendering item:", item.id);
  return (
    <li onClick={() => onClick(item.id)}>
      {item.name} - Clicked: {item.clicked ? "Yes" : "No"}
    </li>
  );
});

export default ListItem;
