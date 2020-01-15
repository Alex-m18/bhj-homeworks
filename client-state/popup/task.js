function doOnce(callback) {
  if (
    document.cookie.replace(
      /(?:(?:^|.*;\s*)subcribeShown\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    ) !== "true"
  ) {
    callback.apply(this, arguments);
    document.cookie =
      "subcribeShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
}

let showSubscribe = function() {
  let subscribeElement = document.getElementById("subscribe-modal");
  subscribeElement.classList.add("modal_active");
  subscribeElement.addEventListener("click", function(e) {
    this.classList.remove("modal_active");
  });
};

showSubscribe = doOnce(showSubscribe);

showSubscribe();
