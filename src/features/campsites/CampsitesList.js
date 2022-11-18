import { useSelector } from 'react-redux';
import { selectAllCampsites } from './campsitesSlice';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import CommentForm from '../comments/CommentForm';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;
