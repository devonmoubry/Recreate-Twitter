export default function profileView( store ) {
  console.log('This is the user profile view.');

var currentProfileName = store.getState().currentProfileName;
var tweets = store.getState().profileTweets;

  let $html = $(`
    <section class="profile-view">
      <header class="profile-header">
        <i class="fa fa-twitter fa-3x"></i>
        <i class="fa fa-user-circle-o fa-4x" aria-hidden="true"></i>
        <h3>${currentProfileName}</h3>
        <i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
      </header>
      <section class="user-tweets-container">
      <h2>Tweets</h2>
      <ul class="profile-tweets"></ul>
      </section>
    </section>
  `);

  tweets.forEach(function(tweet) {
    $html.find('.profile-tweets').append($(`
      <li>
        <p class="tweet-text">${tweet.tweet}</p>
        <p class="timestamp">${tweet.created}</p>
      </li>
    `));
  });

  return $html;
}
