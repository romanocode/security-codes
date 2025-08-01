import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }){
    const [state, setState] = React.useState({

        value : '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,

    });
    
    const onConfirm = () => {
        setState({
                        ...state,
                        error: false,
                        loading: false,
                        confirmed: true,
                    });

    };

    const onError = () =>{
        setState({
                         ...state,
                        error: true,
                        loading: false,
                    });
    };

   const onWrite = (newValue) => {
    setState({
        ...state,
        value: newValue
    });
};

    const onCheck = () => {
        setState({
                     ...state,
                    loading: true,
                });
    };

const onDelete = () => {
    setState ({
                    ...state,
                    deleted: true,

                });
};

const onReset = () => {
    setState ({
                    ...state,
                    confirmed: false,
                    deleted: false,
                    value: '',

                });
}


    React.useEffect(() => {
        console.log("Empezando el efecto")

        if(!!state.loading){
            setTimeout(() => {
                console.log("Haciedno la validacion")
                
                if(state.value===SECURITY_CODE) {
                    onConfirm();
                }else {
                   onError (); 
                }
                

                console.log("terminando la validacion")
            }, 3000);
        }
        console.log("terminando el efecto")
    }, [state.loading]);


   if (!state.deleted && !state.confirmed) {
     return(
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribe el còdigo de seguridad.</p>

                {(state.error && !state.loading ) && (
                    <p>Error: el código es incorrecto</p>
                )}

                 {state.loading && (
                    <p>Cargando...</p>
                )}

            <input 
            placeholder="Código de seguridad"
            value={state.value}
            onChange={(event) => {
                onWrite(event.target.value);
            }}
            />
            <button
            onClick={() => { 
                onCheck();
            }}
            >
            Comprobar
            </button>
        </div>
    );
   }else if (!state.deleted && !!state.confirmed) {
    return (
        <React.Fragment>
            <p>Pedimos confirmacion. ¿Estas Segurx?</p>

            <button
            onClick={()=> {
                onDelete();
            }}
            >
                Si eliminar
            </button>

            <button
            onClick={()=> {
                setState ({
                    ...state,
                    confirmed: false,
                    value: '',

                });
            }}
            >
                Nop, me arrepenti.
            </button>
        </React.Fragment>
    );
   } else {
    return (
        <React.Fragment>
            <p>Eliminado con éxito</p>

            <button
            onClick={()=> {
                onReset();
            }}
            >
                Resetear, volver atrás
            </button>
        </React.Fragment>
    );
   }
}

export {UseState};