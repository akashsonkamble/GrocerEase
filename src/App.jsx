import React, { useState, useEffect } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import Button from "./components/UI/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Please provide value");
      return;
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      toast.success("Item updated to the list.");
    } else {
      toast.success("Item added to the list.");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const clearList = () => {
    toast.error("Empty list");
    setList([]);
  };
  const removeItem = (id) => {
    toast.success("Item deleted.");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div className="header">
      <section id="item-form">
        <ToastContainer position="top-center" />
        <Form
          name={name}
          setName={setName}
          isEditing={isEditing}
          setEditID={setEditID}
          setIsEditing={setIsEditing}
          handleSubmit={handleSubmit}
        />
      </section>
      <section id="items">
        <List
          items={list}
          isEditing={isEditing}
          removeItem={removeItem}
          editItem={editItem}
        />
        <Button onClick={clearList}>Clear All</Button>
      </section>
    </div>
  );
}

export default App;
