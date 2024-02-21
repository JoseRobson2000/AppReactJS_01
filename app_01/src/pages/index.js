import CustomCheckbox from "@/components/CustomCheckbox";
import CustomInputLabel from "@/components/CustomInputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import SubTitulo from "@/components/SubTitulo";
import Titulo from "@/components/Titulo";


export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <CustomInputLabel id ="txtNome" texto="Nome"col="8"/>
        <CustomInputLabel id ="txtPreco" texto="Preco"col="4"/>
        <CustomTextAreaLabel id ="textDescricao" texto="Descricao" col="12"/>
        <CustomInputLabel id ="txtImagem" texto="Imagem"col="12"/>
        <CustomCheckbox id= "txtNovidade" texto="Novidade" col="6"/>
        <CustomCheckbox id= "txtDisponivel" texto="Disponivel" col="6"/>

      </div>
      
    </div>
  );
}
