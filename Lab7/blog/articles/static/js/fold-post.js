var foldBtns = document.getElementsByClassName("fold-button");
for (var i = 0; i<foldBtns.length; i++)
{
foldBtns[i].addEventListener("click", function(event)
{
console.log("you clicked ", event.target);
});
foldBtns[i].addEventListener("click", function(e) {
    event.target
        .parentElement
        .getElementsByClassName('article-author')[0]
        .style.display = "none";
    event.target
        .parentElement
        .getElementsByClassName('article-created-date')[0]
        .style.display = "none";
    event.target
        .parentElement
        .getElementsByClassName('article-text')[0]
        .style.display = "none";
    e.target.innerHTML = "развернуть";
});

}
