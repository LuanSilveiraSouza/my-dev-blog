import articles from "./articles";

const index = document.querySelector("div#articles");

console.log(index);

Object.values(articles).forEach((article) => {
	index.innerHTML += `<div><a href="./${article.name}.html">${article.title}</a></div>`;
});
