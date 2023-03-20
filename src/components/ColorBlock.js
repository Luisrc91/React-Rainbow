import React from 'react'

function ColorBlock(props){
    return (
        <div >
            <div className="colorBlock gridItem"
                 style={{'backgroundColor': props.color}}>
                <p className='colorProp'>{props.color}</p>
            </div>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
