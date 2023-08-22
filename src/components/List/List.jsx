import Item from "../Item/Item";
import classes from "./List.module.css";

const List = ({ items, removeItem, editItem }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <Item
            key={id}
            title={title}
            removeItem={() => removeItem(id)}
            editItem={() => editItem(id)}
          />
        );
      })}
    </ul>
  );
};

export default List;
