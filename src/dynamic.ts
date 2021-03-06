import { replaceInFile } from "replace-in-file";

export const replaceDynamic = async (
  filePath: string,
  colors: string[],
  reuseFactor = 2
) => {
  let rootCss = "";
  let css = "";
  let html = "";
  let outputHtml = "";

  colors.forEach((v, i) => {
    const className = `colored-${i}`;
    const variableName = `--${className}`;

    rootCss += `${variableName}: ${v};\n`;

    css += `.${className} {
      background-color: var(${variableName});
    }\n`;

    html += `<div class="${className}"><span>${v}</span></div>`;
  });

  css = `:root {
    ${rootCss}
  }\n
  ${css}`;

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
