import { useEffect } from "react";
import { Records } from "../../interfaces/RecordEntitites";
import { RecordMutationsProps } from "../../interfaces/PagesProps";
import { useMutation } from "../../hooks/useMutation";
import { RecordNew } from './New';
import { RecordEdit } from './Edit';
import { Status } from '../../components/Status';
import { RecordError } from '../../components/RecordError';

export const RecordMutations = <T extends Records>({
    FormFields,
    activeRecord,
    apiPath,
    callback,
}: RecordMutationsProps<T>) => {
    const{ create, 
        update, 
        apaga, 
        processing,
        success,
        error,
        setError } = useMutation<T>(apiPath, callback);


        useEffect(() => {
            if (activeRecord.id) {
              setError(undefined);
            }
          }, [activeRecord, setError]);

    return(
        <div className="mutations">
            {error && <RecordError error={error} />}
      {activeRecord.id ? (
        <RecordEdit<T>
          FormFields={FormFields}
          activeRecords={activeRecord}
          update={update}
          apaga={apaga}
          success={success}
        />
      ) : (
        <RecordNew<T>
          FormFields={FormFields}
          activeRecords={activeRecord}
          create={create}
          success={success}
        />
      )}
      {processing && <Status text="Processando..." />}
        </div>
    );
};