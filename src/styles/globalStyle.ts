import { css } from "@emotion/react";
import "./reset.css";

export const globalStyle = css`
  html {
    font-family: "LeferiBaseType-RegularA";
    font-size: 62.5%;
    width: 100%;
    height: 100%;
  }
  body {
    height: 100%;

    & > div {
      height: 100%;
    }
  }

  @font-face {
    font-family: "LeferiBaseType-RegularA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiBaseType-RegularA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "LeferiBaseType-BoldA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiBaseType-BoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "LeferiPoint-WhiteA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
