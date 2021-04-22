import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Form} from "react-bootstrap";
import {addRepair} from '../../actions/actions';

const AddRepairForm = () => {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState(100000);
    const [description, setDescription] = useState('');
    const [workshop, setWorkshop] = useState('');
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const dispatchAddRepair = dataSet => dispatch(addRepair(dataSet));

    const handleSubmit = event => {
        event.preventDefault();

        dispatchAddRepair({
            workshop,
            date,
            description,
            distance,
            price
        });
    }

    const handleChange = (setStateMethod) => (event) => setStateMethod(event.target.value);

    return (
        <Form className="mr-1" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" onChange={(e) => setDate(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Distance</Form.Label>
                <Form.Control type="number" min="0" onChange={handleChange(setDistance)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" onChange={handleChange(setDescription)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Workshop</Form.Label>
                <Form.Control type="text" onChange={handleChange(setWorkshop)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" min="0" onChange={handleChange(setPrice)}/>
            </Form.Group>
            <Button type="submit">Add new</Button>
        </Form>
    );
}

export default AddRepairForm;