import { Records } from "../../interfaces/RecordEntitites";
import { RecordEditProps } from "../../interfaces/PagesProps";
import { RecordForm } from "./Form";
import { Button } from "@mui/material";

export const RecordEdit = <T extends Records>({
    FormFields,
    activeRecords,
    update,
    apaga,
    success,
}: RecordEditProps<T>) => {
    return (
        <div className="edit">
            <Button onClick={() => apaga(activeRecords)}>Apagar</Button>
            <h2>Atualização</h2>
            <RecordForm FormFields={FormFields} activeRecords={activeRecords} submitAction={update} success={success} />
        </div>
    )
}