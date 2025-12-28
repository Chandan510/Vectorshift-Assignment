import React from 'react'

export const TextInput = ({title,onChange, placeholder='', type = "text" }) => {
    return (
        <div>
            <label className="flex flex-col gap-1.5">
                <span className="node-label">{title}</span>
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="mb-1 bg-[#0F172A] border border-[#334155] text-white text-xs rounded-lg px-3 py-2 outline-none focus:border-[#A78BFA] cursor-pointer appearance-none"
                />

            </label>
        </div>
    )
}

