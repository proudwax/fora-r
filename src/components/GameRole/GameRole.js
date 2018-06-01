import React from 'react';

const GameRole = (props) => {
    return props.roles.map((role, index) => {
        return (<label>
            {role.label}
            <input 
                type='radio' 
                name='role' 
                value={role.value}
            />
            </label>
        );
    });
}

export default GameRole;