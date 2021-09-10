import { Link, useHistory } from "react-router-dom";
import { Avatar, Container, Containerfull, Header, BtnAvatar, BtnProfile } from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { useStoreRegister } from "../../providers/store-register";
import ModalStore from "../../components/ModalStore";

const AdminProfile = () => {
    const {showModalStore, setShowModalStore, storeRegister} = useStoreRegister();
    console.log(showModalStore)
    const history = useHistory();

   const sendTo = (path: string) => {
        history.push(path);
   }

    return (
        <Containerfull>
            {showModalStore && <ModalStore />}
        <Container>
        <Link to = '/admin-dashboard' > <img src = {arrowLeft} alt = 'voltar' /></Link>
        <BtnAvatar>Foto do perfil</BtnAvatar>
        </Container>
        <Avatar>
        <img src = 'https://i.pravatar.cc/150' alt = 'perfil' />
        </Avatar>
        <Header />
        <h3>Olá, <span>ADMIN</span> </h3>
        <h4>email@admin.com</h4>
        <BtnProfile onClick = {()=> sendTo('/stores')}> Lojas Cadastradas</BtnProfile>
        <BtnProfile onClick = {()=> setShowModalStore(true)}>Cadastrar Loja</BtnProfile>
        <BtnProfile onClick = {()=> sendTo('/finances')}>Relatórios Financeiros</BtnProfile>
        </Containerfull>
    )

}

export default AdminProfile;