declare module '@lionrockjs/central' {
  export const Central: any;
}

declare module '@lionrockjs/mixin-form' {
  export class FormCaptchaAdapter {
    static checkEnabled(): boolean;
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

declare module 'axios' {
  const axios: any;
  export default axios;
}
