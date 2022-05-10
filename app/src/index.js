import articles from "./articles";

const index = document.querySelector("div#articles");

Object.values(articles).forEach((article) => {
	const html = 
	`<a href="${article.name}.html">
		<div class="w-full h-40 p-2 border-blue-800 border-2 rounded-md 
		hover:border-4 hover:rounded-lg transition-all duration-200 ease-out
		flex flex-col">
			<div class="w-full flex flex-row justify-between items-center mb-2">
				<h2 class="text-xl font-bold text-blue-800">${article.title}</h2>
				
				<p>${article.date}</p>
			</div>
			<p class="text-sm h-full flex-1 ml-2 truncate break-words">${article.description}</p>
			<p class="font-bold self-end">Tags: ${article.tags}</p>
		</div>
	</a>
	`;
	index.innerHTML += html;
});
