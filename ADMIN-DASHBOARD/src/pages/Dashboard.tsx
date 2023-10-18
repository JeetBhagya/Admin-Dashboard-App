import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar"
import { BsSearch } from "react-icons/bs";

function Dashboard() {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell/>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser-profile&psig=AOvVaw1nUYiMDtJjgD3bMR3irH58&ust=1697695724825000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjA5sj3_oEDFQAAAAAdAAAAABAE" alt="" />
        </div>
      </main>
    </div>
  )
}

export default Dashboard