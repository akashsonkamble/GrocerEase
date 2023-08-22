import { FaEdit, FaTrash } from "react-icons/fa";
import classes from "./Item.module.css";

const Item = ({ title, removeItem, editItem }) => {
  return (
    <li className={classes.item}>
      <p>{title}</p>
      <div className={classes["btn-container"]}>
        <FaEdit className={classes["edit-btn"]} onClick={editItem} />
        <FaTrash className={classes["delete-btn"]} onClick={removeItem} />
      </div>
    </li>
  );
};

export default Item;
