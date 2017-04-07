export default function profileView( store ) {
  console.log('This is the user profile view.');

  let $html = $(`
    <section class="profile-view">
      <header class="profile-header">
        <i class="fa fa-user-circle-o fa-4x" aria-hidden="true"></i>
        <h3>Your Name</h3>
        <i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
      </header>
      <section class="user-tweets-container">
      <h2>Tweets</h2>
      </section>
    </section>
  `);

  return $html;
}
