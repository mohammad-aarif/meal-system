import React from 'react';
import MealLog from './MealLog'
import AddMeal from './AddMeal'

const MealDash = () => {
    
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <AddMeal />
                </div>
                <div className="col-md-6">
                    <MealLog />
                </div>
            </div>
        </div>
    );
};

export default MealDash;