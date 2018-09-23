import * as React from "react";
import { Component } from "react";

export default class FooterMain extends Component {
  static defaultProps = {
    isRelative: false
  };

  render() {
    const footerContainerStyle = {
      bottom: 0,
      left: 0,

      width: "100%",
      backgroundColor: "#222",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };

    const appBannerStyles = {
      width: "100%",
      fontSize: "1.2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontWeight: 300,
      letterSpacing: ".055rem",
      color: "#fff",
      cursor: "pointer",
      padding: 7,
      backgroundColor: "purple"
    },
      footerLinkStyles = {
        fontSize: ".87em",
        color: "#fff",
        padding: 3
      };

    return (
      <footer style={footerContainerStyle}>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              color: "#aaa",
              margin: "5px 0 8px",
              letterSpacing: "0.02rem",
              fontWeight: 300,
              textAlign: "center"
            }}
          >
            The Pick Up Line Network -- Let's Get Rowdy!
          </div>
          <a style={footerLinkStyles} href="/" target="_blank">
            Home
          </a>
          <a style={footerLinkStyles} href="/Terms.html" target="_blank">
            How It Works
          </a>
          <a style={footerLinkStyles} href="/Terms.html" target="_blank">
            Terms of Use
          </a>
          <a
            style={footerLinkStyles}
            href="/PrivacyPolicy.html"
            target="_blank"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    );
  }
}
