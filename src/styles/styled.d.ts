import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primary_darker: string;
      primary_text: string;

      background: string;
      background_text: string;
    };
  }
}
