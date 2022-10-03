import React from "react";
import { useParams } from 'react-router-dom'

const Param = () => {
    let param = useParams();
    return <p> Params ID : {param.id}</p>
};

export default Param;