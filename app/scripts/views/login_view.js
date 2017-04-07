export default function loginView( store ) {
  let state = store.getState();

  let $html = $(`

    <section class="login-view" id=login-view>
      <a href="#" value="">Have an account? Log in.</a>
      <section class="login-dropdown" id=login-dropdown>
        <p>Have an account?</p>
        <form for="log-in">
          <input type="text" id="username" placeholder="username"></input>
          <input type="text" id="password" placeholder="password"></input>
          <input type="submit" value="Log in"></input>
          <button><a href="#">Sign up</a></button>
        </form>
      </section>
    </section>

  `);

  return $html;

}
