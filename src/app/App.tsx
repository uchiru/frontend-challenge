import AppRouter from "@/routes/AppRouter";
import { AppProvider } from "./AppProvider";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
