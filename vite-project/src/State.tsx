import  { useState } from "react";
import { Link } from "react-router-dom";

const State = () => {
    const [name, setName] = useState<string>("Jhon");

    const handleName = () => {
        setName("Doe");
    };

    return(
        <>
            <h1 className="text-2xl font-bold">Testing State</h1>
            <br />
            <button
                onClick={handleName}
                className="py-2 px-16 bg-black rounded-md text-lime-500 text-xl font-medium"
            >
                {name}
            </button>
            <Link
                to={"/PagesTwo"}
                className="py-2 px-16 bg-black rounded-md text-lime-500 text-xl font-medium"
            >
                Pindah
            </Link>
        </>
    );
};


export default State