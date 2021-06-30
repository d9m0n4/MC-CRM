import { css } from './utils';

const template = (data) => `
  <div class="tooltip-title">${data.title}</div>
  <ul class="tooltip-list">
    ${data.items
      .map((item) => {
        return `<li class="tooltip-list-item">
        <div class="value" style="color: ${item.color}">${item.value}</div>
        <div class="name" style="color: ${item.color}">${item.name}</div>
      </li>`;
      })
      .join('\n')}
  </ul>
`;

export function tooltip(el) {
  const clear = () => (el.innerHTML = '');
  return {
    show({ left, top }, data) {
      console.log(width);
      clear();
      css(el, {
        display: 'block',
        top: 0,
        right: 0,
      });
      el.insertAdjacentHTML('afterbegin', template(data));
    },
    hide() {
      css(el, { display: 'none' });
    },
  };
}

//   return {
//     show({ left, top, width }, data) {
//       // const { height, width } = el.getBoundingClientRect();
//       clear();
//       css(el, {
//         display: 'block',
//         top: 0,
//         right: 0,
//         width: `${width}px`,

//       });
//       el.insertAdjacentHTML('afterbegin', template(data));
//     },
//     hide() {
//       css(el, { display: 'none' });
//     },
//   };
// }
