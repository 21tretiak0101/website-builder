import '@root/styles/main.css';
import {model} from '@root/core/model';

const website = document.querySelector('#website');

model.forEach(block => {
  website.insertAdjacentHTML('beforeend', block.toHtml());
});


