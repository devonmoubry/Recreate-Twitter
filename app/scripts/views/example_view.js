export default function exampleView(store) {
  let state = store.getState();

  //Create the HTML
  let $html = $(`<section><h2>Check the tweets</h2></section>`);

  //Assign any event listeners


  //Return the html
  return $html;
}
