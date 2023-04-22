import { SearchBar } from '../Components';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className='Dashboard'>
            <p className='Heading'>
                Weather App
            </p>
            <SearchBar/>
        </div>
    );
}

export default Dashboard;
