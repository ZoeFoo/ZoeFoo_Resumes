import React from 'react';

const Language = ({ cantonese, english, mandarin }) => {
    return (
        <div>
            <div>
                <p>Cantonese: {cantonese}</p>
            </div>

            <div>
                <p>English: {english}</p>
            </div>

            <div>
                <p>Mandarin: {mandarin}</p>
            </div>
        </div>
    )
}

export default Language;