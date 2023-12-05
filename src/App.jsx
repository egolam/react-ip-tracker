import { useState } from "react";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Map } from "./components/Map";
import { IpContext } from "./contexts/IpContext";
import { useFetch } from "./hooks/useFetch";

function App() {

  const [userIp, setUserIp] = useState("");
  const { ip, location, isp } = useFetch(userIp);

  return (
    <>
      <IpContext.Provider value={{ userIp, setUserIp, ip, location, isp }}>
        <Header />
        <Info />
        {location && <Map />}
      </IpContext.Provider>
    </>
  )
}

export default App
