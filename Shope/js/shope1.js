// ========== DATA ==========
const PRODUCTS = [
  {
    "id": 1,
    "name": "Neon Oversized Hoodie",
    "category": "ao",
    "sub": "hoodie",
    "price": 890000,
    "oldPrice": 1200000,
    "tag": "sale",
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop"
    ],
    "desc": "Hoodie oversized chất liệu cotton dày dặn, ấm áp, phù hợp phong cách streetwear hiện đại.",
    "material": "100% Cotton French Terry",
    "care": "Giặt máy 30°C, không sấy khô",
    "colors": [
      "#000000",
      "#ffffff",
      "#ff2d78"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "related": [
      2,
      5,
      8
    ]
  },
  {
    "id": 2,
    "name": "Cargo Tech Pants",
    "category": "quan",
    "sub": "pants",
    "price": 750000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop"
    ],
    "desc": "Quần cargo nhiều túi hộp cá tính, chất liệu nylon chống nước nhẹ, form relaxed fit thoải mái.",
    "material": "Nylon Ripstop + Cotton blend",
    "care": "Giặt nhẹ, phơi khô tự nhiên",
    "colors": [
      "#2d2d2d",
      "#556b2f",
      "#000000"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "related": [
      1,
      6,
      9
    ]
  },
  {
    "id": 3,
    "name": "Graphic Street Tee",
    "category": "ao",
    "sub": "tshirt",
    "price": 450000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop"
    ],
    "desc": "Áo thun graphic với họa tiết in nổi bật sắc nét, chất vải cotton 240gsm đứng form.",
    "material": "100% Organic Cotton",
    "care": "Giặt máy 30°C, lộn mặt trái khi ủi",
    "colors": [
      "#000000",
      "#ffffff",
      "#ff6b00"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "related": [
      1,
      4,
      7
    ]
  },
  {
    "id": 4,
    "name": "Vintage Denim Jacket",
    "category": "ao",
    "sub": "jacket",
    "price": 1200000,
    "oldPrice": 1500000,
    "tag": "sale",
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop"
    ],
    "desc": "Áo khoác denim vintage wash màu bụi bặm, form boxy trẻ trung, chi tiết rách nhẹ tạo điểm nhấn.",
    "material": "100% Cotton Denim 14oz",
    "care": "Giặt khô hoặc giặt máy lạnh",
    "colors": [
      "#4a6fa5",
      "#2d2d2d",
      "#8b7355"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "related": [
      3,
      5,
      10
    ]
  },
  {
    "id": 5,
    "name": "Puffer Jacket Neon",
    "category": "ao",
    "sub": "jacket",
    "price": 1800000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop"
    ],
    "desc": "Áo khoác phao siêu nhẹ với lớp bông cách nhiệt cao cấp, màu sắc neon cá tính rực rỡ.",
    "material": "Nylon 20D + bông cách nhiệt",
    "care": "Giặt khô chuyên dụng",
    "colors": [
      "#ff2d78",
      "#00f0ff",
      "#ff6b00",
      "#000000"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "related": [
      2,
      4,
      11
    ]
  },
  {
    "id": 6,
    "name": "Wide Leg Trousers",
    "category": "quan",
    "sub": "pants",
    "price": 680000,
    "oldPrice": 0,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format&fit=crop"
    ],
    "desc": "Quần ống rộng với ly giữa thanh lịch, chất liệu wool blend rủ đẹp đứng dáng.",
    "material": "Wool 70% + Polyester 30%",
    "care": "Giặt khô, không vắt mạnh",
    "colors": [
      "#2d2d2d",
      "#8b7355",
      "#000000"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34"
    ],
    "related": [
      2,
      8,
      12
    ]
  },
  {
    "id": 7,
    "name": "Crop Top Mesh",
    "category": "ao",
    "sub": "top",
    "price": 380000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop"
    ],
    "desc": "Crop top lưới xuyên thấu thời thượng với thiết kế layer độc đáo tôn dáng.",
    "material": "Polyester Mesh + Cotton lining",
    "care": "Giặt tay, phơi phẳng",
    "colors": [
      "#000000",
      "#ff2d78",
      "#ffffff"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "related": [
      3,
      9,
      13
    ]
  },
  {
    "id": 8,
    "name": "Tech Runner Sneakers",
    "category": "giay",
    "sub": "shoes",
    "price": 2200000,
    "oldPrice": 2800000,
    "tag": "sale",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop"
    ],
    "desc": "Giày runner thiết kế futuristic với đế êm chống sốc, thích hợp vận động và dạo phố.",
    "material": "Mesh + Synthetic Leather + Phylon sole",
    "care": "Vệ sinh bằng khăn ẩm",
    "colors": [
      "#000000",
      "#ffffff",
      "#00f0ff"
    ],
    "sizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "related": [
      2,
      6,
      14
    ]
  },
  {
    "id": 9,
    "name": "Bucket Hat Leather",
    "category": "phukien",
    "sub": "hat",
    "price": 520000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&auto=format&fit=crop"
    ],
    "desc": "Mũ bucket chất liệu da nhân tạo cao cấp với khóa kim loại cá tính, chuẩn phong cách Y2K.",
    "material": "PU Leather",
    "care": "Lau bằng khăn mềm",
    "colors": [
      "#000000",
      "#8b4513",
      "#ffffff"
    ],
    "sizes": [
      "M",
      "L"
    ],
    "related": [
      7,
      15,
      16
    ]
  },
  {
    "id": 10,
    "name": "Bomber Jacket Retro",
    "category": "ao",
    "sub": "jacket",
    "price": 1350000,
    "oldPrice": 0,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop"
    ],
    "desc": "Áo bomber cổ điển với patch thêu tay tỉ mỉ, lót lụa mềm mại giữ ấm tốt.",
    "material": "Satin + Polyester lining",
    "care": "Giặt khô, không sấy nhiệt cao",
    "colors": [
      "#2d2d2d",
      "#556b2f",
      "#000000"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "related": [
      4,
      5,
      11
    ]
  },
  {
    "id": 11,
    "name": "Oversized Blazer",
    "category": "ao",
    "sub": "blazer",
    "price": 1600000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=600&auto=format&fit=crop"
    ],
    "desc": "Blazer oversized với vai đệm vừa phải, phong cách hiện đại quyến rũ.",
    "material": "Wool Blend + Polyester",
    "care": "Giặt khô chuyên dụng",
    "colors": [
      "#000000",
      "#2d2d2d",
      "#8b7355"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "related": [
      5,
      10,
      12
    ]
  },
  {
    "id": 12,
    "name": "Pleated Skirt",
    "category": "vay",
    "sub": "skirt",
    "price": 580000,
    "oldPrice": 0,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop"
    ],
    "desc": "Chân váy xếp ly midi sang trọng, chất liệu crepe mềm rủ nữ tính.",
    "material": "Crepe Polyester",
    "care": "Giặt máy 30°C, không vắt",
    "colors": [
      "#000000",
      "#ff2d78",
      "#2d2d2d"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "related": [
      6,
      11,
      13
    ]
  },
  {
    "id": 13,
    "name": "Slip Dress Satin",
    "category": "vay",
    "sub": "dress",
    "price": 890000,
    "oldPrice": 1100000,
    "tag": "sale",
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop"
    ],
    "desc": "Váy slip satin với đường cắt bias ôm dáng nhẹ nhàng, quyến rũ cho buổi tối.",
    "material": "Silk Satin",
    "care": "Giặt khô hoặc giặt tay nhẹ",
    "colors": [
      "#000000",
      "#ff2d78",
      "#00f0ff",
      "#ffffff"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "related": [
      7,
      12,
      14
    ]
  },
  {
    "id": 14,
    "name": "Crossbody Bag Mini",
    "category": "phukien",
    "sub": "bag",
    "price": 750000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format&fit=crop"
    ],
    "desc": "Túi đeo chéo mini với dây xích kim loại mạ ánh kim, phong cách hiện đại nhỏ gọn.",
    "material": "PU Leather + Metal Chain",
    "care": "Lau bằng khăn mềm",
    "colors": [
      "#000000",
      "#ffffff",
      "#ff2d78"
    ],
    "sizes": [
      "One Size"
    ],
    "related": [
      8,
      9,
      15
    ]
  },
  {
    "id": 15,
    "name": "Statement Sunglasses",
    "category": "phukien",
    "sub": "glasses",
    "price": 620000,
    "oldPrice": 0,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&auto=format&fit=crop"
    ],
    "desc": "Kính mát gọng oversized với tròng UV400 chống tia cực tím tối ưu.",
    "material": "Acetate + Polarized Lens",
    "care": "Lau bằng khăn chuyên dụng",
    "colors": [
      "#000000",
      "#8b4513",
      "#ff6b00"
    ],
    "sizes": [
      "One Size"
    ],
    "related": [
      9,
      14,
      16
    ]
  },
  {
    "id": 16,
    "name": "Chain Necklace Set",
    "category": "phukien",
    "sub": "jewelry",
    "price": 380000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop"
    ],
    "desc": "Bộ vòng cổ xích 3 lớp với mặt dây charm cá tính, chất thép không gỉ sáng bóng.",
    "material": "Stainless Steel 316L",
    "care": "Tránh tiếp xúc nước và nước hoa",
    "colors": [
      "#c0c0c0",
      "#ffd700"
    ],
    "sizes": [
      "One Size"
    ],
    "related": [
      9,
      14,
      15
    ]
  },
  {
    "id": 17,
    "name": "Tactical Vest",
    "category": "ao",
    "sub": "vest",
    "price": 680000,
    "oldPrice": 0,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1509631179647-0173531695f5?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1509631179647-0173531695f5?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop"
    ],
    "desc": "Áo gile tactical với nhiều túi hộp tiện dụng, đậm chất streetwear techwear.",
    "material": "Nylon Ripstop",
    "care": "Giặt máy 30°C",
    "colors": [
      "#000000",
      "#556b2f",
      "#2d2d2d"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "related": [
      1,
      10,
      18
    ]
  },
  {
    "id": 18,
    "name": "Track Pants Reflective",
    "category": "quan",
    "sub": "pants",
    "price": 550000,
    "oldPrice": 0,
    "tag": "sale",
    "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600&auto=format&fit=crop"
    ],
    "desc": "Quần track với sọc phản quang nổi bật trong đêm, co giãn vận động tốt.",
    "material": "Polyester Tricot",
    "care": "Giặt máy 30°C, không ủi trực tiếp",
    "colors": [
      "#000000",
      "#2d2d2d",
      "#ff2d78"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "related": [
      2,
      6,
      17
    ]
  },
  {
    "id": 19,
    "name": "Cropped Hoodie Zip",
    "category": "ao",
    "sub": "hoodie",
    "price": 720000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop"
    ],
    "desc": "Hoodie cropped khóa kéo với túi kangaroo khỏe khoắn, năng động.",
    "material": "Cotton Fleece 320gsm",
    "care": "Giặt máy 30°C, không sấy",
    "colors": [
      "#000000",
      "#ff2d78",
      "#ffffff"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "related": [
      1,
      7,
      20
    ]
  },
  {
    "id": 20,
    "name": "Maxi Dress Floral",
    "category": "vay",
    "sub": "dress",
    "price": 1100000,
    "oldPrice": 0,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop"
    ],
    "desc": "Váy maxi họa tiết ấn tượng, chất liệu chiffon bay bổng dịu dàng.",
    "material": "Chiffon Polyester",
    "care": "Giặt tay, không vắt",
    "colors": [
      "#ff2d78",
      "#00f0ff",
      "#000000"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "related": [
      12,
      13,
      21
    ]
  },
  {
    "id": 21,
    "name": "High Top Sneakers",
    "category": "giay",
    "sub": "shoes",
    "price": 1900000,
    "oldPrice": 2400000,
    "tag": "sale",
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop"
    ],
    "desc": "Giày cổ cao da cao cấp với đế cao su bền bỉ, phong cách retro cá tính.",
    "material": "Genuine Leather + Rubber Sole",
    "care": "Vệ sinh bằng khăn ẩm, dùng xi da",
    "colors": [
      "#000000",
      "#ffffff",
      "#8b4513"
    ],
    "sizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "related": [
      8,
      14,
      22
    ]
  },
  {
    "id": 22,
    "name": "Beanie Knit",
    "category": "phukien",
    "sub": "hat",
    "price": 280000,
    "oldPrice": 0,
    "tag": "new",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop"
    ],
    "desc": "Mũ len dệt kim dày dặn ấm áp với logo thêu tinh tế.",
    "material": "Acrylic Knit",
    "care": "Giặt tay, phơi phẳng",
    "colors": [
      "#000000",
      "#ff2d78",
      "#00f0ff",
      "#ffffff"
    ],
    "sizes": [
      "One Size"
    ],
    "related": [
      9,
      15,
      16
    ]
  },
  {
    "id": 23,
    "name": "Oversized Shirt Print",
    "category": "ao",
    "sub": "shirt",
    "price": 650000,
    "oldPrice": 0,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop"
    ],
    "desc": "Sơ mi oversized với họa tiết in nghệ thuật phá cách.",
    "material": "100% Cotton Poplin",
    "care": "Giặt máy 30°C, ủi ở nhiệt độ vừa",
    "colors": [
      "#000000",
      "#ffffff",
      "#ff6b00"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "related": [
      3,
      4,
      19
    ]
  },
  {
    "id": 24,
    "name": "Jogger Set Matching",
    "category": "quan",
    "sub": "set",
    "price": 1450000,
    "oldPrice": 1800000,
    "tag": "sale",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
    "gallery": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop"
    ],
    "desc": "Set jogger matching với hoodie cùng tone màu cá tính năng động.",
    "material": "Cotton Fleece",
    "care": "Giặt máy 30°C",
    "colors": [
      "#000000",
      "#2d2d2d",
      "#ff2d78"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "related": [
      1,
      2,
      18
    ]
  }
];


let cart = [];
let currentView = 'home';
let previousView = 'home';
let currentProduct = null;
let pdQty = 1;
let selectedColor = null;
let selectedSize = null;

// ========== NAVIGATION ==========
function navigate(view, event) {
  if(event && event.preventDefault) event.preventDefault();
  const nextView = document.getElementById('view-' + view);
  if (!nextView) return;

  previousView = currentView;
  currentView = view;

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  nextView.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector('.nav-link[data-view="' + view + '"]');
  if (activeLink) activeLink.classList.add('active');

  window.scrollTo({top: 0, behavior: 'smooth'});

  if (view === 'shop') renderShop();
}

function goBack() {
  navigate(previousView || 'shop');
}

function filterAndGo(cat) {
  navigate('shop');
  setTimeout(() => {
    document.querySelectorAll('input[name="shop-cat"]').forEach(r => {
      if (r.value === cat) { r.checked = true; filterShop(cat); }
    });
  }, 100);
}

// ========== MOBILE NAV ==========
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('active');
  document.getElementById('mobileOverlay').classList.toggle('active');
}

// ========== CART ==========
function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('active');
  document.getElementById('cartSidebar').classList.toggle('active');
}

function addToCart(pid, qty) {
  qty = qty || 1;
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p) return;
  const existing = cart.find(item => item.id === pid);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({...p, qty: qty});
  }
  updateCart();
  showToast('Đã thêm ' + p.name + ' vào giỏ hàng!');
}

function removeFromCart(pid) {
  cart = cart.filter(item => item.id !== pid);
  updateCart();
}

function changeCartQty(pid, delta) {
  const item = cart.find(i => i.id === pid);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(pid);
  else updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  cartCount.textContent = totalQty;
  cartTotal.textContent = totalPrice.toLocaleString('vi-VN') + '\u0111';

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Gio hang cua ban dang trong</div>';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" class="cart-item-img" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price.toLocaleString('vi-VN')}\u0111</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeCartQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
        </div>
        <span class="remove-item" onclick="removeFromCart(${item.id})">Xóa</span>
      </div>
    </div>
  `).join('');
}

function checkout() {
  if (cart.length === 0) { showToast('Gio hang trong!'); return; }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  showToast('Dat hang thanh cong! Tong: ' + total.toLocaleString('vi-VN') + '\u0111');
  cart = [];
  updateCart();
  toggleCart();
}

// ========== TOAST ==========
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// ========== SHOP ==========
let shopFilterCat = 'all';
let shopFilterPrice = 'all';
let shopSortVal = 'newest';

function renderShop() {
  const grid = document.getElementById('shopGrid');
  let filtered = [...PRODUCTS];

  if (shopFilterCat !== 'all') filtered = filtered.filter(p => p.category === shopFilterCat);

  if (shopFilterPrice === 'under500') filtered = filtered.filter(p => p.price < 500000);
  else if (shopFilterPrice === '500to1000') filtered = filtered.filter(p => p.price >= 500000 && p.price <= 1000000);
  else if (shopFilterPrice === 'over1000') filtered = filtered.filter(p => p.price > 1000000);

  if (shopSortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (shopSortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (shopSortVal === 'sale') filtered = filtered.filter(p => p.oldPrice > 0);

  document.getElementById('shopCount').textContent = filtered.length;

  grid.innerHTML = filtered.map(p => {
    const tag = p.tag ? `<div class="product-tag-pos"><span class="tag tag-${p.tag}">${p.tag.toUpperCase()}</span></div>` : '';
    const old = p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString('vi-VN')}\u0111</span>` : '';
    return `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        ${tag}
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(${p.id})">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(${p.id})">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.sub.toUpperCase()}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">
          <span class="price-current">${p.price.toLocaleString('vi-VN')}\u0111</span>
          ${old}
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterShop(cat) { shopFilterCat = cat; renderShop(); }
function filterShopPrice(price) { shopFilterPrice = price; renderShop(); }
function sortShop(sort) { shopSortVal = sort; renderShop(); }

function toggleSizeChip(btn) {
  btn.style.background = btn.style.background === 'var(--accent-pink)' ? 'var(--bg-card)' : 'var(--accent-pink)';
  btn.style.borderColor = btn.style.borderColor === 'var(--accent-pink)' ? 'var(--border)' : 'var(--accent-pink)';
}

// ========== PRODUCT DETAIL ==========
function openProduct(pid) {
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p) return;
  currentProduct = p;
  pdQty = 1;
  selectedColor = p.colors[0];
  selectedSize = p.sizes[0];

  document.getElementById('pdMainImg').src = p.image;
  document.getElementById('pdCategory').textContent = p.sub.toUpperCase();
  document.getElementById('pdName').textContent = p.name;
  document.getElementById('pdPrice').textContent = p.price.toLocaleString('vi-VN') + '\u0111';
  document.getElementById('pdOldPrice').textContent = p.oldPrice ? p.oldPrice.toLocaleString('vi-VN') + '\u0111' : '';
  document.getElementById('pdDesc').textContent = p.desc;
  document.getElementById('pdQty').textContent = '1';
  document.getElementById('pdTotalPrice').textContent = p.price.toLocaleString('vi-VN') + '\u0111';

  // Tag
  const tagEl = document.getElementById('pdTag');
  if (p.tag) tagEl.innerHTML = `<span class="tag tag-${p.tag}">${p.tag.toUpperCase()}</span>`;
  else tagEl.innerHTML = '';

  // Thumbnails
  const thumbs = document.getElementById('pdThumbs');
  thumbs.innerHTML = p.gallery.map((img, i) => `
    <img src="${img}" class="product-detail-thumb" style="border-color:${i===0?'var(--accent-pink)':'var(--border)'};" onclick="selectProductThumb(this, '${img}')" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
  `).join('');

  // Colors
  const colorsEl = document.getElementById('pdColors');
  colorsEl.innerHTML = p.colors.map((c, i) => `
    <button onclick="selectColor(this,'${c}')" style="width:36px;height:36px;border-radius:50%;background:${c};border:3px solid ${i===0?'var(--accent-pink)':'transparent'};cursor:pointer;box-shadow:0 0 0 2px var(--bg-card);padding:0;"></button>
  `).join('');

  // Sizes
  const sizesEl = document.getElementById('pdSizes');
  sizesEl.innerHTML = p.sizes.map((s, i) => `
    <button onclick="selectSize(this,'${s}')" style="padding:10px 20px;border:1px solid ${i===0?'var(--accent-pink)':'var(--border)'};background:${i===0?'var(--accent-pink)':'var(--bg-card)'};color:${i===0?'#fff':'var(--text)'};font-size:13px;font-weight:600;cursor:pointer;transition:var(--transition);">${s}</button>
  `).join('');

  // Tabs
  document.getElementById('tab-desc').textContent = p.desc;
  document.getElementById('tab-material').textContent = 'Chat lieu: ' + p.material;
  document.getElementById('tab-care').textContent = 'Huong dan bao quan: ' + p.care;
  resetProductTabs();

  // Related
  const related = PRODUCTS.filter(x => p.related.includes(x.id));
  document.getElementById('pdRelated').innerHTML = related.map(rp => productCard(rp)).join('');

  // Outfit suggestions (random 4 products from different categories)
  const outfit = PRODUCTS.filter(x => x.id !== p.id && x.category !== p.category).slice(0, 4);
  document.getElementById('pdOutfit').innerHTML = outfit.map(op => productCard(op)).join('');

  navigate('product');
}

function productCard(p) {
  const tag = p.tag ? `<div class="product-tag-pos"><span class="tag tag-${p.tag}">${p.tag.toUpperCase()}</span></div>` : '';
  const old = p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString('vi-VN')}\u0111</span>` : '';
  return `
  <div class="product-card" onclick="openProduct(${p.id})">
    <div class="product-img-wrap">
      <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
      ${tag}
      <div class="product-actions">
        <button class="btn" onclick="event.stopPropagation();addToCart(${p.id})">Thêm giỏ</button>
        <button class="btn" onclick="event.stopPropagation();openProduct(${p.id})">Xem</button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-category">${p.sub.toUpperCase()}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">
        <span class="price-current">${p.price.toLocaleString('vi-VN')}\u0111</span>
        ${old}
      </div>
    </div>
  </div>`;
}

function selectProductThumb(img, src) {
  document.getElementById('pdMainImg').src = src;
  Array.from(img.parentNode.children).forEach(c => c.style.borderColor = 'var(--border)');
  img.style.borderColor = 'var(--accent-pink)';
}

function selectColor(btn, color) {
  selectedColor = color;
  btn.parentNode.querySelectorAll('button').forEach(b => b.style.borderColor = 'transparent');
  btn.style.borderColor = 'var(--accent-pink)';
}

function selectSize(btn, size) {
  selectedSize = size;
  btn.parentNode.querySelectorAll('button').forEach(b => {
    b.style.borderColor = 'var(--border)';
    b.style.background = 'var(--bg-card)';
    b.style.color = 'var(--text)';
  });
  btn.style.borderColor = 'var(--accent-pink)';
  btn.style.background = 'var(--accent-pink)';
  btn.style.color = '#fff';
}

function changePdQty(delta) {
  pdQty = Math.max(1, pdQty + delta);
  document.getElementById('pdQty').textContent = pdQty;
  if (currentProduct) {
    document.getElementById('pdTotalPrice').textContent = (currentProduct.price * pdQty).toLocaleString('vi-VN') + '\u0111';
  }
}

function addPdToCart() {
  if (!currentProduct) return;
  addToCart(currentProduct.id, pdQty);
}

function switchTab(btn, tabId) {
  const panel = document.getElementById(tabId);
  if (!btn || !panel) return;

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b === btn);
    b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
  });
  document.querySelectorAll('.tab-content').forEach(t => {
    t.classList.toggle('active', t === panel);
  });
}

function resetProductTabs() {
  const firstTab = document.querySelector('.tab-btn[aria-controls="tab-desc"]');
  switchTab(firstTab, 'tab-desc');
}

function openCollection(name, productIds) {
  showToast('Bo suu tap ' + name + ' - dang chuyen den Shop');
  navigate('shop');
  setTimeout(() => {
    const grid = document.getElementById('shopGrid');
    const filtered = PRODUCTS.filter(p => productIds.includes(p.id));
    document.getElementById('shopCount').textContent = filtered.length;
    grid.innerHTML = filtered.map(p => productCard(p)).join('');
  }, 100);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderShop();

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 50) header.style.background = 'rgba(10,10,15,0.95)';
    else header.style.background = 'rgba(10,10,15,0.85)';
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 360);
  });

  // Image hover effects
  document.querySelectorAll('.feat-img, .cat-img, .lb-img, .col-img').forEach(img => {
    img.parentElement.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
    img.parentElement.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
  });
});

