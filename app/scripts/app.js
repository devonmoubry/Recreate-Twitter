import { createStore, applyMiddleware } from 'redux'
import thunk from './middleware/thunk.js'
import logger from './middleware/logger.js'
import loginView from './views/login_view.js'
import signupView from './views/signup_view.js'
import feedView from './views/feed_view.js'
//import exampleView from './views/example_view.js'

export default function app() {

    const initialState = {
      view: signupView
    }

    const reducer = function (state, action) {
        if (state === undefined) {
          return initialState;
        }

        switch (action.type) {
            case "START":
                return state;

            default:
                console.debug(`Unhandled Action: ${action.type}!`);
                return state;
        };
    };

    const store = createStore(
        reducer,
        applyMiddleware(
            thunk,
            logger
        )
    );

    const render = function () {
      let state = store.getState();
      $('#app').html(state.view(store));
    }

    store.subscribe(render);
    store.dispatch({ type: "START" })

}
