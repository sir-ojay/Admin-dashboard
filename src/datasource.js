export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Micheal Victor",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "micheal.Vic1@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "David Blake",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Davidblake12@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Anthony Ability",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Ant122@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Dennis Elizabeth",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Dennis.eli24@gmail.com",
    status: "active",
    age: 26,
  },
  {
    id: 5,
    username: "Augusta Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Augusta.cliff@gmail.com",
    status: "passive",
    age: 2,
  },
  {
    id: 6,
    username: "Mary Ann",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Maryann24@gmail.com",
    status: "active",
    age: 25,
  },
  {
    id: 7,
    username: "Clifford Richard",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Cliff.rich@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Damon Benson",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Damon.ben123@gmail.com",
    status: "active",
    age: 56,
  },
  {
    id: 9,
    username: "Frances Ant",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Frances.ant22@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Dorclas Jane",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "DorclasJae@gmail.com",
    status: "active",
    age: 45,
  },
];
