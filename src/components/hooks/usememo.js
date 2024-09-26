import React, { useState, useMemo } from "react";

function FibonacciComponent() {
  // State để lưu trữ số thứ tự của dãy Fibonacci
  const [number, setNumber] = useState(0);

  // Đối tượng để lưu trữ các giá trị Fibonacci đã tính
  const fibCache = useMemo(() => {
    const cache = {};
    const fibonacci = (n) => {
      if (n in cache) return cache[n]; // Kiểm tra xem giá trị đã được tính chưa
      if (n <= 1) return n;
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2); // Lưu giá trị đã tính vào cache
      return cache[n];
    };
    return fibonacci;
  }, []);

  // Sử dụng useMemo để ghi nhớ (memoize) kết quả của hàm fibonacci
  const fibValue = useMemo(() => {
    console.log(`useMemo được gọi cho number = ${number}`);
    return fibCache(number); 
  }, [number, fibCache]);

  return (
    <div className="fibonacci-container">
      <h1>Dãy Fibonacci</h1>
      <p>Số thứ tự: {number}</p>
      <p>Giá trị Fibonacci: {fibValue}</p>

      <button onClick={() => setNumber(number + 1)}>Tăng số thứ tự</button>
      <button onClick={() => setNumber(number - 1)} disabled={number <= 0}>
        Giảm số thứ tự
      </button>
    </div>
  );
}

export default FibonacciComponent;
