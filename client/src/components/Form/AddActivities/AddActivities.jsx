import React from "react";

import NavBar from "../../NavBar/Navbar";

import estilo from "./AddActivities.module.css";

const AddActivities = () => {
    return (
        <div>
            <NavBar />
            <h2 className={estilo.form__title}>Registrar Actividad Turistica</h2>

            <form className={`${estilo.formAddActivity}`}>

                <div className={estilo.row}>
                    <div className={estilo.form__group}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" className={`${estilo.form__control_sm}`}/>
                    </div>
                    <div className={estilo.form__group}>
                        <label htmlFor="dificultad">Dificultad:</label>
                        <select name="dificultad" id="dificultad" className={`${estilo.form__select_sm}`}>
                            <option value="-1">Seleccione...</option>
                            <option value="item 1">item 1</option>
                            <option value="item 2">item 2</option>
                            <option value="item 3">item 3</option>
                        </select>
                    </div>
                </div>

                <div className={estilo.row}>
                    <div className={estilo.form__group}>
                        <label htmlFor="duracion">Duración:</label>
                        <input type="number" name="duracion" id="duracion" className={`${estilo.form__control_sm}`}/>
                    </div>
                    <div className={estilo.form__group}>
                        <label htmlFor="temporada">Temporada:</label>
                        <select name="temporada" id="temporada" className={`${estilo.form__select_sm}`}>
                            <option value="-1">Seleccione...</option>
                            <option value="item 1">item 1</option>
                            <option value="item 2">item 2</option>
                            <option value="item 3">item 3</option>
                        </select>
                    </div>
                </div>

                <div className={estilo.row}>
                    <div className={estilo.form__group}>
                        <label htmlFor="pais">Paises:</label>
                        <select name="pais" id="pais" className={`${estilo.form__select_sm}`}>
                            <option value="-1">Seleccione...</option>
                            <option value="item 1">item 1</option>
                            <option value="item 2">item 2</option>
                            <option value="item 3">item 3</option>
                        </select>
                    </div>
                </div>

                {/* <div className={estilo.row}>
                    <div className={estilo.form__group}>
                        <button>Guardar</button>
                    </div>
                </div> */}

                {/* <div className={estilo.row}>
                    <button>Guardar</button>
                </div> */}

                <button class={estilo.form__boton}>Crear actividad</button>
            </form>
        </div>
    )
}


export default AddActivities;