import SafeEnvironment from "ui/components/feedback/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade."
        }
      />
      <UserInformation
        name={"Bryan da Silva Bruzinga"}
        picture={"https://github.com/bryanbruzinga.png"}
        rating={3}
        description={"Apucarana"}
      />
    </div>
  );
}
