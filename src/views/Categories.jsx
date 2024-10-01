import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { withRouter } from "../components/withRouter";
import { fetchApi } from "../Functions";
import Sidebar from "../components/Sidebar";

const Categories = (props) => {

    return(
        <React.Fragment>
            <Header />
            <Sidebar />
            <div className="content">
                <div className="container-fluid">
                    <h3>Categorieën</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Categories);