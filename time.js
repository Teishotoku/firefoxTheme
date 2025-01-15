function searchWithStartpage(event) {
  if (event.key === "Enter" && event.target.value !== "") {
    window.location =
      "https://www.duckduckgo.com/?q=" + event.target.value + "&t=ffab&ia=web";
  }
}
