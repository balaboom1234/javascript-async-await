// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
async function showProfile() {
  try {
    const profileData = await getJohnProfile();
    console.log(profileData);
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error);
  }
}

showProfile();