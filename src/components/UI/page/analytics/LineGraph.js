import React from 'react';
import './style/LineGraph.css'
import LineGraphImage from '../../../../assets/images/line-graph.png';

function LineGraph() {
  return (
    <>
    <div className='analytics-line-graph-container'>
        <div className='line-instruction'>
            <div className='graph-heading'>
                Cholesterol
            </div>
            <div className='graph-notation'>
                <span style={{color: '#CE2A96', fontWeight: '600'}}>---</span> 
                <span style={{marginRight: '4px'}}>THIS YEAR</span>
                <span style={{color: '#7B61FF', fontWeight: '600'}}>---</span>
                <span>AVERAGE</span>
            </div>
        </div>
        <div className='line-graph-container'>
            <div className='line-graph-card'>
                <img src={LineGraphImage} alt='line-graph' />
            </div>
        </div>
        <div className='graph-report'>
            <div className='graph-report-field'>
                <div>Status</div>
                <div className='graph-status-pill'>Critical</div>
            </div>
            <div className='graph-report-field'>
                <div>All Time High</div>
                <div className='text-dark'>93.6</div>
            </div>
            <div className='graph-report-field'>
                <div>All Time Minimum</div>
                <div className='text-dark'>74.3</div>
            </div>
            <div className='graph-report-field'>
                <div>Best Month</div>
                <div className='text-dark'>August</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LineGraph