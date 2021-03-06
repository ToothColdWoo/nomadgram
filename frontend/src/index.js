import React from "react";
import ReactDOM from "react-dom";
import App from 'components/App';
import { Provider } from "react-redux";
import store, { history } from "./redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import I18n from 'redux-i18n'
import { translations } from "translations"

const rootElement = document.getElementById("root");

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
            <I18n translations={translations} initialLang="en" fallbackLang="en">
				<App />
            </I18n>
		</ConnectedRouter>
	</Provider>,
rootElement);