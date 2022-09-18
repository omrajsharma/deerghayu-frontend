import React from 'react';
import { ReactComponent as DocumentIcon } from '../../../UI/icons/svg/DocumentIcon.svg' 
import { ReactComponent as DownloadIcon } from '../../../UI/icons/svg/DownloadIcon.svg'
import './style/Report.css';

const reportList = [
  {
    id: 1,
    title: 'Thyroid Glad ',
    description: 'This is the first report',
  },
  {
    id: 1,
    title: 'Thyroid Glad ',
    description: 'This is the first report',
  },
  {
    id: 1,
    title: 'Thyroid Glad ',
    description: 'This is the first report',
  },
  {
    id: 1,
    title: 'Thyroid Glad ',
    description: 'This is the first report',
  },
  {
    id: 1,
    title: 'Thyroid Glad ',
    description: 'This is the first report',
  },
  {
    id: 1,
    title: 'Thyroid Glad ',
    description: 'This is the first report',
  },
  {
    id: 1,
    title: 'Thyroid Glad ',
    description: 'This is the first report',
  },
  {
    id: 1,
    title: 'Thyroid Glad ',
    description: 'This is the first report',
  },

]

function Report() {
  return (
    <div className='report-container'>
      {
        reportList.map((report) => (
          <div className='report-card'>
            <div className='report-icon'>
              <DocumentIcon width={'32px'} color={'#343434'} />
            </div>
            <div className='report-body'>
              <div className='report-name'>
                {report.title}
              </div>
              <div className='report-desc'>
                {report.description}
              </div>
            </div>
            <div className='report-download'>
              <DownloadIcon width={'24px'} color={'#343434'} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Report