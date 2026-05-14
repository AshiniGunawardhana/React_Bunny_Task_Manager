import { useState, useEffect } from "react";

function useTodos() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [isDone, setIsDone] = useState(() => {
    const saved = localStorage.getItem("done");
    return saved ? JSON.parse(saved) : [];
  });

  function addItem(text) {
    if (text.trim() === "") return;

    setItems((prevItems) => {
      return [...prevItems, { id: Date.now(), text: text }];
    });
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setIsDone((prev) => prev.filter((itemId) => itemId !== id));
  }

  function handleLineThrough(id) {
    setIsDone((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  function updateItem(id, newText) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newText } : item)),
    );
  }

  function deleteCompleted() {
    setItems((prevItems) =>
      prevItems.filter((item) => !isDone.includes(item.id)),
    );

    setIsDone([]);
  }

  /*Save Items*/
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  /*Save Done*/
  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(isDone));
  }, [isDone]);

  return {
    items,
    isDone,
    addItem,
    deleteItem,
    handleLineThrough,
    updateItem,
    deleteCompleted,
  };
}
export default useTodos;
