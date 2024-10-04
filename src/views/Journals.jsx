import React, { useEffect, useState } from "react";
import { withRouter } from "../components/withRouter";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../Functions";
import Sidebar from "../components/Sidebar";
import DataTable from "datatables.net-dt";

const Journals = (props) => {
    const [journals, setJournals] = useState([]);
    const navigate = useNavigate();

    const getJournals = async () => {
        const data = await fetchApi("GET", "/journals");
        setJournals(data);

        setTimeout(() => {
            let table = new DataTable('#DataTable', {
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/2.1.3/i18n/nl-NL.json",
                    search: "",
                    searchPlaceholder: "Zoeken"
                },
                dom: "ftpri",
                responsive: true
            });
        }, 100);
    }

    useEffect(() => {
        getJournals();
    }, [])

    return(
        <React.Fragment>
            <Sidebar />
            <div className="content">
                <div className="container-fluid">
                    <h3>Journals</h3>
                    <div className="card">
                        <div className="card-body">
                            <button className="btn btn-add" >Toevoegen</button>
                            <table id="DataTable" className="table resonsive nowrap" width="100%">
                                <thead>
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
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Journals);