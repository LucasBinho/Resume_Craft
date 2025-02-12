import { ComponentProps } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { Editor } from "."
import { FieldWrapper } from "../field-wrapper";

type EditorFieldProps =  {
    label: string;
    name: string;
    containerClassName?: string;
    required?: boolean;
}

export const EditorField = ({ label, name, required, containerClassName, ...props }: EditorFieldProps) => {
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
                    <Editor {...props} {...field} />
                </FieldWrapper>
            )}
        />
    )
}