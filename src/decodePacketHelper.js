const moment = require("moment");
const config = require("./config");
// Function for decoding PVT packets
function decodePktHelper(packet) {
    // Split the packet into its components
    const fields = packet.split(",");
    console.log("Packet Type:", fields[3]);
  
    // Extract information
    const information = {
      packetType: fields[3], //4
      currentDate: formatDate(fields[9], config.DATE_FORMAT), 
      currentTime: formatTime(fields[10].split(" ")[0], config.TIME_FORMAT), // Extract time before whitespace
      lat: parseFloat(fields[11]), 
      latDirection: fields[12], 
      lng: parseFloat(fields[13]),
      lngDirection: fields[14],
      speed: parseFloat(fields[15]), 
      ignitionStatus: fields[22],
      mainInputVoltage: parseFloat(fields[24]), 
    };
    return information;
  }
  function formatDate(dateString, format) {
    return moment(dateString, "DDMMYYYY").format(format);
  }
  
  function formatTime(timeString, format) {
    return moment(timeString, "HHmmss").format(format);
  }

module.exports=decodePktHelper;