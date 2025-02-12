import { ComponentProps } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { Input } from "."
import { FieldWrapper } from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
    label: string;
    name: string;
    containerClassName?: string;
}

export const InputField = ({ label, name, required, containerClassName, ...props }: InputFieldProps) => {
    const { control } = useFormContext();
// pega dados externos do componente usando apide contextos do react

    return(
        <Controller
            control={control}
            name={name}
            rules={{
                required: required && "Campo obrigatório",
            }}
            render={({ field, fieldState }) => (
                <FieldWrapper label={label} className={containerClassName} error={fieldState?.error}>
                    <Input {...props} {...field} />
                </FieldWrapper>
            )}
        />
    )
}