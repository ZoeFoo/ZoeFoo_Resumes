import React from 'react';

const PersonalQualities = ({ characterList }) => {
    const characters = characterList.split('\n').map((character, i) => <div key={i}>{character}</div>);
    return (
        <div>
            <div>
                <h2>PERSONAL QUALITIES</h2>
            </div>

            <div>
                <div>{characters}</div>
            </div>
        </div>
    )
};

export default PersonalQualities;