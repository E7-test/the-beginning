import React, { useState } from 'react';

const Yess = () => {
    
        const [clicks, setClicks] = useState(0);
        const [buttons, setButtons] = useState([]);
        const [buttonText, setButtonText] = useState();
    
        const handleClick = () => {
            setClicks(prevClicks => {
                const newClicks = prevClicks + 1;
                if (newClicks === 4) {
                    setButtonText("Then keep going!");
                      // Reset clicks
                } else if (newClicks === 6) {
                    setButtons([...buttons, <button className='yess' key={buttons.length}>How many clicks?</button>]);
                    setClicks(0);
                    setButtonText('What now?');

             

                }
                return newClicks;
            });
        };
    
        return (
            <div>
                <button className='yess' onClick={handleClick}>{buttonText}</button>
                <div>
                    {buttons.map((btn, index) => <div key={index}>{btn}</div>)}
                </div>
            </div>
        );
    };
    
    

      
  export default Yess;