import { Records } from "../../interfaces/RecordEntitites";
import { RecordListProps } from '../../interfaces/PagesProps';
import { usePage } from "../../contexts/Page";
import { Status } from '../../components/Status';
import { RecordError } from '../../components/RecordError';

export const RecordList = <T extends Records>({
    ListItem,
    records,
    emptyRecord,
    activeRecord,
    setActiveRecord,
    loading,
    error,
}: RecordListProps<T>) => {
    const { page } = usePage();

    return(
        <div className="list">
            {error && <RecordError error={error} />}
            <div>
            <h2>{page}</h2>
            <button onClick={() => setActiveRecord(emptyRecord)}>Novo</button>
            <ul>
                {records.map((record) => (
                    <li 
                    key={record.id}
                    className={record.id === activeRecord?.id ? 'Ativo' : ''}
                    onClick={() => setActiveRecord(record)}
                    >
                        <ListItem record={record} />
                    </li>
                ))}
            </ul>
        </div>
        {loading && <Status text="Carregando..." />}
        </div>
    );
};