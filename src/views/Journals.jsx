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
            <Sidebar />
            <div className="content">
                <div className="container-fluid">
                    <button className="btn btn-add" >Toevoegen</button>
                    <h3>Journals</h3>

                    <table className="table resonsive nowrap" width="100%">
                        <thead style={{ display: 'none' }}>
                            <tr>
                                <th>Naam</th>
                                <th>Datum</th>
                                <th>Entries</th>
                                <th>Categorieën</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {journals.map((journal, i) => {
                                return(
                                    <tr key={i}>
                                        <td onClick={() => navigate(`/challenge/${journal.id}`)}>
                                            <i className="journalicon fas fa-book"></i> 
                                            <span className="journalname">{journal.name}</span>
                                            {/* <span className="journaldesc">{journal.description}</span> */}
                                        </td>
                                        <td>{journal.dateBegin} - {journal.dateEnd}</td>
                                        <td><i className="fas fa-file-lines"></i> 0</td>
                                        <td><i className="fa-solid fa-list"></i> 0</td>
                                        <td><i className="btn-delete fa-solid fa-trash-can"></i></td>
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