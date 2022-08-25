import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export const CalendarApp = () => {
  return (
    <BrowserRouter>
      <Provider>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
}

