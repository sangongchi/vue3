import { createApp } from 'vue';
const app = createApp({});

let limitInput = app.directive('limitInput', (el, binding) => {
  el.addEventListener('keyup', () => {
    console.log('触发keyup事件');
  });
});

export default limitInput;
