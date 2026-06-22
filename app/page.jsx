import fs from "node:fs/promises";
import path from "node:path";

function extract(html, tag) {
  const match = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return match ? match[1] : "";
}

export default async function Page() {
  const filePath = path.join(process.cwd(), "index.html");
  const html = await fs.readFile(filePath, "utf8");
  const styles = extract(html, "style");
  const body = extract(html, "body");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
