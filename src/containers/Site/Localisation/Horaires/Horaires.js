import React from 'react'

const Horaires = (props) => {
    let content = props.horaires.map((horaire,index)=> {
    return <li> Du {horaire.du} au {horaire.au} - De {horaire.heures[0].de} à {horaire.heures[0].a}</li>
    })
    return (
        <div>
            <ul>
                {content}
            </ul>
        </div>
    )
}

export default Horaires
