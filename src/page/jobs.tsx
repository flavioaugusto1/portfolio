import { Card } from "../components/Card";
import LogoFortics from "../assets/logoFortics.jpeg";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Jobs() {
  const navigate = useNavigate();

  function handleBackNavigate() {
    navigate("/");
  }

  return (
    <div className="max-w-screen-xl m-auto pt-8 pb-24 space-y-16 px-4 animate-appears">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-zinc-800 text-2xl">
            Experências de trabalho
          </h1>
          <Button name="Voltar" onClick={handleBackNavigate} />
        </div>
        <span className="text-lg">
          Nessa página você poderá encontrar experiências profissionais minhas,
          seja elas as que estou no momento ou empresas que já tenha passado. Em
          cada card haverá um descritivo sobre minha função na determinada
          empresa.
        </span>
      </div>

      <div className="grid gap-20 items-start lg:grid-cols-2">
        <Card
          description="“Na Fortics trabalho como Técnico de Suporte Pleno para o SZ.chat que
          é uma plataforma de atendimento Omnichannel. Nesse trabalho atuo com a
          parte de integrações para clientes com outros sistemas como ERP's para envios de
          boletos através do Whatsapp, abertura de chamados ou desbloqueio de
          conexão”"
          enterprise="Fortics Tecnologia LTDA"
          date="2021 - até o momento"
          logo={LogoFortics}
        />
      </div>
    </div>
  );
}
