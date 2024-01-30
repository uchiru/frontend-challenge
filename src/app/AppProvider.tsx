import { Provider } from "react-redux";
import { store, persistor } from "@/app/store";
import { PersistGate } from "redux-persist/integration/react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
