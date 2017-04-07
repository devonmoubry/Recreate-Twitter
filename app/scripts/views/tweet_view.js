export default function ( store ) {
  console.log('This is a tweet view');

  //edit and delete dropdown conditional upon ownership
  let $html = (`
    <section class="tweet-view">
      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
      <p class="username">User name</p>
      <p class="tweet-text">Something fascinating.</p>
      <p class="timestamp">The date and time</p>
      <section class="edit-delete" id="edit-delete">
        <p>Edit</p>
        <p>Delete</p>
      </section>
    </section>
  `);

  return $html;
}
