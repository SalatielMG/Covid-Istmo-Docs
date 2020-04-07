import React from 'react'
import t from 'prop-types'

export const Preguntas = ({ children, kind }) => {
    // We use the kind prop to determine the button's class
    return <div className={kind}>{children}</div>
}
Preguntas.propTypes = {
    /**
     * This is a pretty good description for this prop.
     */
    id: t.oneOf(['number']),
    question: t.oneOf(['string']),
    typeQuestion: t.oneOf(['number']),
    isSymptom: t.oneOf(['boolean']),
    value: t.oneOf(['number']),
    question_id: t.oneOf(['object<Pregunta> | null']),
}
Preguntas.defaultProps = {

}

export const typeQuestions = ({ children, kind }) => {
    // We use the kind prop to determine the button's class
    return <div className={kind}>{children}</div>
}
typeQuestions.propTypes = {
    /**
     * This is a pretty good description for this prop.
     */
    1: t.oneOf(['Opción Multiple']),
    3: t.oneOf(['Preguntas Múltiples']),
    2: t.oneOf(['Verdadero o Falso']),
}
