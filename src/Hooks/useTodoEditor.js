import { useState } from "react";

function useTodoEditor(updateItem) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  function startEditing(item) {
    setEditingId(item.id);
    setEditText(item.text);
  }

  function saveEdit(id) {
    updateItem(id, editText);
    setEditingId(null);
    setEditText("");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditText("");
  }

  return {
    editingId,
    editText,
    setEditText,
    startEditing,
    saveEdit,
    cancelEdit,
  };
}

export default useTodoEditor;