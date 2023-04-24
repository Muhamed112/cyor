$(function () {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.tab;

  $("#myTab")
    .find("a[id=" + value + "]")
    .tab("show");
});
