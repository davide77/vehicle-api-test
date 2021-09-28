import React from "react";
import ReactDOM from "react-dom"; 
 
 
const Modal = ({ 
    visible,
    toggle,
    name,
    price,
    model, 
    bodystyles,
    drivetrain,
    seats,
    emissions,
}) =>
    visible
        ? ReactDOM.createPortal(
              <div className="modal">
                  <div className="modal-pop" role="dialog" aria-modal="true">

                      <div className="modal-table">
                          <header>
 
                                   <div className="modal-props" data-testid="test-modal--model" 
                                  />
                                       Model year {model}
                            </header>
                          <main>
                              
                                  <div>Price (from)</div>
                                  <div
                                      className="modal-props"
                                      data-testid="test-modal--price"
                                  >
                                      {price}
                                  </div>
                              
                              
                                  <div>Body style</div>
                                  <div
                                      className="modal-props"
                                      data-testid="test-modal--bodystyles"
                                  >
                                      {bodystyles.toString()}
                                  </div>
                              
                              
                                  <div>Drivetrain</div>
                                  <div
                                      className="modal-props"
                                      data-testid="test-modal--drivetrain"
                                  >
                                      {drivetrain.toString()}
                                  </div>
                              
                              
                                  <div>Seats</div>
                                  <div
                                      className="modal-props"
                                      data-testid="test-modal--seats"
                                  >
                                      {seats}
                                  </div>
                              
                              
                                  <div
                                      colSpan="2"
                                      className="modal-emissions"
                                      data-testid="test-modal--emissions"
                                  >
                                      CO2 Emissions {emissions} g/km
                                  </div>
                              
                          </main>
                          <footer onClick={toggle}>
                              
                                  <div colSpan="2">Close</div>
                              
                          </footer>
                      </div>
                  </div>
                  <div className="modal-overlay"></div>
              </div>,
              document.body
          )
        : null;

export default Modal;
