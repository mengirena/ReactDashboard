import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon"/>
                                User
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Programs
                            </li>
                        </Link>
                        <Link to="/newUser" className="link">
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon"/>
                                創建用戶
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
