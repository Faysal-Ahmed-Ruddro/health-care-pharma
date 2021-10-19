import React from 'react';
import error from "../../images/error.jpg"

const NotFound = () => {
    return (
        <div>
            <div >
                <img className="w-75" src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;