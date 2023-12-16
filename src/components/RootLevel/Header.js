import { createApp } from 'vue/dist/vue.esm-bundler';
import DarkMode from '../DarkMode';

const initHeader = () => {
  const headerApp = createApp({
    template: `
      <nav>
        <ul style="display: flex; list-style: none; gap: 10px; margin: 0; padding: 0;">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </nav>
      <dark-mode />
    `,
  });

  headerApp.component('dark-mode', DarkMode);

  headerApp.mount('#header');

  return headerApp;
};

export default initHeader;
