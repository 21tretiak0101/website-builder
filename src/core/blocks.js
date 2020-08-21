import {col, row, stylesAsString} from '@root/utils/utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHtml() {
    throw new Error('This method must be implemented');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {tag, styles} = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {alt, styles, imageStyles} = this.options;
    const imageStyle = stylesAsString(imageStyles);
    const html = `
         <img src="${this.value}" alt="${alt}" style="${imageStyle}"/>
     `;
    return row(html, styles);
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {tag, styles} = this.options;
    return row(col(`
    <${tag} style="margin-bottom: 0">${this.value}</${tag}>
    `), styles);
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {tag, styles} = this.options;
    const html = this.value.map(val => col(`<${tag}>${val}</${tag}>`));
    return row(html.join(''), styles);
  }
}
