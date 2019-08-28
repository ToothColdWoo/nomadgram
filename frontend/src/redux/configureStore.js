import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import users from "./modules/users";
import Reactotron from "ReactotronConfig";
import { i18nState} from "redux-i18n";

const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

// 콘솔에 출력되는 이유는 아마 Provider 설정 때문?
const env = process.env.NODE_ENV;
console.log("env : ", env);

if (env === "development") {
	const { logger } = require("redux-logger");
	middlewares.push(logger);
}

const reducer = combineReducers({
    users,
    router: connectRouter(history),
    i18nState
});

// let store = initialState =>
// 	createStore(reducer, applyMiddleware(...middlewares));

let store;

if (env === "development") {
	store = initialState =>
	createStore(reducer, compose(applyMiddleware(...middlewares),Reactotron.createEnhancer()));
} else {
	store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };
export default store();