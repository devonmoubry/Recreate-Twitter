export default function loginView( store ) {
  let state = store.getState();
  console.log('You are seeing the Login View');

  let $html = $(`

    <section class="login-view" id=login-view>
      <a href="#" value="">Have an account? Log in.</a>
      <section class="login-dropdown" id=login-dropdown>
        <p>Have an account?</p>
        <form id="login">
          <input type="text" id="username" placeholder="username"></input>
          <input type="text" id="password" placeholder="password"></input>
          <input type="submit" value="Log in"></input>
        </form>
        <button><a href="#">Sign up</a></button>
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

  return $html;

}
