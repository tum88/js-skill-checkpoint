// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const newUsers = data.map((user) => user.name);
    console.log(newUsers);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });