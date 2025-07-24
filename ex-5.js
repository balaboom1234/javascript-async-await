// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function showJohnProfile() {
  try {
    const profile = await getJohnProfile(); // รอ Promise
    console.log(profile); // จะไม่ทำงานเพราะ promise ถูก reject
  } catch (error) {
    console.log(error); // แสดงผลข้อมูลจาก reject
  }
}

// เรียกใช้ฟังก์ชัน
showJohnProfile();