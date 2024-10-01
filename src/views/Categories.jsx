import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { withRouter } from "../components/withRouter";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../Functions";
import Sidebar from "../components/Sidebar";

const Categories = (props) => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const getCategories = async () => {
        const data = await fetchApi("GET", "/categories");
        setCategories(data);
    }

    useEffect(() => {
        getCategories();
    }, [])

    return(
        <React.Fragment>
            <Header />
            <Sidebar />
            <div className="content">
                <div className="container-fluid">
                    <h3>Categorieën</h3>

                    <table className="table resonsive nowrap" width="100%">
                        <thead>
                            <tr>
                                <th>Naam</th>
                                <th>Beschrijving</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, i) => {
                                return(
                                    <tr key={i}>
                                        <td onClick={() => navigate(`/challenge/${category.id}`)}>{category.name}</td>
                                        <td>{category.description}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Categories);