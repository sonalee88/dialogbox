import React from 'react';

const dialogbox =({reports}) => {
    return(
        <div className='dialog-container'>
            <h2>Recently Generated Reprts</h2>
            <ul>
                {reports.map(reports, (report) =>(
                    <li key={report.id}>
                        {report.name}-{report.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default dialogbox;
