import {Controller} from "@lionrockjs/mvc";
import {Central} from "@lionrockjs/central";
import {ControllerMixinMultipartForm, FormCaptchaAdapter} from "@lionrockjs/mixin-form";
import svgCaptcha from "svg-captcha";
import crypto from "node:crypto";
const md5 = crypto.createHash('md5');

export default class FormCaptchaAdapterRecaptcha extends FormCaptchaAdapter {
  static checkEnabled() {
    return true;
  }

  static async create() {
    const captcha = svgCaptcha.create();
    return {
      data: captcha.data,
      text: md5.update(captcha.text + Central.config.form.svgCaptcha.salt ).digest('hex')
    }
  }

  static async verify(state= new Map()) {
    const $_POST = state.get(ControllerMixinMultipartForm.POST_DATA);
    const hash = md5.update($_POST['captcha'] + Central.config.form.svgCaptcha.salt).digest('hex');
    return hash === $_POST['captcha-sign'];
  }
}