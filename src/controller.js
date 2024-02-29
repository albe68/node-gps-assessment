const decodePktHelper = require("./decodePacketHelper");
const PKtController = (req, res) => {
  const { PVTPacketData } = req.body;
  if (!PVTPacketData) {
    return res.status(400).json({ error: `PVT Packet Data is required` });
  }
  const pvtPackets = PVTPacketData.split("\n");

  pvtPackets.forEach((packet) => {
    const extractedData = decodePktHelper(packet);
    if (extractedData) {
      return res.status(201).json({ message: `Data received successfully!` });
    } else {
      return res.status(400).json({ error: `Invalid PVT Packet Data` });
    }
  });
};

module.exports = PKtController;
