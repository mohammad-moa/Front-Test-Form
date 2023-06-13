import { ThemeProvider, createTheme } from "@mui/material";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import "./App.css";
import Home from "./page/Home";
import { green } from "@mui/material/colors";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazirmatn",
  },
  palette: {
    primary: {
      main: green["500"],
    },
    secondary: {
      main: "#80E8D0",
    },
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <Home />
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
