import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      family: {
        Poppins: string;
        Roboto: string;
      };
      size: {
        headings: Record<"h1" | "h2" | "h3" | "h4", Array<string, string>>;
        paragraphs: Record<"xxsm" | "xsm" | "sm" | "md", Array<string, string>>;
      };
    };
    limits: {
      content: string;
    };
    colors: {
      primary: {
        solid: string;
        weak: string;
      };
      secondary: {
        solid: string;
        weak: string;
      };
      third: {
        solid: string;
        weak: string;
      };
      light: {
        solid: string;
        weak: string;
      };
      success: {
        solid: string;
        weak: string;
      };
      danger: {
        solid: string;
        weak: string;
      };
    };
  }
}
