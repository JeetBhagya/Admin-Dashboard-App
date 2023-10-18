import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar"
import {BsSearch} from 'react-icons/bs';
import profile from '../assets/profile-icon.png';
import {HiTrendingUp, HiTrendingDown} from 'react-icons/hi'

function Dashboard() {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for data, user & docs" />
          <FaRegBell/>
          <img src={profile} alt="" />
        </div>

        <section className="widgetContainer">
          <WidgetItem 
            percent={40} 
            amount={true} 
            value={3400000}
            heading="Revenue"
            color="rgb(0, 155, 255)"
          />
          <WidgetItem 
            percent={40} 
            amount={true} 
            value={3400000}
            heading="Revenue"
            color="rgb(0, 155, 255)"
          />
          <WidgetItem 
            percent={40} 
            amount={true} 
            value={3400000}
            heading="Revenue"
            color="rgb(0, 155, 255)"
          />
        </section>
        

      </main>
    </div>
  )
}

interface WidgetItemProps{
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem=({heading, value, percent, color, amount}:WidgetItemProps)=><article className="widget">
  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount? `$${value}`: value}</h4>
    {
      percent>0 ? <span className="green"><HiTrendingUp/>+{percent}%{" "}</span>
        : <span className="red"><HiTrendingDown/>{percent}%{" "}</span>
    }
  </div>
  <div className="widgetCircle">
    <span color={color}>{percent}%</span>
  </div>

</article>

export default Dashboard