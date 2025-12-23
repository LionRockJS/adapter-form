import { FormCaptchaAdapter } from "@lionrockjs/mixin-form";
export default class FormCaptchaAdapterRecaptcha extends FormCaptchaAdapter {
    static checkEnabled(): boolean;
    static create(): Promise<{
        data: any;
        text: string;
    }>;
    static validate(state?: Map<any, any>): Promise<boolean>;
}
