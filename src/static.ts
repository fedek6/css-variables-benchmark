import { replaceInFile } from "replace-in-file";

export const replaceStatic = async (filePath: string, colors: string[]) => {
  let css = "";
  let html = "";

  colors.forEach((v, i) => {
    const className = `colored-${i}`;

    css += `.${className} {
      background-color: ${v};
    }\n`;

    html += `<div class="${className}"><span>${v}</span></div>`;
  });

  // Reuse same colors
  html += html;

  await replaceInFile({
    files: filePath,
    from: [/\{\{css\}\}/g, /\{\{html\}\}/g],
    to: [css, html],
  });

  return true;
};
