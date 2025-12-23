declare module '@lionrockjs/central' {
  export const Central: any;
}

declare module '@lionrockjs/mixin-form' {
  export class FormCaptchaAdapter {
    static checkEnabled(): boolean;
    static create(): Promise<{data: any, text: string}>;
    static validate(state: Map<string, any>): Promise<boolean>;
  }
  export const ControllerMixinMultipartForm: {
    POST_DATA: string;
  };
}

declare module '@lionrockjs/mvc' {
  export const Controller: {
    STATE_CLIENT_IP: string;
  };
}

declare module 'svg-captcha' {
  const svgCaptcha: any;
  export default svgCaptcha;
}
