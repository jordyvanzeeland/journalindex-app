import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <h2>JournalIndex</h2>
            <ul>
                <NavLink to={'/journals'} exact="true">
                    <li><i className="fas fa-book"></i> Journals</li>
                </NavLink>

                <NavLink to={'/categories'} exact="true">
                    <li><i className="fas fa-book"></i> Categorieën</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Sidebar;