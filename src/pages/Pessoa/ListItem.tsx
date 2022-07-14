import { Pessoa } from "../../interfaces/RecordEntitites";
import { ListItemProps } from "../../interfaces/PagesProps";

type IProps = ListItemProps<Pessoa>;

export const PessoaListItem: React.FC<IProps> = ({ record }) => {
    return(
        <div>
            <div className="nome">{record.nome}</div>
            <div className="curso">{record.tipo_curso}</div>
            <div className="periodo">{record.periodo}</div>
        </div>
    )
}