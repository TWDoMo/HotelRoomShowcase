import React from "react";

const rooms = [
  {
    id: 1,
    name: "豪華雙人房",
    price: 3600,
    description: "配備舒適雙人床、獨立陽台與浴缸，適合情侶與小家庭。",
    amenities: ["免費Wi-Fi", "獨立浴缸", "電視", "冷氣", "陽台"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    id: 2,
    name: "經濟雙人房",
    price: 2200,
    description: "基本設施齊全，適合短期旅遊或商務出差。",
    amenities: ["免費Wi-Fi", "電視", "冷氣"],
    image: "https://images.unsplash.com/photo-1560448075-bb00e13fe2f1"
  },
  {
    id: 3,
    name: "家庭四人房",
    price: 4800,
    description: "寬敞空間與雙床設計，適合全家出遊入住。",
    amenities: ["免費Wi-Fi", "兩張雙人床", "電視", "冰箱", "沙發區"],
    image: "https://images.unsplash.com/photo-1582719478141-3fdf4f6d1b5c"
  }
];


const HotelRoomShowcase = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">🏨 飯店房型介紹</h1>
      <div className="row">
        {rooms.map((room) => (
          <div key={room.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow border-0">
              <img src={room.image} className="card-img-top" alt={room.name} />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">{room.name}</h5>
                <p className="card-text">{room.description}</p>
                <p className="text-danger fw-semibold fs-5">每晚 NT${room.price.toLocaleString()}</p>
                <h6 className="mt-3">設施：</h6>
                <ul className="list-group list-group-flush">
                  {room.amenities.map((item, index) => (
                    <li key={index} className="list-group-item">
                      ✅ {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer bg-white border-top-0 text-end">
                <button className="btn btn-outline-primary btn-sm">查看更多</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelRoomShowcase;
