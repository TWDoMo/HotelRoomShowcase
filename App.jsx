import React from "react";
import RoomCard from "./RoomCard";

const rooms = [
  {
    name: "豪華雙人房",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "寬敞舒適的雙人房，享有城市美景，附設獨立衛浴。",
    price: 3200,
    facilities: ["免費Wi-Fi", "早餐", "空調", "電視", "浴缸"],
  },
  {
    name: "經濟單人房",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    description: "適合商務旅客，簡約設計，提供基本設施。",
    price: 1800,
    facilities: ["免費Wi-Fi", "空調", "電視"],
  },
  {
    name: "家庭四人房",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "適合家庭入住，空間寬敞，附設小客廳。",
    price: 4800,
    facilities: ["免費Wi-Fi", "早餐", "空調", "電視", "小客廳"],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white p-6 text-center text-3xl font-bold">
        飯店房型介紹
      </header>
      <main className="p-6 max-w-6xl mx-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, idx) => (
            <RoomCard key={idx} room={room} />
          ))}
        </div>
      </main>
      <footer className="text-center text-gray-500 py-4">
        &copy; 2024 飯店房型介紹網站
      </footer>
    </div>
  );
}

export default App;
