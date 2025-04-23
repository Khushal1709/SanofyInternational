import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pp1 from "../image/pp1.jpg";
import pp2 from "../image/pp2.png";
import pp3 from "../image/pp3.png";
import pp4 from "../image/pp4.png";
import pp5 from "../image/pp5.png";
import pp6 from "../image/pp6.png";
import pp7 from "../image/pp7.png";
import pp8 from "../image/pp8.png";
import pp11 from "../image/pp11.png";
import pp12 from "../image/pp12.png";
import v1 from "../image/v1.png";
import v2 from "../image/v2.png";
import v3 from "../image/v3.png";
import s1 from "../image/s1.jpg";
import s2 from "../image/s2.jpg";
import s3 from "../image/s3.jpg";
import s4 from "../image/s4.avif";
import s6 from "../image/s6.jpg";
import s7 from "../image/s7.jpg";
import s8 from "../image/s8.jpg";
import s9 from "../image/s9.avif";
import s10 from "../image/s10.png";
import s11 from "../image/s11.avif";
import s12 from "../image/s12.avif";
import s13 from "../image/s13.jpg";
import Turmeric from "../image/Turmeric.avif";
import g1 from "../image/g1.png";
import g2 from "../image/g2.png";
import g3 from "../image/g3.png";
import g4 from "../image/g4.png";
import g5 from "../image/g5.png";
import g6 from "../image/g6.png";
import cotton from "../image/cotton.png";
import { Link, useLocation } from "react-router-dom";
import Bottomcontact from "./Bottomcontact";
import { CiSearch } from "react-icons/ci";  

const products = [
  {
    name: "Masur",
    desc: "A fragrant spice enhancing flavors in both sweet and savory dishes.",
    img: pp1,
    category: "PULSES",
  },
  {
    name: "Peas",
    desc: "Nutritious, high-protein beans perfect for soups, salads, and stews.",
    img: pp2,
    category: "PULSES",
  },
  {
    name: "Urad",
    desc: "A fragrant spice enhancing flavors in both sweet and savory dishes.",
    img: pp3,
    category: "PULSES",
  },
  {
    name: "Soybeans",
    desc: "Soybeans is reduce the risk of a range of health problems, including cardiovascular disease, as well as improving bone health",
    img: pp6,
    category: "PULSES",
  },
  {
    name: "Chickpeas",
    desc: "Nutritious, high-protein beans perfect for soups, salads, and stews.",
    img: pp4,
    category: "PULSES",
  },
  {
    name: "Kidney beans",
    desc: "Aromatic, long-grain rice perfect for curries, pilafs, and salads.",
    img: pp5,
    category: "PULSES",
  },
  {
    name: "Masur",
    desc: "A fragrant spice enhancing flavors in both sweet and savory dishes.",
    img: pp8,
    category: "PULSES",
  },
  {
    name: "Peas",
    desc: "Nutritious, high-protein beans perfect for soups, salads, and stews.",
    img: pp7,
    category: "PULSES",
  },
  {
    name: "Moog beans",
    desc: "Aromatic, long-grain rice perfect for curries, pilafs, and salads.",
    img: pp12,
    category: "PULSES",
  },
  {
    name: "Green split peas",
    desc: "Green split peas are dried, peeled, and split seeds of peas, rich in protein and fiber, commonly used in soups and stews.",
    img: pp11,
    category: "PULSES",
  },

  //SPICES

  {
    name: "Garlic",
    desc: " A pungent bulb used worldwide for its savory, slightly sweet flavor and antimicrobial properties.",
    img: s1,
    category: "SPICES",
  },
  {
    name: "Cardamom",
    desc: "Aromatic green pods with a sweet‑spicy, eucalyptus‑like flavor, often used in both savory and sweet dishes.",
    img: s2,
    category: "SPICES",
  },
  {
    name: "Cumin",
    desc: " Earthy, warm seeds with a nutty aroma, essential in many spice blends and savory recipes.",
    img: s3,
    category: "SPICES",
  },
  {
    name: "Turmeric",
    desc: "Bright yellow root powder with a mild, bitter taste and powerful anti‑inflammatory benefits.",
    img: Turmeric,
    category: "SPICES",
  },
  {
    name: "Ginger",
    desc: "Zesty, warming root with a peppery‑sweet flavor, prized for digestive and anti‑nausea effects.",
    img: s4,
    category: "SPICES",
  },
  {
    name: "Chilly",
    desc: "Fresh hot peppers that add fruity heat and vibrancy to dishes.",
    img: v1,
    category: "SPICES",
  },
  {
    name: "Fennel",
    desc: " Sweet, anise‑flavored seeds used for seasoning meats, breads, and digestive teas.",
    img: s6,
    category: "SPICES",
  },
  {
    name: "Mint",
    desc: "Cool, refreshing leaves with a bright menthol aroma, popular in drinks, salads, and desserts.",
    img: s7,
    category: "SPICES",
  },
  {
    name: "Dry Red Chilly ",
    desc: " Dried red chilies that deliver deep, smoky heat and color to curries and sauces.",
    img: s8,
    category: "SPICES",
  },
  {
    name: "Coriander",
    desc: "Citrus‑note seeds used whole or ground for a warm, mild spice in global cuisines.",
    img: s9,
    category: "SPICES",
  },
  {
    name: "Asafoetida powder ",
    desc: "Intensely pungent resin powder that mellows into a savory, onion‑garlic flavor when cooked.",
    img: s10,
    category: "SPICES",
  },
  {
    name: "Cinnamon",
    desc: " Sweet‑woody bark with warm, fragrant notes, commonly used in baking and stews.",
    img: s11,
    category: "SPICES",
  },
  {
    name: "Colve",
    desc: "Highly aromatic, sweet‑bitter flower buds that offer a potent, warming spice.",
    img: s12,
    category: "SPICES",
  },
  {
    name: "Jaggery",
    desc: " Unrefined cane sugar with a deep, molasses‑like sweetness and rich mineral content.",
    img: s13,
    category: "SPICES",
  },

  // VEGETABLE
  {
    name: "Green Chilly ",
    desc: "Green chilies are generally considered more beneficial for health than red chilies.",
    img: v1,
    category: "VEGETABLE",
  },
  {
    name: "Potatoes",
    desc: "The potato is a starchy tuberous vegetable native to the Americas that is consumed as a staple food in many parts of the world.",
    img: v2,
    category: "VEGETABLE",
  },
  {
    name: "Onion",
    desc: "An onion also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium.",
    img: v3,
    category: "VEGETABLE",
  },

  //GRAINS part

  {
    name: "Basmati Rice",
    desc: " Aromatic long‑grain rice prized for its delicate floral scent and light, fluffy texture.",
    img: g1,
    category: "GRAINS",
  },
  {
    name: "Peanut",
    desc: "Protein‑rich legume with a sweet, earthy flavor, commonly eaten roasted, ground into butter, or pressed for oil.",
    img: g2,
    category: "GRAINS",
  },
  {
    name: "Wheat",
    desc: " Staple cereal grain with a mild, nutty taste, milled into flour for bread, pasta, and baked goods.",
    img: g3,
    category: "GRAINS",
  },
  {
    name: "Sorghum",
    desc: "Gluten‑free grain with a mild, sweet flavor and firm texture, used in porridges, flatbreads, and gluten‑free flours.",
    img: g4,
    category: "GRAINS",
  },
  {
    name: "Millet",
    desc: "Small, gluten‑free seeds with a gentle, corn‑like taste, rich in minerals, often cooked as a porridge or added to breads.",
    img: g5,
    category: "GRAINS",
  },
  {
    name: "Black/White Sesame",
    desc: "Oil‑dense seeds: black offer a deeper, nuttier flavor, white are milder—both used for seasoning, oils, and garnishes",
    img: g6,
    category: "GRAINS",
  },

  //COTTON BALES
  {
    name: "COTTON BALES",
    desc: "Cotton Bales are tightly packed bundles of raw cotton fiber, processed and compressed after harvesting, ready for use in textile manufacturing. ",
    img: cotton,
    category: "COTTON SALES",
  },
];

function Ourproduct() {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("PULSES");

  let filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory ? p.category === selectedCategory : true)
  );

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // Get the 'category' value

  const categories = [
    "PULSES",
    "SPICES",
    "VEGETABLE",
    "GRAINS",
    "COTTON SALES",
  ];

  const category = queryParams.get("category");

  useEffect(() => {
    setSelectedCategory(category);
    filteredProducts = products.filter((p) => p.category === category);
  }, [category]);

  console.log(selectedCategory, filteredProducts, "33333");

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col items-center px-2 py-6">
        <motion.div
          className="relative overflow-hidden mb-16"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex justify-center">
            <button className="mb-4 px-4 py-1 bg-gray-200 rounded-full text-sm ">
              Our Product
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Find the right product and start exporting.
          </h1>
        </motion.div>
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
          <aside className="w-full md:w-1/4">
            <div className="relative">
              <div className="relative mb-4">
                <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-xl" />
                <input
                  type="text"
                  placeholder="Search Product..."
                  className="pl-10 pr-4 py-4 border rounded-t-4xl bg-black text-white focus:outline-none w-full"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <motion.div
                className="relative overflow-hidden mb-16"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex flex-row md:flex-col flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`px-4 py-4 rounded-b text-center cursor-pointer w-full ${
                        selectedCategory === cat
                          ? "bg-black text-white rounded"
                          : "bg-gray-100 text-black "
                      }`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length ? (
                filteredProducts.map((product, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className=" rounded-xl  p-4 flex flex-col items-center transition"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-[800%] h-[250px]  object-cover  rounded-xl mb-4 cursor-pointer"
                    />
                    <h2 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 text-center">{product.desc}</p>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 py-8">
                  No products found.
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      <Bottomcontact />
    </>
  );
}

export default Ourproduct;
