import React from "react";
import MainImage from "./coverImage";
import Modal from "./Modal";
import useModal from "./useModal";



let VehicleCard = ({
    media,
    name,
    price,
    description,
    model,
    bodystyles,
    drivetrain,
    seats,
    emissions,
}) => {
    const { toggle, visible } = useModal();

    return (
        <div className="cards__card-wrapper" data-testid="test-vehicle-card">
            <MainImage media={media} name={name} toggle={toggle} />
            <div className="cards__content-container">
                {name && ( 
                    <h1
                        className="cards__title"
                        data-testid="test-vehicle-card--title"
                    >
                        {`${name}`}
                    </h1>
                )}
                {price && (
                    <p
                        className="cards__price"
                        data-testid="test-vehicle-card--price"
                    >
                        From {price}
                    </p>
                )}
                {description && (
                    <p
                        className="cards__desc"
                        data-testid="test-vehicle-card--description"
                    >
                        {description}
                    </p>
                )}
            </div>
            <>
                <Modal
                    visible={visible}
                    toggle={toggle}
                    media={media}
                    name={name}
                    price={price}
                    model={model}
                    bodystyles={bodystyles}
                    drivetrain={drivetrain}
                    seats={seats}  
                    emissions={emissions}
                />
            </>
        </div>
    );
};

export default VehicleCard;
