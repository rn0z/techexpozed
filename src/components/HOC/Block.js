import React from 'react';
const Block = (props) => {
    return (
        <div className={props.classes} >
            <section>
                {props.children}
            </section>
        </div>
    )
}

export default Block;
