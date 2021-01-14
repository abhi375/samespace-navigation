import { useState } from "react";
import { motion } from "framer-motion";

import "./App.scss";
import Nav from "./Nav";

function App() {
  const [accent, setAccent] = useState("#0057ff");
  const [iconStyle, setIconStyle] = useState("lined");
  const [labelHoverStyle, setLabelHoverStyle] = useState("floating");
  const [tooltipBackground, setToolTipBackground] = useState("black");
  const [themePresets] = useState([
    "#1F84E6",
    "#0057ff",
    "#1024f0",
    "#0F409F",
    "#000",
    "#3772FF",
  ]);

  const [iconColor, setIconColor] = useState("#fff");

  const handleAccentChange = (event) => {
    setAccent(event.target.value);
  };

  return (
    <div className="App">
      <Nav
        accent={accent}
        labelHoverStyle={labelHoverStyle}
        iconStyle={iconStyle}
        iconColor={iconColor}
        tooltipBackground={tooltipBackground}
      />

      <section className="page">
        <div className="page-wrapper">
          <div className="card">
            <h1>Customize the Appearance</h1>

            <p className="section-heading">Theme</p>
            <div className="themes">
              {themePresets.map((theme, index) => {
                return (
                  <motion.div
                    initial={{ backgroundColor: theme }}
                    whileTap={{ scale: 0.96 }}
                    key={index}
                    onClick={() => setAccent(theme)}
                    className="color-box"
                  ></motion.div>
                );
              })}
              <input
                value={accent}
                className="input"
                type="text"
                placeholder="eg. #000"
                onChange={handleAccentChange}
              />
            </div>
            <hr className="divider" />
            <div className="columns">
              <div>
                <p className="section-heading">Icon Style</p>
                <div className="switcher">
                  <div
                    className={`switcher-option ${
                      iconStyle === "lined" ? "active" : ""
                    }`}
                    onClick={() => setIconStyle("lined")}
                  >
                    Lined
                  </div>
                  <div className={`switcher-seperator`} />
                  <div
                    className={`switcher-option ${
                      iconStyle === "solid" ? "active" : ""
                    }`}
                    onClick={() => setIconStyle("solid")}
                  >
                    Solid
                  </div>
                </div>
              </div>
              <div>
                <p className="section-heading">Icon Color</p>
                <div className="switcher">
                  <div
                    className={`switcher-option ${
                      iconColor === "#fff" ? "active" : ""
                    }`}
                    onClick={() => setIconColor("#fff")}
                  >
                    White
                  </div>
                  <div className={`switcher-seperator`} />
                  <div
                    className={`switcher-option ${
                      iconColor === "#000" ? "active" : ""
                    }`}
                    onClick={() => setIconColor("#000")}
                  >
                    Black
                  </div>
                </div>
              </div>
            </div>

            <hr className="divider" />

            <div className="columns">
              <div>
                <p className="section-heading">Label on hover</p>
                <div className="switcher">
                  <div
                    className={`switcher-option ${
                      labelHoverStyle === "floating" ? "active" : ""
                    }`}
                    onClick={() => setLabelHoverStyle("floating")}
                  >
                    Floating
                  </div>
                  <div className={`switcher-seperator`} />
                  <div
                    className={`switcher-option ${
                      labelHoverStyle === "inline" ? "active" : ""
                    }`}
                    onClick={() => setLabelHoverStyle("inline")}
                  >
                    Inline
                  </div>
                </div>
              </div>
              <div>
                {labelHoverStyle === "floating" && (
                  <>
                    <p className="section-heading">Tooltip Background Color</p>
                    <div className="switcher">
                      <div
                        className={`switcher-option ${
                          tooltipBackground === "black" ? "active" : ""
                        }`}
                        onClick={() => setToolTipBackground("black")}
                      >
                        Black
                      </div>
                      <div className={`switcher-seperator`} />
                      <div
                        className={`switcher-option ${
                          tooltipBackground === "accent" ? "active" : ""
                        }`}
                        onClick={() => setToolTipBackground("accent")}
                      >
                        Accent
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <hr className="divider" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
