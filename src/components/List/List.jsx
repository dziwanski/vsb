import {useSelector} from "react-redux";
import WorkElement from "../WorkElement/WorkElement";

const List = () => {
    const works = useSelector(store => store.worksReducer);

    const worksList = works.map(work => (
        <WorkElement key={work.id} {...work} />
    ))
    console.log(works);
    return (
        <ul>
            {worksList}
        </ul>
    );
}

export default List;