$().ready(() => {
  $("p[class=a]").append("yahoo");
  $("p[class=a]").prepend("yahoo");
  $("p[class=a]").appendTo("#example p:last");
  $("p[class=a]").prependTo("#example p:nth-child(4)");
  // $("#example p").each((index, element) => {
  //   element.after("<p>--</p>");
  //   element.before("</o>");
  // });
});

$("<p>hi freinds</p>").insertAfter("#example p");
$("<p>hi freinds</p>").insertBefore("p[class=a]");
$("#example p").wrap("<div style='color:red'></div>"); // self ex.
$("#example p").wrapAll("<div style='color:red'></div>"); // self ex.
$("div .change").empty();

// wrap
