import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

const TableRow = ({id, person, description, distance, price, date, handleRemove}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>{distance}</td>
            <td>{description}</td>
            <td>{person}</td>
            <td>{price}</td>
            <td>
                <ButtonGroup>
                    <Button
                        variant="secondary"
                        size="sm"
                    >
                        Edit
                    </Button>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={handleRemove}
                    >
                        Remove
                    </Button>
                </ButtonGroup>
            </td>
        </tr>
    );
}

export default TableRow;