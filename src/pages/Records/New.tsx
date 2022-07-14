import { Records } from "../../interfaces/RecordEntitites";
import { RecordNewProps } from "../../interfaces/PagesProps";
import { RecordForm } from './Form';

export const RecordNew = <T extends Records>({
    FormFields,
    activeRecords,
    create,
    success,
}: RecordNewProps<T>) => {
    return (
        <div className="new">
        <h2>NOVO ESTUDANTE</h2>
        <RecordForm FormFields={FormFields} activeRecords={activeRecords} submitAction={create} success={success} />
        </div>
    );
};