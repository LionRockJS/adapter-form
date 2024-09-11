import {Controller} from "@lionrockjs/mvc";
import {Central} from "@lionrockjs/central";
import {ControllerMixinMultipartForm, FormCaptchaAdapter} from "@lionrockjs/mixin-form";
import svgCaptcha from "svg-captcha";
import crypto from "node:crypto";
const md5 = crypto.createHash('md5');

export default class FormCaptchaAdapterRecaptcha extends FormCaptchaAdapter {
  static SALT = Central.adapter.process().env.SVGCAPTCHA_SALT;
  static checkEnabled() {
    return true;
  }

  static async create() {
    const captcha = svgCaptcha.create();
    return {
      data: captcha.data,
      text: md5.update(captcha.text + this.SALT ).digest('hex')
    }
  }

  static async verify(state= new Map()) {
    const $_POST = state.get(ControllerMixinMultipartForm.POST_DATA);
    const hash = md5.update($_POST['captcha'] + this.SALT).digest('hex');
    return hash === $_POST['captcha-sign'];
  }
}