import React from 'react'
import { Button } from 'semantic-ui-react'
import { Grid , GridRow } from 'semantic-ui-react'

function HideButton({ hideComments , setHideComments }) {
  

  return (
    <div className='centered-text'>
        <Button onClick={() => setHideComments(!hideComments)}>Hide Comments</Button>
        <Grid>
            <GridRow>---------------------------------------------------------------------------------------------------------------------------------</GridRow>
        </Grid>
    </div>
  )
}

export default HideButton
