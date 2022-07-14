import { Pessoa } from "../../interfaces/RecordEntitites";
import { RecordIndex } from '../Records';
import { PessoaListItem } from './ListItem';
import { PessoaFormFields } from './FormField';

export const PessoaIndex: React.FC = () => {
    const apiOptions = { relations: ['']};

    const emptyRecord = {
        nome: '',
        idade: 0,
        periodo: '',
        tipo_curso: '',
    }

    return (
        <RecordIndex<Pessoa>
            ListItem={PessoaListItem}
            apiPath="pesssoa"
            apiOptions={apiOptions}
            FormFields={PessoaFormFields}
            emptyRecord={emptyRecord}
        />
    );
};