import {
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
  TitleBlock,
} from '@root/core/blocks';

export const model = [
  new TitleBlock('Title block', {
    styles: {
      color: 'red'
    },
    tag: 'h1'
  }),
  new TextBlock('text block', {
    tag: 'strong'
  }),
  new TextColumnsBlock(['column 1', 'column 2', 'column 3'], {
    styles: {
      textAlign: 'left',
      padding: '1rem'
    }
  }),
  new ImageBlock('src/assets/aws.png', {
    alt: 'aws',
    imageStyles: {
      width: '100px',
      height: '100px'
    },
    styles: {
      textAlign: 'center'
    }
  })
];
