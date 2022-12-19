import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const SubSchemeDeleteButton = (params) => {
    return <div className='f6 pointer' onClick={() => params.handleDeleteSubScheme(params.status.row.id)}><DeleteIcon color="actions"/><span className='ml2 b'>Exclude</span></div>
    }

export default SubSchemeDeleteButton