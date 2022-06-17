import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/ui/Theme";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Outlet/>
    </ThemeProvider>
  );
}

export default App;
