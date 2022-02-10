function myFunction() {
  // Declare variables

  var input, body, filter, ul, li, i, txtValue;
  input = document.querySelector(".my-input");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".pokemons");
  li = ul.getElementsByTagName("li");
  body = document.getElementsByTagName("body");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
