import React from 'react';

const Current = props => (
    <div>
    <div className="location">
              <h1 className="location-timezone">Timezone</h1>
              <canvas className="icon" width={128} height={128} />
            </div>
            <div className="temperature">
              <div className="degree-section">
                <h2 className="temperature-degree">40 </h2>
                <span>°F</span>
              </div>
              <div className="temperature-description">Its HOT</div>
              
            </div>
            </div>

);
export default Current;
