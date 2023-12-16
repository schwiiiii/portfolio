import { createApp } from 'vue/dist/vue.esm-bundler';

const initHeader = () => {
  const mainApp = createApp({
    template: `
      <div class="content-wrapper">
        <h1>Hello, I'm Brett</h1>
        <p>I'm a Senior Frontend Web Developer, and this is where I plan to host some personal projects.</p>
        <h4>Coming Soon</h4>
        <ol>
          <li>Dark Mode Toggle</li>
          <li>SSFP (Searchable, Sortable, Filterable, Paginated) Datatable</li>
          <li>D3 Interactive Charts &amp; Maps</li>
          <li>Various CSS Artboards...</li>
          <li>and much more!</li>
        </ol>
      </div>
    `,
  });

  mainApp.mount('#main');

  return mainApp;
};

export default initHeader;
