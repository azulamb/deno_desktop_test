import { serveDir } from "jsr:@std/http/file-server";

console.log('start');
Deno.writeTextFileSync("./log.txt", `${new Date().toISOString()}\n`);
Deno.serve((request: Request) => {
  const url = new URL(request.url);
  Deno.writeTextFileSync("./log.txt", `${request.method} ${url}\n`, { append: true });

  return serveDir(request, { fsRoot: "./docs", urlRoot: ""});
});
