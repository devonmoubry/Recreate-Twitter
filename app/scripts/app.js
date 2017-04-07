import { createStore, applyMiddleware } from 'redux'
import thunk from './middleware/thunk.js'
import logger from './middleware/logger.js'
import loginView from './views/login_view.js'
import signupView from './views/signup_view.js'
import feedView from './views/feed_view.js'
import profileView from './views/profile_view.js'
import tweetView from './views/tweet_view.js'
//import exampleView from './views/example_view.js'


export default function app() {

    const initialState = {
      username: null,
      usertoken: null,
      view: signupView,
      tweets: []
    }

    const reducer = function (state, action) {
        if (state === undefined) {
          return initialState;
        }

        switch (action.type) {
            case "START":
                return state;

            case "SIGNING_UP":
                console.log('Hi there');
                $.ajax({
                  type: 'POST',
                  url: 'https://api.backendless.com/v1/users/register',
                  headers: {
                    "application-id": "24B65924-C870-5359-FF6E-4A5396B35700",
                    "secret-key": "BFBB0F72-782B-9CF9-FF71-D0C15271A900",
                    "Content-Type": "application/json",
                    "application-type": "REST"
                  },
                  data: JSON.stringify({
                    "email": action.email,
                    "password": action.password,
                    "name": action.fullname
                  }),
                  success: function (data, status, xhr) {
                    console.log(data);
                    var usertoken = data['']

                  }
                });
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
