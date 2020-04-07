import React from 'react'
import t from 'prop-types'

export const Usuarios = ({ children, kind }) => {
    // We use the kind prop to determine the button's class
    return <div className={kind}>{children}</div>
}
Usuarios.propTypes = {
    /**
     * This is a pretty good description for this prop.
     */
    id: t.oneOf(['number']),
    name: t.oneOf(['string']),
    lastName: t.oneOf(['string']),
    email: t.oneOf(['string']),
    gender: t.oneOf(['number']),
    type: t.oneOf(['number']),
    state: t.oneOf(['number']),
    municipality: t.oneOf(['number']),
    locality: t.oneOf(['number']),
    level_id: t.oneOf(['number']),

}
export const typeUsers = ({ children, kind }) => {
    // We use the kind prop to determine the button's class
    return <div className={kind}>{children}</div>
}
typeUsers.propTypes = {
    1: t.oneOf(['Super Administrador']),
    2: t.oneOf(['Administrador']),
    3: t.oneOf(['Paciente'])
}
export const genderUsers = ({ children, kind }) => {
    // We use the kind prop to determine the button's class
    return <div className={kind}>{children}</div>
}
genderUsers.propTypes = {
    1: t.oneOf(['Masculino']),
    2: t.oneOf(['Femenino'])
}
