import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }){
    const [value, setValue] = React.useState(""); 
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log("Empezando el efecto")

        if(!!loading){
            setTimeout(() => {
                console.log("Haciedno la validacion")
                
                if(value===SECURITY_CODE) {
                    setLoading(false);
                }else {
                    setError(true);
                    setLoading(false);
                }
                

                console.log("terminando la validacion")
            }, 3000);
        }
        console.log("terminando el efecto")
    }, [loading]);


    return(
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribe el còdigo de seguridad.</p>

                {error && (
                    <p>Error: el código es incorrecto</p>
                )}

                 {loading && (
                    <p>Cargando...</p>
                )}

            <input 
            placeholder="Código de seguridad"
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
            }}
            />
            <button
            onClick={() => setLoading(true)}
            >
            Comprobar
            </button>
        </div>
    );
}

export {UseState};