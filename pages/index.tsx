import { NextPage } from "next";
import Card from "../components/Card";
import { Title } from "../components/Typography";

const HomePage: NextPage = () => {

  return (
    <div style={{ width: "100vw", height: "100vh", display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
      <Title level={1}>Good Luck!</Title>
      <div style={{ width: "50vw" }}>
        <Card>
          {/* AUTOCOMPLETE GOES HERE */}
        </Card>
      </div>
    </div>
  )
}

export default HomePage