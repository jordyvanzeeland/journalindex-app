import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { withRouter } from "../components/withRouter";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../Functions";
import Sidebar from "../components/Sidebar";

const Journals = (props) => {
    const [journals, setJournals] = useState([]);
    const navigate = useNavigate();

    const getJournals = async () => {
        const data = await fetchApi("GET", "/journals");
        setJournals(data);
    }

    useEffect(() => {
        getJournals();
    }, [])

    return(
        <React.Fragment>
            <Header />
            <Sidebar />
            <div className="content">
                <div className="container-fluid">
                    <h3>Journals</h3>

                    <table className="table resonsive nowrap" width="100%">
                        <thead>
                            <tr>
                                <th>Naam</th>
                                <th>Beschrijving</th>
                                <th>Datum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {journals.map((journal, i) => {
                                return(
                                    <tr key={i}>
                                        <td onClick={() => navigate(`/challenge/${journal.id}`)}>{journal.name}</td>
                                        <td>{journal.description}</td>
                                        <td>{journal.dateBegin} {journal.dateEnd}</td>
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

export default withRouter(Journals);