import { FormCaptchaAdapter } from "@lionrockjs/mixin-form";
export default class FormCaptchaAdapterRecaptcha extends FormCaptchaAdapter {
    static checkEnabled(): boolean;
    static validate(state?: Map<any, any>): Promise<boolean>;
}
