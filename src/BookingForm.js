import React from "react";

const BookingForm = () => {
  return (
    <div className="container my-5" id="booking">
      <h2 className="text-center fw-bold mb-4">📝 線上訂房</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">姓名</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="roomType" className="form-label">房型</label>
          <select className="form-select" id="roomType" required>
            <option value="">請選擇房型</option>
            <option value="deluxe">豪華雙人房</option>
            <option value="economy">經濟雙人房</option>
            <option value="family">家庭四人房</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="checkIn" className="form-label">入住日期</label>
          <input type="date" className="form-control" id="checkIn" required />
        </div>
        <div className="col-md-3">
          <label htmlFor="checkOut" className="form-label">退房日期</label>
          <input type="date" className="form-control" id="checkOut" required />
        </div>
        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-success">立即預約</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
