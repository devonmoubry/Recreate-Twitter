export default function feedView( store ) {
  let state = store.getState();

let name = state.name;

  let $html = $(`
    <section class="feed-view-container">
      <header class="feed-header" id="feed header">
        <i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
        <input type="text" placeholder="What's happening?"></input>
        <i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
      </header>
      <section class="profile-dropdown">
        <p>${ name }</p>
        <a href="#">View Profile</a>
        <a href="#">Logout</a>
      </section>
      <section class="feed-container" id="feed-container">
      </section>
    </section>
  `);



  return $html;
}
