import { computed } from 'vue';
import * as homeConfig from '../config/zh/home.js';
import * as commentsConfig from '../config/zh/comments.js';
import * as showcasesConfig from '../config/zh/showcases.js';
import * as faqsConfig from '../config/zh/faqs.js';

const configs = {
  home: homeConfig,
  comments: commentsConfig,
  showcases: showcasesConfig,
  faqs: faqsConfig,
};

export function localeConfig(key) {
  return computed(() => {
    if (configs[key] && configs[key][key]) {
      return configs[key][key];
    }
    return {};
  });
}
