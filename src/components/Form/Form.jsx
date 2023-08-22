import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Form.module.css";

const Form = ({ name, setName, isEditing, handleSubmit }) => {
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>GrocerEase</h3>
        <div className={classes["form-control"]}>
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit">{isEditing ? "Edit" : "Submit"}</Button>
        </div>
      </form>
    </Card>
  );
};
export default Form;
