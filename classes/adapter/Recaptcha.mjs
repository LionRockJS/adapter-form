import {Central} from "@lionrockjs/central";
import {ControllerMixinMultipartForm, FormCaptchaAdapter} from "@lionrockjs/mod-form";
import querystring from "node:querystring";
import {Controller} from "@lionrockjs/mvc";
import axios from "axios";

export default class FormCaptchaAdapterRecaptcha extends FormCaptchaAdapter {
  static checkEnabled() {
    return Central.config.lead.recaptcha?.site_key
  }

  static async verify(state= new Map()) {
    const $_POST = state.get(ControllerMixinMultipartForm.POST_DATA);

    const recaptcha = await axios.post('https://www.google.com/recaptcha/api/siteverify',
      querystring.stringify({
        secret: Central.config.lead.recaptcha.secret,
        response: $_POST['grecaptcha'],
        remoteip: state.get(Controller.STATE_CLIENT_IP),
      })
    )

    return !(!recaptcha.data.success || recaptcha.data.score < 0.5);
  }
}