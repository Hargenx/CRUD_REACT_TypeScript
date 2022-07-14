import { useFetch } from "../../hooks/useFetch";
import { FormFieldsProps } from "../../interfaces/PagesProps";
import { Pessoa } from "../../interfaces/RecordEntitites";
import { MenuItem, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from '@mui/material/Select';
import FormLabel from "@mui/material/FormLabel";
import InputLabel from '@mui/material/InputLabel';

type IProps = FormFieldsProps<Pessoa>;

export const PessoaFormFields: React.FC<IProps> = ({
  formState,
  handleChange,
}) => {
  const nomeFetch = useFetch<Pessoa>("pessoa");

  return (
    <div>
      <div>
        <div>
          <label>Nome</label>
          <TextField
            type="text"
            name="nome"
            required
            value={formState.nome}
            onChange={handleChange}
            helperText="Incorrect entry."
            variant="standard"
          />
        </div>
        <div>
          <label>Idade</label>
          <input
            type="number"
            min="18"
            name="idade"
            value={formState.idade}
            onChange={handleChange}
          />
        </div>

        <div>
          <FormControl>
            <FormLabel>Periodo</FormLabel>
            <RadioGroup
              name="periodo"
              row
              value={formState.periodo}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Manhã"
                control={<Radio required={true} />}
                label="Manhã"
              />
              <FormControlLabel
                value="Tarde"
                control={<Radio required={true} />}
                label="Tarde"
              />
              <FormControlLabel
                value="Noite"
                control={<Radio required={true} />}
                label="Noite"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div>
            <FormControl sx={{ minWidth: 250 }} required>
                <InputLabel>Curso</InputLabel>
                <Select
                    name="cursos"
                    label="curso"
                    value={formState.tipo_curso}
                >
                <MenuItem value="Presencial">Presencial</MenuItem>
                <MenuItem value="EAD">EAD</MenuItem>
                </Select>
            </FormControl>
        </div>
      </div>
    </div>
  );
};
