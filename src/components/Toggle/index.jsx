import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const Toggle = () => {
  const { isLigthTheme, handleLightTheme } = useContext(ThemeContext);
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Dark Mode</Typography>
      <Switch
        checked={isLigthTheme}
        onChange={handleLightTheme}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Typography>Light Mode</Typography>
    </Stack>
  );
};

export default Toggle;
