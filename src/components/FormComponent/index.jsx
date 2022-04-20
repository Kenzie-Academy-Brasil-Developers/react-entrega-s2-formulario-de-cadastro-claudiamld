import { useForm } from "react-hook-form"
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useHistory } from "react-router-dom";
import { Button, Form, Input, Container } from "./styles";

const FormComponent = ({users, setUsers}) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Nome inválido!")
            .required("Campo obrigatório!"),
        email: yup
            .string()
            .email("Email inválido!")
            .required("Campo obrigatório!"),
        password: yup
            .string()
            .min(8, "A senha precisa ter no mínimo 8 caracteres!").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 
        "A senha deve conter pelo menos uma letra maiúscula, um número e um caracter especial!")
            .required("Campo obrigatório!"),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref("password")], "Senhas não correspondentes!")
            .required("Campo obrigatório!")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(formSchema)})

    const onRegister = (user) => {
        setUsers([...users, user])
        console.log(users);
        history.push(`/homepage/${user.name}`)
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit(onRegister)}>
                <h1>Crie sua conta</h1>
                <Input placeholder="Nome" {...register("name")} />
                <span>{errors.name?.message}</span>
                <Input placeholder="Email" {...register("email")} />
                <span>{errors.email?.message}</span>
                <Input placeholder="Senha" {...register("password")} />
                <span>{errors.password?.message}</span>
                <Input placeholder="Confirmar senha" {...register("passwordConfirm")} />
                <span>{errors.passwordConfirm?.message}</span>
                <Button type="submit">CADASTRAR</Button>
            </Form>
        </Container>
    )
}
export default FormComponent