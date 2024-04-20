import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/Index";
import Routes from "./routers/Index";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Routes />
        </I18nextProvider>
      </Provider>
    </div>
  );
};

export default App;
