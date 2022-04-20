import { useParams } from "react-router-dom";
import { Button } from "../FormComponent/styles";
import { useHistory } from "react-router-dom";
import {Background} from './styles'

const HomePage = ({users}) => {

    const params = useParams()
    const history = useHistory()

    return(
        <Background>
            <h1>Bem-vindo, {params.user}!</h1>
            <Button onClick={() => history.push('/')}>VOLTAR</Button>
        </Background>
    )
}
export default HomePage