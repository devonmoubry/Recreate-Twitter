export  default function signupView ( store ) {

  let state = store.getState();

  let $html = $(`
    <section class="signup-container" id="signup-container">
      <h2>Join Twitter today.</h2>
        <form>
          <input type="text" placeholder="full name"></input>
          <input type="text" placeholder="valid email"></input>
          <input type="password" placeholder="create password"></input>
          <input type="submit" value="Sign up"></input>
        </form>
    </section>
  `)

  return $html;
}
