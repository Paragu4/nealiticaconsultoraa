
import fs from "node:fs";
import path from "node:path";

const outputDir = ".output/public";
const base = "/nealiticaconsultoraa";

function fixHtml(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      fixHtml(fullPath);
      continue;
    }

    if (entry.name.endsWith(".html")) {
      let html = fs.readFileSync(fullPath, "utf8");

      html = html.replace(
        /(href|src)="\/(?!\/|nealiticaconsultoraa\/)/g,
        `$1="${base}/`
      );

      fs.writeFileSync(fullPath, html, "utf8");
      console.log(`Corregido: ${fullPath}`);
    }
  }
}

if (process.env.GITHUB_ACTIONS === "true") {
  fixHtml(outputDir);
  console.log("Rutas de GitHub Pages corregidas.");
}
