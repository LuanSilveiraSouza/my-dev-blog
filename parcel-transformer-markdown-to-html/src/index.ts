import { Transformer } from "@parcel/plugin";
import { writeFile } from 'fs';
import { promisify } from 'util';
const writeFileAsync = promisify(writeFile)

export default new Transformer({
	async transform({ asset, config, logger, options, resolve }) {
		let source = await asset.getCode();
		console.log(source);
		
		// options.inputFS.writeFile(`${__dirname}/test.md`, source, null);
		await writeFileAsync(`${__dirname}/test.md`, source);

		// Return the asset
		return [asset];
	},
});