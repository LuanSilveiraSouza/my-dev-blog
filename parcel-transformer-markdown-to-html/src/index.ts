import { Transformer } from "@parcel/plugin";
import { JSDOM } from "jsdom";
import { marked } from "marked";
import frontMatter from "front-matter";
import path from "path";
import MarkdownAttributes from "./MarkdownAttributes";

export default new Transformer({
	async transform({ asset }) {
		const appPath = path.join(__dirname, "..", "..", "app");
		const config = {
			templatePath: `${appPath}/src/templates/default.html`,
			indexPath: `${appPath}/src/index.html`,
			distPath: `${appPath}/dist`,
		};

		let source = await asset.getCode();

		const templateDom = await JSDOM.fromFile(config.templatePath);

		const { attributes, body } = await frontMatter<MarkdownAttributes>(
			source
		);

		const parsedHtml = marked(body);
		const document = templateDom.window.document;

		for (let index in attributes) {
			const element = document.querySelector(`#template-${index}`);

			if (element) {
				element.innerHTML = `${attributes[index as keyof MarkdownAttributes]}`;
			} 
		}

		const pageContentElement = document.getElementById("page-content");

		if (pageContentElement) {
			pageContentElement.innerHTML = parsedHtml;
		} else {
			console.log(
				`Could not find element with id 'page-content' in template default.html. Generating page without markdown content.`
			);
		}

		const finalHtml = document.getElementsByTagName("html")[0].outerHTML;

		asset.type = "html";
		asset.setCode(finalHtml);

		// Return the asset
		return [
			asset,
			{
				type: "js",
				content: `const attributes = {${Object.entries(attributes)
					.map((item) => `${item[0]}:'${item[1]}',`)
					.join("")}};
				export default attributes;`,
				uniqueKey: `${asset.id}-js`,
				bundleBehavior: "inline",
			},
		];
	},
});
