import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }){
    const [state, dispatch] = React.useReducer(reducer, initialState);
    

    React.useEffect(() => {
        console.log("Empezando el efecto")

        if(!!state.loading){
            setTimeout(() => {
                console.log("Haciedno la validacion")
                
                if(state.value===SECURITY_CODE) {
                    dispatch ({type: actionTypes.confirm});
                }else {
                   dispatch ({type : actionTypes.error});
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
                dispatch ({type : actionTypes.write, payload : event.target.value});
                // onWrite(event.target.value);
            }}
            />
            <button
            onClick={() => { 
                dispatch ({type : actionTypes.check});
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
                dispatch ({type : actionTypes.delete});
                // onDelete();
            }}
            >
                Si eliminar
            </button>

            <button
            onClick={()=> {
                dispatch ({type : actionTypes.reset});
            //   onReset();
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
                dispatch ({type : actionTypes.reset});
                // onReset();
            }}
            >
                Resetear, volver atrás
            </button>
        </React.Fragment>
    );
   }
}

const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const actionTypes ={
    confirm : 'CONFIRM',
    error: 'ERROR',
    delete: 'DELETE',
    check: 'CHECK',
    write: 'WRITE',
    reset: 'RESET',
};

const reducerObject = (state, payload) => ({
    [actionTypes.confirm]: {
        ...state,
            error: false,
            loading: false,
             confirmed: true,
    },

    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false,
    },

    [actionTypes.write]:{
        ...state,
        value: payload,
    },

    [actionTypes.check]: {
        ...state,
        loading: true,
    },

    [actionTypes.check]: {
         ...state,
            deleted: true,
    },

    [actionTypes.reset]:{
        ...state,
            confirmed: false,
            deleted: false,
            value: '',
    },
});

const reducer = (state,action) => {
    if(reducerObject (state)[action.type]) {
        return reducerObject (state, action.payload) [action.type];
    }else {
        return state;
    }
};

export {UseReducer};