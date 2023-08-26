import { css } from "@emotion/react";

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;

    font-size: 62.5%;
    font-weight: normal;
    font-family: "Pretendard-Regular";
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("../../static/fonts/Pretendard-Regular.woff") format("woff");
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard-Bold";
    src: url("../../static/fonts/Pretendard-Bold.woff") format("woff");
    format("woff");
    font-weight: 400;
    font-style: normal;
  }


  @font-face {
    font-family: "Pretendard-Medium";
    src: url("../../static/fonts/Pretendard-Medium.woff") format("woff");
    format("woff");
    font-weight: 400;
    font-style: normal;
  }
`;

export default reset;
