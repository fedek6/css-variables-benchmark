import { replaceInFile } from "replace-in-file";

export const replaceStatic = async (
  filePath: string,
  colors: string[],
  reuseFactor = 2
) => {
  let css = "";
  let html = "";
  let outputHtml = "";

  colors.forEach((v, i) => {
    const className = `colored-${i}`;

    css += `.${className} {
      background-color: ${v};
    }\n`;

    html += `<div class="${className}"><span>${v}</span></div>`;
  });

  // Reuse same colors
  for (let i = 0; i < reuseFactor; i++) {
    outputHtml += html;
  }

  await replaceInFile({
    files: filePath,
    from: [/\{\{css\}\}/g, /\{\{html\}\}/g],
    to: [css, outputHtml],
  });

  return true;
};
