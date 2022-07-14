import { useEffect } from "react";
import { Records } from "../../interfaces/RecordEntitites";
import { RecordFormProps } from '../../interfaces/PagesProps';
import { useForm } from "../../hooks/useForm";

export const RecordForm = <T extends Records>({
    FormFields,
    activeRecords,
    submitAction,
    success,
}: RecordFormProps<T>) => {
    const { formState, setFormState, handleChange, handleSubmit } = useForm<T>(activeRecords, submitAction);

    useEffect(() => {
        if (activeRecords.id || success){
            setFormState(activeRecords);
        }
    }, [setFormState, activeRecords, success])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormFields formState={formState} handleChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    );
};