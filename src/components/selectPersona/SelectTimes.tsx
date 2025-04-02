import React from "react"

interface SelectProps{
    name: string,
    className: string,
    value: string,
    onChange: (Event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: {label: string; value: string}[];
}

export default function SelectTimes({name,className,value,onChange,options}: SelectProps){
    return(
        <div>
            <select name={name} className={className} value={value} onChange={onChange}>
                <option value="" disabled>
                    Escolha a sua Equipe
                </option>

                { options.map((option)=> (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                
            </select>
        </div>
    )
}