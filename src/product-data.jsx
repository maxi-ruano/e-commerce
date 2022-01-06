import React from "react";

const products = [
  {
    id: 1,
    name: "Shoes",
    productType: "ZAPATILLAS NIKE AIR MAX AP",
    price: 50,
    image:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw783e0b99/products/NI_CU4826-002/NI_CU4826-002-1.JPG",
    description:
      " The Nike Air Max AP Shoes have a sporty and elegant design that blends past and present to offer exceptional comfort. Details with touches of heritage pay tribute to the Air Max 97. Its upper is made of mesh and its sole is made of rubber. They have profile design hem with soft padded collar and comfortable insole perfect for wear with any outfit.",
  },
  {
    id: 2,
    name: "Nootbook",
    productType: "NOTEBOOK LENOVO 81Y400F1AR INTEL CORE I5",
    price: 1000,
    image:
      "http://medias.musimundo.com/medias/00306064-139400-139400-01-139400-01.jpg-size300?context=bWFzdGVyfGltYWdlc3w4MjY0MXxpbWFnZS9qcGVnfGg5OS9oN2MvMTAyOTkzOTQyMjgyNTQvMDAzMDYwNjQtMTM5NDAwLTEzOTQwMF8wMS0xMzk0MDBfMDEuanBnX3NpemUzMDB8ODgwMzM3MzBlNzFjODU5ZDc4MGU3MGVjNTk3OWY5MjNmNTZhYmVlYmJlM2FhZTc4NDJhYjMyNmVkNGY5MzVkZg",
    description:
      " Pant. 15.6 FHD. Procesador Intel Core I5-10300. SO: Windows 10 Home. Almac 1Tb / RAM 8Gb. Unidad SSD 128Gb. Bateria 3 celdas 45 Whrs internal. Placa de video NVIDIA GEFORCE GTX 1650 4GB GDDR6. WiFi. BT: 5.0. USB: 2 x 3.2 Gen 1 / 1 x 3.2 Tipo - C Gen 1",
  },
  {
    id: 3,
    name: "TV Smart",
    productType: "SMART TV SAMSUNG 65 PULGADAS 4K UHD",
    price: 700,
    image:
      "http://medias.musimundo.com/medias/00313073-140606-140606-01-140606-01.jpg-size300?context=bWFzdGVyfGltYWdlc3wzOTM5NnxpbWFnZS9qcGVnfGhmYS9oMGQvMTAzMjExNzg3ODc4NzAvMDAzMTMwNzMtMTQwNjA2LTE0MDYwNl8wMS0xNDA2MDZfMDEuanBnX3NpemUzMDB8NzI3NTVjOWE0ZWU5NTk2MjUzM2FkOWI5ZmQyNGRkMWZlNzhmYjgzM2Y1NjMxNGZlNjViZGRmZGZkYTNhNDJjNg",
    description:
      " 4K Smart Qled 65.Potencia 20W. Sonido stereo. Sonido Dolby Digital Plus. Proc. Quantum 4K. Wi FI. Navegador web. Bluetooth. USB x 2. HDMI x 4. Optimizador de juego. Modo inteligente. Modo ambiente. Control remoto.",
  },
  {
    id: 4,
    name: "Bike",
    productType: "BICICLETA EXER MTB 5 PRO ",
    price: 300,
    image:
      "http://medias.musimundo.com/medias/00301008-139212-139212-01-139212-01.jpg-size300?context=bWFzdGVyfGltYWdlc3wzMzg2MHxpbWFnZS9qcGVnfGgwNS9oNWQvMTAzMTAwMTcyMjA2MzgvMDAzMDEwMDgtMTM5MjEyLTEzOTIxMl8wMS0xMzkyMTJfMDEuanBnX3NpemUzMDB8NzY1YzEyNTMyNWI1MjMzZTllMWYzM2JhMDNiNmRkMDlhNDQ0YTY5OTNkNjVmNWNmYTFjNzA5ZDQ0M2RiNzM1Mg",
    description:
      " Bicicleta Rodado 29. Talle 18. Transmision 21 velocidades. Cuadro MTB EXER 5 PRO. Frenos a disco SLP mecanico. Ruedas MTB EXER 5 PRO. Pie de aluminio regulable. Horquilla suspension EXER. Calco al agua Bajo Barniz.",
  },
  {
    id: 5,
    name: "Ankle Boots",
    productType: "BOTINES NIKE VAPOR 13 ACADEMY TF",
    price: 35,
    image:
      "https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwfa3cda08/products/NI_AT7996-906/NI_AT7996-906-1.JPG?sw=400&sh=400",
    description:
      " Los botines Nike Vapor 13 Academy TF envuelven tu pie para ofrecer un ajuste similar a una segunda piel, mientras que la suela de goma ayuda a una tracción supercargada en el césped. El material sintético suave tiene una textura desde el talón hasta la punta para darle el toque que necesita tu creatividad a máxima velocidad. Basado en el análisis de Nike Sports Research Lab a los movimientos de los jugadores para una mayor precisión y control del balón como también comodidad en tu pie desde el primer hasta el último minuto de juego.",
  },
  {
    id: 6,
    name: "Socks",
    productType: "Pack de Medias Urbo Logo",
    price: 3,
    image:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw6ee475b5/products/UR_NAFW21068/UR_NAFW21068-1.JPG?sw=400&sh=400",
    description:
      " El pack de medias Urbo Logo están confeccionadas en algodón y con dibujos que las vuelven más relajadas para tus días. Su diseño casi invisible no le quitan protagonismo a tus calzados pero sí al frío para protegerte y darte más comodidad.",
  },
  {
    id: 7,
    name: "Shoes",
    productType: "Zapatillas Nike Air Max 2090",
    price: 5,
    image:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwc34be940/products/NI_BV9977-101/NI_BV9977-101-1.JPG?sw=400&sh=400",
    description:
      "Las zapatillas Nike Air Max 2090 celebran el 30° aniversario del lanzamiento de las Air Max 90. Su confección con malla ligera y transpirable para mantener los pies cómodos, mientras que la unidad Air Max proporciona una amortiguación más visible desde el costado en relación con el modelo original de aquellos años. La lengüeta con orificio abierto se combina con el cierre ajustable de agarre del talón para que puedas ponerte y quitarte el calzado con facilidad. ",
  },
  {
    id: 2,
    name: "Cocina",
    productType: "Horno Eléctrico con Anafe 40 Lts Philco HGP4021API",
    price: 100,
    image:
      "https://images.fravega.com/f300/a0443e5e522a0f535a8bb766560c38d8.jpg.webp",
    description:
      " Marca: Philco Modelo: HGP4021API Color: Negro Medidas: 49,6 x 40 x 32 cm Peso: 10,2 kg Origen: Argentina Capacidad: 40 litros. Opción de cocción superior, inferior y combinada. Función convección. Doble anafe. Timer de 60 minutos. Accesorios: Bandeja de cocción, grilla y pinza. Consumo 3200W. Voltaje: 220 – 50 Hz.",
  },
];

export default products;
