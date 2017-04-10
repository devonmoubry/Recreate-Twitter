import tweetView from './tweet_view.js'

export default function feedView( store ) {

  let state = store.getState();

  let name = state.name;

  let $html = $(`
    <section class="feed-view-container">
      <header class="feed-header" id="feed-header">
        <i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
        <form id="send-tweet">
          <input type="text" id="tweet" placeholder="What's happening?"></input>
          <button type="submit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </form>
        <i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
      </header>
      <section class="profile-dropdown">
        <p>${ name }</p>
        <a href="#">View Profile</a>
        <a href="#">Logout</a>
      </section>
      <section class="feed-container" id="feed-container"></section>
    </section>
  `);

  var $tweets = tweetView(store);
  $html.find('#feed-container').append($tweets);

$html.find('#send-tweet').on('submit', (event) => {
  event.preventDefault();
  var tweet = event.target.elements['tweet'].value;
  console.log('the send tweet button works');
  store.dispatch({ type: "NEW_TWEET", tweet: tweet });
});

  return $html;
}
