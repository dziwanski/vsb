import {useSelector} from "react-redux";
import TableRow from "./TableRow";
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RepairHistory = () => {
    const works = useSelector(store => store.worksReducer);

    const worksList = works.map(work => (
        <TableRow key={work.id} {...work} date="00/00/0000" />
    ));

    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Distance</th>
                    <th>Description</th>
                    <th>Workshop</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {worksList}
            </tbody>
        </Table>
    );
}

export default RepairHistory;