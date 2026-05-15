import { useEffect, useRef } from "react";
import ToDoItem from "./ToDoItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function ToDoList({ items, deleteItem, handleLineThrough, isDone, editor }) {
  const { editingId, editText, setEditText, startEditing, saveEdit } = editor;

  const bottomRef = useRef(null);
  const previousLength = useRef(items.length);

  useEffect(() => {
    // only scroll when NEW item added
    if (items.length > previousLength.current) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }

    previousLength.current = items.length;
  }, [items]);

  return (
    <div
      className="todo-scroll"
      style={{
        maxHeight: "calc(100vh - 180px)",
        marginTop: 8,
        flex: 1,
        overflowY: "auto",
        paddingRight: "4px",
        paddingTop: "4px",
        paddingBottom: "clamp(60px, 8vw, 60px)",
        minHeight: 0,
        boxSizing: "border-box",
      }}
    >
      {items.length === 0 && (
        <Paper
          elevation={0}
          sx={{
            height: "96%",
            width: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            border: "4px solid #E58F7C",
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "text.secondary",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            No Tasks Yet..🐹🎉
          </Typography>
        </Paper>
      )}

      <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            handleLineThrough={handleLineThrough}
            isDone={isDone}
            editingId={editingId}
            editText={editText}
            setEditText={setEditText}
            startEditing={startEditing}
            saveEdit={saveEdit}
          />
        ))}
      </ul>
      <div ref={bottomRef}></div>
    </div>
  );
}

export default ToDoList;
