import { useState, useEffect } from "react";

export function usePlants() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6001/plants")
            .then((response) => response.json())
            .then((data) => setPlants(data));
    }, []);

    return [plants, setPlants];
}