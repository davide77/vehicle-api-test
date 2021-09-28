import React from "react";
import ReactDOM from "react-dom"; 
 
 
const Modal = ({ 
    visible,
    toggle,
    name,
    media,
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
                  
                      <div className="modal-container">
                          <header className="modal-container__header">
                          <div className="icon close" onClick={toggle}>Close</div>
                          <img src={media[1].url} alt={name} />
                            
                            </header>
                          <main className="modal-container__main">
                                <div className="modal-container__content">
                                  <p className="title">Model</p>
                                  <p className="desc" data-testid="test-modal--price" >
                                      {name}
                                  </p>
                                </div>
                                <div className="modal-container__content">
                                  <p className="title">Price (from)</p>
                                  <p className="desc" data-testid="test-modal--price" >
                                      {price}
                                  </p>
                                </div>
                                <div className="modal-container__content">
                                  <p className="title">Body style</p>
                                  <p className="desc" data-testid="test-modal--bodystyles" >
                                      {bodystyles.toString()}
                                  </p>
                                  </div>
                                <div className="modal-container__content">
                                  <p className="title">Drive Train</p>
                                  <p className="desc" data-testid="test-modal--drivetrain" >
                                      {drivetrain.toString()}
                                  </p>
                                  </div>
                                <div className="modal-container__content">
                                  <p className="title">Seats</p>
                                  <p className="desc" data-testid="test-modal--seats" >
                                      {seats}
                                  </p>
                                </div>
                                <div className="modal-container__content">
                                <p className="title">CO2 Emissions </p>
                                  <p className="modal-emissions" data-testid="test-modal--emissions" >
                                      {emissions}
                                  </p>
                                </div>
                          </main> 
                      </div>
                  </div>
                  <div className="modal-overlay"></div>
              </div>,
              document.body
          )
        : null;

export default Modal;
