import url from "node:url";
const dirname = url.fileURLToPath(new URL('.', import.meta.url)).replace(/\/$/, '');
export default {dirname}

import FormCaptchaAdapterSVGCaptcha from "./classes/adapter/SVGCaptcha.mjs";

export {
  FormCaptchaAdapterSVGCaptcha,
};
