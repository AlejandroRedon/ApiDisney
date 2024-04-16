import React, { useState, useEffect } from 'react';

function Personaje() {
    const [personaje, setPersonaje] = useState();
    const [currentId, setCurrentId] = useState(308); // ID inicial

    useEffect(() => {
        fetch(`https://api.disneyapi.dev/character/${currentId}`)
            .then((resp) => resp.json())
            .then((datos) => {
                // console.log(datos);
                setPersonaje(datos);
            });
    }, [currentId]);

    const handleNext = () => {
        setCurrentId(currentId + 1); // Avanzar al siguiente ID
    };

    return (
        <div>
            {personaje && (
                <div>
                    <p>ID: {personaje.data._id}</p>
                    <p>Nombre: {personaje.data.name}</p>
                    {personaje.data.imageUrl && (
                        <img src={personaje.data.imageUrl} alt={personaje.data.name} />
                    )}
                </div>
            )}
            <button onClick={handleNext}>Siguiente</button>
        </div>
    );
}

export default Personaje;

