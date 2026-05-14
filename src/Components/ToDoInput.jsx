import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

function ToDoInput({onChange, value, onKeyDown, onClick}){
    return <div>
        <Paper elevation={1} sx={{ p: 2, borderRadius: 3, overflow: "hidden"  }}>
          <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
        sx={{
        flex: 1,

        "& .MuiOutlinedInput-root": {
        borderRadius: "16px",
        "& fieldset": {
        borderColor: "#011638", // 50% opacity
        },

        // ✅ hover (stronger pink)
        "&:hover fieldset": {
        borderColor: "#E58F7CCC", // ~80% opacity
        },

        // ✅ focus (same strong as hover)
        "&.Mui-focused fieldset": {
        borderColor: "#E58F7CCC",
        },

        },
        }}

          id="outlined-basic"
          variant="outlined"
          placeholder="What I have To Do Today?"
          onChange={onChange}
          value={value}
          onKeyDown={onKeyDown}
        />
        <Fab color="primary" aria-label="add" onClick={onClick}>
          <AddIcon />
        </Fab>
          </Stack>
        </Paper>
      </div>
}

export default ToDoInput;