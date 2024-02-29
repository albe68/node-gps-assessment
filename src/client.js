const axios = require("axios");
const config = require("./config");
const SERVER_URL = `http://localhost:${config}/api/v1/pvt-data/submit`;
// Sample packet data
const packetData = {
  packetType: "NR",
  currentDate: "14122022",
  currentTime: "172946",
  lat: "31.589618",
  latDirection: "N",
  lng: "75.875231",
  lngDirection: "E",
  speed: "0",
  ignitionStatus: "0",
  mainInputVoltage: "12.2",
};

const packetStringData1 =
  "$PVT,VNDR,FIRMWAREVER1.0,NR,1,L,860260051760232,PB01BV2345,1,14122022,172946,31.589618,N,75.875231,E,0,117.58,39,286.7,0.42,0.43,BHARAT,0,1,12.2,4.1,0,C,12,404,53,16C7,E4C2,2138,700000,29,2137,700000,21,2136,700000,21,968A,70000,19,0000,0000,00,0,492894,00AC*";
const packetStringData2 =
  "$PVT,VNDR,FIRMWAREVER1.0,NR,1,L,860260051760232,PB01BV2345,1,14122022,172946,31.589618,N,75.875231,E,0,117.58,39,286.7,0.42,0.43,BHARAT,0,1,12.2,4.1,0,C,12,404,53,16C7,E4C2,2138,700000,29,2137,700000,21,2136,700000,21,968A,70000,19,0000,0000,00,0,492894,00AC*";
const PVTPacketData = `${packetStringData1} \n ${packetStringData2}`;

// Send the packet to the server
axios
  .post(SERVER_URL, { PVTPacketData })
  .then((response) => {
    console.log("Server response:", response.data);
  })
  .catch((error) => {
    console.error("Error sending packet:");
  });
