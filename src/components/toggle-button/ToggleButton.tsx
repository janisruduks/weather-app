import './styles.css'
import { useState } from 'react';
import Button from '../button/Button';

type ToggleButtonProps = {
    text: string | undefined | number;
    children: React.ReactNode;
    enable?: boolean;
}

const ToggleButton = ({ children, text, enable }: ToggleButtonProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const onMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='menu__items'>
            <Button
                onClick={onMenuClick}
                type={isMenuOpen ? 'regular' : 'primary'}
            >
                {children}
            </Button>
            <div 
                className={`menu__info ${isMenuOpen || enable ? "" : "menu__info__disable"}`}
            >
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ToggleButton;