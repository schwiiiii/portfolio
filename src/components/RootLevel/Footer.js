import { createApp, ref } from 'vue/dist/vue.esm-bundler';
import { faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import FontAwesomeIcon from '../FontAwesomeIcon';

const initFooter = () => {
  const footerApp = createApp({
    setup() {
      return { faCodepen, faLinkedin }
    },
    template: `
      <menu class="footer-nav">
        <li>
          <a
            href="https://codepen.io/schwiiiii"
            target="_blank"
            title="External link in a new tab to my Codepen profile"
          ><font-awesome-icon :icon="faCodepen" />Schwiiiii</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/brett-schwickerath/"
            target="_blank"
            title="External link in a new tab to my LinkedIn profile"
          ><font-awesome-icon :icon="faLinkedin" />brett-schwickerath</a>
        </li>
      </menu>
    `,
  });

  footerApp.component('font-awesome-icon', FontAwesomeIcon)

  footerApp.mount('#footer');

  return footerApp;
};

export default initFooter;
