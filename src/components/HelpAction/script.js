import { defineComponent } from 'vue';
import Vuex from 'vuex';
import store from '../../store/index'

export default defineComponent({
  name: 'HelpAction',
  computed: {
    ...Vuex.mapGetters(["getState"])
  },
  props: {

  },
  data() {
    return {
      optionMenuVisible: false,
      data: [
        {
          name: "Contact Support",
          link: "https://www.delighttech.com/contact-us"
        },
        {
          name: "Accessibility Statement",
          link: "https://www.delighttech.com/accessibility-statement"
        },
        {
          name: "Frequently Asked questions",
          link: "https://www.delighttech.com/faq"
        },
        {
          name: "User manual"
        }
      ],
    }
  },
  methods: {
    toggleOptionMenu() {
      this.optionMenuVisible = !this.optionMenuVisible;
    },
    close(e) {
      var needHelp = document.querySelector('#needHelp');

      if (!needHelp?.contains(e.target)) {
        this.optionMenuVisible = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },
});