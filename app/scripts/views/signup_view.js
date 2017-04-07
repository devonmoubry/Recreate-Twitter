export  default function signupView ( store ) {

  let state = store.getState();

  let $html = $(`
    <section class="signup-container" id="signup-container">
      <h2>Join Twitter today.</h2>
        <form id="sign-up">
          <input type="text" id="fullName" placeholder="full name" ></input>
          <input type="text" id="email" placeholder="valid email" value="@example.com"></input>
          <input type="password" id="password" placeholder="create password" value="password"></input>
          <input type="submit" value="Sign up"></input>
        </form>
    </section>
  `)

  $html.find('#sign-up').on('submit', (event) => {
    event.preventDefault();
    console.log('I can sign up now');
    var fullname = event.target.elements.fullName.value;
    var email = event.target.elements.email.value;
    var password = event.target.elements.password.value;
    store.dispatch({ type: "SIGNING_UP", fullname: fullname, email: email, password: password })
  });

  return $html;
}
