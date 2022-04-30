import articles from "./articles";

const index = document.querySelector("div#articles");

console.log(index);

Object.values(articles).forEach((article) => {
	index.innerHTML += 
	`<div class="w-auto h-40 border-black-100 border-2 rounded-md">
		<a href="./${article.name}.html">${article.title}</a>
	</div>
	`;
});
