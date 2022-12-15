import React from 'react'
import PageviewIcon from '@mui/icons-material/Pageview';

const CommentButton = (params) => {
    
        if(params.status.row.aor_verified_status === 'R'){
            return (
                <div className='f6 pointer' onClick={() => params.handleViewComment(params.status.row.id)}><PageviewIcon color="actions"/><span className='ml2 b'>View</span></div>
              )
        }else {
            return ''
        }
    }

export default CommentButton