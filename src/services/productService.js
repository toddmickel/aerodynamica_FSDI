// mock data below:
var data = [
  {
    id: 123001,
    code: "alt",
    image: "altimeter.jpg",
    title: "Analog Altimeter",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 500.5,
    minimum: 1,
    category: "Analog Avionics",
  },
  {
    id: 123002,
    code: "rivet",
    image: "aviation_rivet.jpg",
    title: "Aviation Rivet",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 0.1,
    minimum: 100,
    category: "Structural",
  },
  {
    id: 123003,
    code: "g500",
    image: "G500_TXi.jpg",
    title: "Garmin 500 TXi",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 1999.99,
    minimum: 1,
    category: "Digital Avionics",
  },
  {
    id: 123004,
    code: "gtrain",
    image: "G1000_DesktopTrainer.jpg",
    title: "Garmin 1000 Desktop Trainer",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 3299.99,
    minimum: 1,
    category: "Training",
  },
  {
    id: 123005,
    code: "gi275",
    image: "GI_275_ADI.jpg",
    title: "GI 275 ADI",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 4000.0,
    minimum: 1,
    category: "Digital Avionics",
  },
  {
    id: 123006,
    code: "vhfradio",
    image: "IC-A220T_VHF.jpg",
    title: "IC-A220T VHF Radio",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 1500.0,
    minimum: 1,
    category: "Digital Avionics",
  },
  {
    id: 123007,
    code: "told",
    image: "TOLD_Card.jpg",
    title: "Single Engine TOLD Card",
    description: "Product description goes here. Several lines of text for each item, including plain language description and any limitations to airframes.",
    price: 0.05,
    minimum: 100,
    category: "Pilot Tools",
  },
];

class ProductService {
  getCatalog() {
    // connect to a server (implemented in 109)
    // read the catalog from there

    // For 108: use mock data
    return data;
  }
}

export default ProductService;
