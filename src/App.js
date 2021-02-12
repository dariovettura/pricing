import React, { useEffect, useState } from "react";
import "./style.scss";

import Button from "react-bootstrap/Button";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div className="container-fluid cont-cards ">
        <div className="row row-cards ">
          <div className="col-lg-4 margin  ">
            <motion.div
              className="card col-xs-6 col-lg-4 col-6 "
              whileHover={{
                scale: 1.05,
                zIndex: 100,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <h2 className="title">Basic</h2>
              <h3 className="price">
                $25 <span>/mo</span>
              </h3>

              <table className="table">
                <tbody>
                  <tr>
                    <td className="feature">Costumaizer</td>
                    <td className="duration">14 days trial</td>
                  </tr>
                  <tr>
                    <td className="feature">Chat history</td>
                    <td className="duration">No</td>
                  </tr>
                  <tr>
                    <td className="feature">Statistics</td>
                    <td className="duration">14 days trial</td>
                  </tr>
                  <tr>
                    <td className="feature">Support</td>
                    <td className="duration">Yes</td>
                  </tr>
                  <tr>
                    <td className="feature">Live support</td>
                    <td className="duration">No</td>
                  </tr>
                </tbody>
              </table>

              <Button className="start">Get Started</Button>
            </motion.div>
          </div>
          <div className="col-lg-4 margin ">
            <motion.div
              className="card col-xs-6 col-lg-4 col-6"
              whileHover={{
                scale: 1.05,
                zIndex: 100,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              {" "}
              <h2 className="title">Professional</h2>
              <h3 className="price">
                $39 <span>/mo</span>
              </h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td className="feature">Costumaizer</td>
                    <td className="duration">Yes</td>
                  </tr>
                  <tr>
                    <td className="feature">Chat history</td>
                    <td className="duration">3 months</td>
                  </tr>
                  <tr>
                    <td className="feature">Statistics</td>
                    <td className="duration">3 months</td>
                  </tr>
                  <tr>
                    <td className="feature">Support</td>
                    <td className="duration">Yes</td>
                  </tr>
                  <tr>
                    <td className="feature">Live support</td>
                    <td className="duration">Yes</td>
                  </tr>
                </tbody>
              </table>
              <Button className="start">Get Started</Button>
            </motion.div>
          </div>
          <div className="col-lg-4 margin  ">
            <motion.div
              className="card col-xs-6 col-lg-4 col-6"
              whileHover={{
                scale: 1.05,
                zIndex: 100,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <h2 className="title">Team</h2>
              <h3 className="price">
                $75 <span>/mo</span>
              </h3>

              <table className="table">
                <tbody>
                  <tr>
                    <td className="feature">Costumaizer</td>
                    <td className="duration">Yes</td>
                  </tr>
                  <tr>
                    <td className="feature">Chat history</td>
                    <td className="duration">1 year</td>
                  </tr>
                  <tr>
                    <td className="feature">Statistics</td>
                    <td className="duration">1 year</td>
                  </tr>
                  <tr>
                    <td className="feature">Support</td>
                    <td className="duration">Yes</td>
                  </tr>
                  <tr>
                    <td className="feature">Live support</td>
                    <td className="duration">Yes</td>
                  </tr>
                </tbody>
              </table>

              <Button className="start">Get Started</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
