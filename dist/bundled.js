import { Hono } from "hono";
import { compress } from "hono/compress";
import { prettyJSON } from "hono/pretty-json";

//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
};

//#endregion
//#region src/env.ts
var env_exports = {};
__export(env_exports, { config: () => config });
const config = { test: true };

//#endregion
//#region src/index.ts
console.log(env_exports);
const app = new Hono();
app.use("*", compress({ encoding: "gzip" }), prettyJSON({ space: 4 }));

//#endregion