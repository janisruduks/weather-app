import './styles.css';

import { BackgroundProps } from '@/types';

const Background = ({ cityName }: BackgroundProps) => {
    const city = cityName ? cityName + ' ' : 'weather app ';


    return (
        <div className='background-wrapper'>
            <div>
                <h1 className='bg-text'>{city.repeat(200)}</h1>
            </div>

        </div>
    );
}

export default Background;