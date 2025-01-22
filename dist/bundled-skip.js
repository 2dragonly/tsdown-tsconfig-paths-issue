import { Hono } from "hono";
import { compress } from "hono/compress";
import { prettyJSON } from "hono/pretty-json";
import * as env from "~/env";

//#region src/index.ts
console.log(env);
const app = new Hono();
app.use("*", compress({ encoding: "gzip" }), prettyJSON({ space: 4 }));

//#endregion