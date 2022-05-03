import { Transformer } from "@parcel/plugin";
import { JSDOM } from "jsdom";
import { marked } from "marked";
import frontMatter from "front-matter";
import path from "path";
import { writeFile, readFile, existsSync, mkdir } from "fs";
import { promisify } from "util";
import MarkdownAttributes from "./MarkdownAttributes";

const [writeFileAsync, mkdirAsync] = [promisify(writeFile), promisify(mkdir)];

export default new Transformer({
	async transform({ asset, logger }) {
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

		const titleElement = document.querySelector("h1#title");

		if (titleElement) {
			titleElement.innerHTML = `${attributes.title}`;
		} else {
			console.log(
				`Could not find element with id 'title' in template default.html. Generating page without title.`
			);
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

		if (!existsSync(config.distPath)) {
			logger.info({ message: "Dist folder dont exists, creating..." });
			await mkdirAsync(config.distPath);
		}

		await writeFileAsync(
			`${config.distPath}/${attributes.name}.html`,
			finalHtml
		);

		asset.type = "js";
		asset.setCode(`const attributes = {${Object.entries(attributes)
			.map((item) => `${item[0]}:'${item[1]}',`)
			.join("")}};
		export default attributes;`);

		// Return the asset
		return [asset];
	},
});
