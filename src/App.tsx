import "./App.css";
import { AppProviders } from "./components/providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";
import { Users } from "./components/users/users";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
