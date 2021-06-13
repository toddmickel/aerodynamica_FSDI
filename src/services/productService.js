import axios from "axios";

var data = [
  {
    code: "alt",
    image: "altimeter.png",
    title: "Analog Altimeter",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 500.5,
    minimum: 1,
    category: "Avionics",
  },
  {
    code: "rivet",
    image: "aviation_rivet.png",
    title: "Aviation Rivet",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 0.1,
    minimum: 100,
    category: "Structural",
  },
  {
    code: "g500",
    image: "G500_TXi.png",
    title: "Garmin 500 TXi",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 1999.99,
    minimum: 1,
    category: "Avionics",
  },
  {
    code: "gtrain",
    image: "G1000_DesktopTrainer.png",
    title: "Garmin 1000 Desktop Trainer",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 3299.99,
    minimum: 1,
    category: "Training",
  },
  {
    code: "gi275",
    image: "GI_275_ADI.png",
    title: "GI 275 ADI",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 4000.0,
    minimum: 1,
    category: "Avionics",
  },
  {
    code: "vhfradio",
    image: "IC-A220T_VHF.png",
    title: "IC-A220T VHF Radio",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 1500.0,
    minimum: 1,
    category: "Avionics",
  },
  {
    code: "told",
    image: "TOLD_Card.jpg",
    title: "Single Engine TOLD Card",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 0.05,
    minimum: 100,
    category: "Pilot Tools",
  },
];

/**
 * Server endpoint and functionality
 *
 * GET
 * /api/products  => get everyone's products
 * /api/products/<yourName>  -> get your products
 *
 * POST
 * /api/products => save products onto the DB
 *
 * DELETE
 * /api/products/clear/<yourName> => delete your prods from DB
 *
 **/

class ProductService {
  serverUrl = "https://fsdiapi.azurewebsites.net";

  async getCatalog() {
    // connect to a server (implemented in 109)
    let response = await axios.get(this.serverUrl + "/api/products/ToddMickel");
    return response.data;
  }

  async seedData() {
    // send data from array on the top of the file to the server
    for (let i = 0; i < data.length; i++) {
      let prod = data[i];
      prod.name = "ToddMickel";
      await axios.post(this.serverUrl + "/api/products", prod);
    }
  }

  async clearData() {
    await axios.delete(this.serverUrl + "/api/products/clear/ToddMickel");
  }
}

export default ProductService;
