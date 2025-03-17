/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// 오늘 날짜부터 7일 전까지의 날짜 배열 생성 함수 (오름차순)
const getLast7Days = () => {
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i); // i일 전 날짜 계산
    dates.push(date.getDate().toString()); // 일(day)만 저장
  }
  return dates;
};

export default {
  sales: {
    labels: getLast7Days(), // 7일 전부터 오늘까지의 날짜 배열
    datasets: { label: "Parasite", data: [50, 40, 300, 320, 500, 350, 200, 230] },
  },
  tasks: {
    labels: getLast7Days(), // 동일한 방식으로 labels 설정
    datasets: { label: "Hornet", data: [50, 40, 300, 220, 500, 250, 400, 230] },
  },
};
