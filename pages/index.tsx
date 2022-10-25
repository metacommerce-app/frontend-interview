import axios from "axios";
import { NextPage } from "next";
import Card from "../components/Card";
import { Text, Title } from "../components/Typography";

const HomePage: NextPage = () => {

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
      <div className="logo" style={{ position: 'absolute', top: 12, left: 12 }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 6C0 2.68629 2.68629 0 6 0H30V24C30 27.3137 27.3137 30 24 30H0V6Z" fill="black" />
          <path d="M8.29688 9.36364H12.2287L14.9332 15.9545H15.0696L17.7741 9.36364H21.706V21H18.6151V14.2727H18.5241L15.9332 20.9091H14.0696L11.4787 14.2273H11.3878V21H8.29688V9.36364Z" fill="white" />
        </svg>
      </div>
      <Title level={1}>Good Luck!</Title>
      <div style={{ width: "50vw" }}>
        <Card>
          {/* AUTOCOMPLETE GOES HERE */}
        </Card>
      </div>
      <div className="footer" style={{ position: 'absolute', display: "flex", justifyContent: "space-between", bottom: 12, left: 12, right: 12 }}>
        <a href="https://www.metacommerce.app/" target="_blank" rel="noreferrer">Our website</a>
        <Text>Metacommerce 2022-2023 frontend interview</Text>
        <a href="https://twitter.com/metacommercenft" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </div>
  )
}

export default HomePage