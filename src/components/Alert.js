import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        // Lower the whole string
        var lower = word.toLowerCase();

        // Convert the first aplhabet to upper and concat with other lower chars in the word except first
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }


  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}>
                            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                            
                        </div>


  )
}
