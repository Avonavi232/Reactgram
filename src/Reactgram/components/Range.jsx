import React from 'react';

function Range({ name, value, min, max, onChange }) {
    return (
        <div className="settings">
            <label>
                <div>{name}</div>
                <div>{value}</div>
            </label>

            <input
                type="range"
                id={name}
                value={value}
                step={1}
                min={min}
                max={max}
                onChange={onChange}
            />
        </div>
    );
}

export default Range;