import { replaceInFile } from "replace-in-file";

export const replaceDynamic = async (filePath: string, colors: string[]) => {
  let rootCss = "";
  let css = "";
  let html = "";

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

  await replaceInFile({
    files: filePath,
    from: [/\{\{css\}\}/g, /\{\{html\}\}/g],
    to: [css, html],
  });

  return true;
};
