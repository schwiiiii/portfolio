import { computed } from 'vue'

export default {
  props: {
    icon: Object
  },
  setup(props) {
    const viewBox = computed(() => `0 0 ${props.icon.icon[0]} ${props.icon.icon[1]}`)
    const path = computed(() => props.icon.icon[4])

    return { viewBox, path }
  },
  template: `
    <svg version="1.1"
      height="1em"
      width="1em"
      :viewBox="viewBox"
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:ev="http://www.w3.org/2001/xml-events"
    >
      <path :d="path" fill="currentColor"></path>
    </svg>
  `
}