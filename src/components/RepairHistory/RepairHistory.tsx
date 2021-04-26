import {useDispatch, useSelector} from "react-redux";
import TableRow from "./TableRow";
import AddRepairForm from './AddRepairForm';
import {Table, Form, Button, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {deleteRepair} from '../../actions/RepairHistory/actions';

const RepairHistory = () => {
    // @ts-ignore
    const works = useSelector(store => store.repairHistoryReducer);
    const dispatch = useDispatch();

    // @ts-ignore
    const dispatchDeleteRepair = id => () => dispatch(deleteRepair(id));

    // @ts-ignore
    const worksList = works.map(work => (
        <TableRow key={work.id} {...work} handleRemove={dispatchDeleteRepair(work.id)}/>
    ));

    return (
        <>
            <AddRepairForm />

            <Table striped hover>
                <thead>
                <tr>
                    <th>ID</th>
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
        </>
    );
}

export default RepairHistory;
