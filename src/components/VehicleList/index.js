import React from "react";
import useData from "./useData";
import VehicleCard from "./vehicleCard";

export default function VehicleList() {
    // eslint-disable-next-line no-unused-vars
    const [loading, error, vehicles] = useData();

    if (loading) {
        return <div data-testid="loading">Loading</div>;
    }

    if (error) {
        return <div data-testid="error">{error}</div>;
    }

      console.log(vehicles);


    return (
        <div data-testid="results" id="vehicle-list">
            <div className="full-bleed">
                <div className="articles__grid">
                 <div className="cards">
                   {vehicles
                    .filter((car) => car.price)
                    .map((car) => (
                        <div key={`${car.id}`} className="col col-3 cards__card">
                            <VehicleCard
                                media={car.media}
                                name={car.id}
                                price={car.price}
                                description={car.description}
                                model={car.modelYear}
                                bodystyles={car.meta.bodystyles}
                                drivetrain={car.meta.drivetrain}
                                seats={car.meta.passengers}
                                emissions={car.meta.emissions.value}
                            />
                        </div>
                    ))}
            
            
                 </div>
                </div>
            </div>
        </div>
    );
}
