import React from 'react';

const Language = ({ cantonese, english, mandarin }) => {
    return (
        <div>
            <div>
                <div>Cantonese: {cantonese}</div>
            </div>

            <div>
                <div>English: {english}</div>
            </div>

            <div>
                <div>Mandarin: {mandarin}</div>
            </div>
        </div>
    )
}

export default Language;