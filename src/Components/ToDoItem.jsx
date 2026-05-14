import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

function ToDoItem({
  item,
  deleteItem,
  handleLineThrough,
  isDone,
  editingId,
  editText,
  setEditText,
  startEditing,
  saveEdit,
}) {
  return (
    <li style={{ marginBottom: "8px", scrollSnapAlign: "start", }}>
      <Paper
        elevation={2}
        sx={{
          position: "relative",
          overflow: "visible",
          py: 0.5,
          px: 1.5,
          display: "inline-flex",
          width: "fit-content",
          maxWidth: "100%",
          wordBreak: "break-word",
          borderRadius: 2,

          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px) scale(1.02)",
            boxShadow: "0 10px 25px rgba(229, 143, 124, 0.25)",
            backgroundColor: "#fff5f3",
            border: "1px solid #E58F7C",
          },

          //show edit button on hover
          "&:hover .edit-btn": {
            opacity: 1,
            transform: "translateX(0)",
          },
        }}
      >
        <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
          <Checkbox
            onChange={() => setTimeout(() => deleteItem(item.id), 300)}
            sx={{
              color: "#E58F7C",

              "&:hover": {
                backgroundColor: "#E58F7C22",
              },
            }}
          />
          {editingId === item.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveEdit(item.id);
                }
              }}
              autoFocus
              style={{
                border: "1px solid #E58F7C",
                borderRadius: "8px",
                padding: "4px 8px",
                outline: "none",
                fontSize: "16px",
              }}
            />
          ) : (
            <Typography
              onClick={() => handleLineThrough(item.id)}
              style={{
                textDecoration: isDone.includes(item.id)
                  ? "line-through"
                  : "none",
                cursor: "pointer",
              }}
            >
              {item.text}
            </Typography>
          )}
        </div>
        <IconButton
          onClick={() => startEditing(item)}
          className="edit-btn"
          size="small"
          sx={{
            position: "absolute",
            right: -18,
            top: "50%",

            transform: "translateX(15px) translateY(-50%)",
            opacity: 0,

            transition: "all 0.25s ease-in-out",

            backgroundColor: "white",
            border: "1px solid #E58F7C",
            color: "text.primary",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",

            width: 34,
            height: 34,
            borderRadius: "50%",

            "&:hover": {
              backgroundColor: "#E58F7C",
              color: "white",
            },
          }}
        >
          <EditIcon fontSize="small" />{" "}
        </IconButton>
      </Paper>
    </li>
  );
}

export default ToDoItem;
