import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} style={{ scrollBehavior: "smooth" }}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.5.0/css/all.css'
          integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap'
          rel='stylesheet'
        />
        {props.headComponents}

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-YKR9XSCXGZ'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-YKR9XSCXGZ');
          
          `,
          }}
        />
      </head>
      <body style={{ margin: "0" }} {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
