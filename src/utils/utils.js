export function row(content, styles) {
  const style = `margin: 0; ${stylesAsString(styles)}`;
  return `
    <div class="row" style="${style}">
        ${content}
    </div>
`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

export const DEFAULT_STYLES = {};

export function stylesAsString(styles = DEFAULT_STYLES) {
  return Object
      .keys(styles)
      .map(key => `${camelToDashCase(key)}: ${styles[key]};`)
      .join(' ');
}

function camelToDashCase(str) {
  return str.split(/(?=[A-Z])/).join('-').toLowerCase();
}

