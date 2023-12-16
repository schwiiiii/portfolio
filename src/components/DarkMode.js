import { computed } from 'vue/dist/vue.esm-bundler';

export default {
  setup() {
    const currentTheme = computed({
      get: () => {
        if (
          localStorage.getItem('theme')
          || window.matchMedia('(prefers-color-scheme: dark)').matches
        ) return 1;
        return 0;
      },
      set: (value) => {
        if (value) localStorage.setItem('theme', 1);
        else localStorage.removeItem('theme');
      },
    });

    return { currentTheme };
  },
  template: `
    <label>
      <input v-model="currentTheme" type="checkbox" />
    </label>
  `,
};
