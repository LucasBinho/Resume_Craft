import { Controller, useFormContext } from "react-hook-form"
import { IconInput } from "."
import { FieldWrapper } from "../field-wrapper";

type IconFieldProps =  {
    label: string;
    name: string;
    containerClassName?: string;
    required?: boolean;
    defaultValue?: string; 
}

export const IconField = ({ label, name, required, containerClassName, defaultValue = "linkedin", ...props }: IconFieldProps) => {
    const { control } = useFormContext();
// pega dados externos do componente usando apide contextos do react

    return(
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            rules={{
                required: required && "Campo obrigatório",
            }}
            render={({ field, fieldState }) => (
                <FieldWrapper label={label} className={containerClassName} error={fieldState?.error}>
                    <IconInput {...props} {...field} />
                </FieldWrapper>
            )}
        />
    )
}