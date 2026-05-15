import { useState } from "react";
import ToDoInput from "../Components/ToDoInput";
import ToDoList from "../Components/ToDoList";
import useTodos from "../Hooks/useTodos";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import useTodoEditor from "../Hooks/useTodoEditor";

function TodoPage() {
  const [inputText, setInputText] = useState("");
  const {
    items,
    isDone,
    addItem,
    deleteItem,
    handleLineThrough,
    updateItem,
    deleteCompleted,
  } = useTodos();

  const { editingId, editText, setEditText, startEditing, saveEdit } =
    useTodoEditor(updateItem);

  function handleClick() {
    addItem(inputText);
    setInputText("");
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      if (inputText.trim() === "") return;
      handleClick();
    }
  }

  return (
    <div>
      <Box
        sx={{
          p: 3,
          pt: 4,
          minHeight: "calc(100dvh - 48px)",
          overflow: "hidden",
          touchAction: "manipulation",
          bgcolor: "background.default",
          boxSizing: "border-box",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            height: "100%",
            minHeight: 0,
          }}
        >
          <Header deleteCompleted={deleteCompleted} />

          {/*Input Section*/}
          <ToDoInput
            onChange={handleChange}
            value={inputText}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          />

          <Typography
            variant="h5"
            align="left"
            sx={{ fontWeight: 700, color: "text.primary" }}
          >
            To Do
          </Typography>

          {/* ToDo List Section */}
          <ToDoList
            items={items}
            deleteItem={deleteItem}
            handleLineThrough={handleLineThrough}
            isDone={isDone}
            editor={{
              editingId,
              editText,
              setEditText,
              startEditing,
              saveEdit,
            }}
          />
        </Stack>
      </Box>

      <div
        style={{
          position: "fixed",
          bottom: "-10px",
          right: "-10px",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20px",
            right: "clamp(90px, 20vw, 250px)",
            backgroundColor: "white",
            color: "#023FA1",
            padding: "8px 14px",
            borderRadius: "16px",
            fontSize: "clamp(11px, 2vw, 14px)",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            whiteSpace: "nowrap",
            transition: "all 0.25s ease-in-out",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";

            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(229,143,124,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px) scale(1)";

            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
        >
          Keep Going..🐾✨
          {/* bubble tail */}
          <div
            style={{
              position: "absolute",
              bottom: "-6px",
              left: "20px",
              width: "12px",
              height: "12px",
              backgroundColor: "white",
              transform: "rotate(45deg)",
            }}
          />
        </div>

        {/*Grass Image*/}
        <img
          src="/Grass.png"
          alt=""
          style={{
            position: "absolute",
            bottom: "30px",
            right: "30px",
            width: "clamp(100px, 20vw, 220px)",
            opacity: 0.9,
          }}
        />

        {/*Bunny Image*/}
        <img
          src="/Bunny.png"
          alt=""
          style={{
            position: "relative",
            bottom: "10px",
            right: "10px",
            width: "clamp(160px, 40vw, 400px)",

            height: "auto",
            objectFit: "contain",
            zIndex: 1000,
            pointerEvents: "none",
            animation: "float 3s ease-in-out infinite",
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default TodoPage;
