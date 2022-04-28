import { Transformer } from "@parcel/plugin";
import { JSDOM } from "jsdom";
import { marked } from "marked";
import frontMatter from "front-matter";
import path from "path";
import { writeFile, readFile, existsSync, mkdir } from "fs";
import { promisify } from "util";

const [writeFileAsync, readFileAsync, mkdirAsync] = [
	promisify(writeFile),
	promisify(readFile),
	promisify(mkdir),
];

export default new Transformer({
	async transform({ asset, logger }) {
		const appPath = path.join(__dirname, "..", "..", "app");

		let source = await asset.getCode();
		logger.info({ message: source });
		logger.info({ message: appPath });

		const templateDom = await JSDOM.fromFile(
			`${appPath}/src/templates/default.html`
		);

		const { attributes, body } = await frontMatter(source);
		const parsedHtml = marked(body);
		const document = templateDom.window.document

    const pageContentElement = document.getElementById('page-content')

    if (pageContentElement) {
        pageContentElement.innerHTML = parsedHtml
    } else {
        console.log(
            `Could not find element with id 'page-content' in template default.html. Generating page without markdown content.`
        )
    }

		const finalHtml = document.getElementsByTagName('html')[0].outerHTML;

		if (!existsSync(`${appPath}/dist`)) {
			logger.info({ message: "Dist folder dont exists, creating..." });
			await mkdirAsync(`${appPath}/dist`);
		}

		await writeFileAsync(`${appPath}/dist/a.html`, finalHtml);

		// Return the asset
		return [];
	},
});
