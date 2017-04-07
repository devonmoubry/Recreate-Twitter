import signupView from './signup_view.js'

export default function loginView( store ) {
  let state = store.getState();
  console.log('You are seeing the Login View');

  let $html = $(`

    <section class="login-view" id=login-view>
      <a href="#" value="">Have an account? Log in.</a>
      <i class="fa fa-twitter fa-3x"></i>
      <section class="login-dropdown" id=login-dropdown>
        <p>Have an account?</p>
        <form id="login">
          <input type="text" id="username" placeholder="email" value="frank@example.com"></input>
          <input type="password" id="password" placeholder="password" value="password"></input>
          <input type="submit" value="Log in"></input>
        </form>
        <button id="sign-up">Sign up</button>
      </section>
    </section>

  `);

  $html.find('#login').on('submit', (event) => {
    event.preventDefault();
    console.log('The login button listens');
    var username = event.target.elements.username.value;
    var password = event.target.elements.password.value;
    store.dispatch({ type: "LOGGING_IN", username: username, password: password });
  });

  $html.find('#sign-up').on('click', (event) => {
    event.preventDefault();
    console.log('The signup button listens');
    store.dispatch({ type: "SIGNUP_VIEW", view: signupView });
  });

  return $html;

}
