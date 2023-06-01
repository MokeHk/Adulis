const products = [
  {
    id: 1,
    name: "RedBull Men Shorts",
    price: "600",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat asperiores veritatis eaque sunt, voluptatum repudiandae, enim nostrum fuga eius distinctio quasi modi, beatae eos. Accusantium assumenda voluptas amet. Enim.",
    picture: "testpics/test (1).jpg",
    specs: [
      {
        key: "Quantity",
        value: "400",
      },
      {
        key: "Sex",
        value: "Male",
      },
      {
        key: "Colors",
        value: "Red, Blue, Orange, Black",
      },
      {
        key: "Fabric",
        value: "Cotton",
      },
      {
        key: "Sizes",
        value: "32, 34, 45",
      },
    ],
  },

  {
    id: 2,
    name: "Laser Pointer",
    price: "900",
    description: "Accusantium assumenda voluptas amet. Enim.",
    picture: "testpics/test (2).jpg",
    specs: [
      {
        key: "Quantity",
        value: "400",
      },
      {
        key: "Sex",
        value: "Male",
      },
    ],
  },

  {
    id: 3,
    name: "Men's Thights",
    price: "250",
    description: "Accusantium assumenda voluptas amet. Enim.",
    picture: "testpics/test (3).jpg",
    specs: [
      {
        key: "Quantity",
        value: "400",
      },
      {
        key: "Sex",
        value: "Male",
      },
    ],
  },

  {
    id: 4,
    name: "Jacket",
    price: "400",
    description: "Accusantium assumenda voluptas amet. Enim.",
    picture: "testpics/test (4).jpg",
    specs: [
      {
        key: "Quantity",
        value: "400",
      },
      {
        key: "Sex",
        value: "Male",
      },
    ],
  },

  {
    id: 5,
    name: "Camo Sweat Pants",
    price: "340",
    description: "Accusantium assumenda voluptas amet. Enim.",
    picture: "testpics/test (5).jpg",
    specs: [
      {
        key: "Quantity",
        value: "400",
      },
      {
        key: "Sex",
        value: "Male",
      },
    ],
  },

  {
    id: 6,
    name: "Sport Shoes",
    price: "1220",
    description: "Accusantium assumenda voluptas amet. Enim.",
    picture: "testpics/test (6).jpg",
    specs: [
      {
        key: "Quantity",
        value: "400",
      },
      {
        key: "Sex",
        value: "Male",
      },
    ],
  },

  {
    id: 7,
    name: "Digital Caliper",
    price: "650",
    description: "Accusantium assumenda voluptas amet. Enim.",
    picture: "testpics/test (7).jpg",
    specs: [
      {
        key: "Quantity",
        value: "400",
      },
      {
        key: "Sex",
        value: "Male",
      },
    ],
  },

  {
    id: 8,
    name: "USB Organizer",
    price: "70",
    description: "Accusantium assumenda voluptas amet. Enim.",
    picture: "testpics/test (8).jpg",
    specs: [
      {
        key: "Quantity",
        value: "400",
      },
      {
        key: "Sex",
        value: "Male",
      },
    ],
  },

  {
    id: 9,
    name: "BANGE Bagpack",
    price: "350",
    picture: "testpics/test (9).jpg",
  },

  {
    id: 10,
    name: "Fashion Women's Purse",
    price: "1000",
    picture: "testpics/test (10).jpg",
  },

  {
    id: 11,
    name: "Small Women's Purse",
    price: "1200",
    picture: "testpics/test (11).jpg",
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((m) => m.id === id);
}
