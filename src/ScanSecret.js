import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { Dialog, DialogContent } from '@material-ui/core'
import { CameraAlt as CameraIcon } from '@material-ui/icons'
import { withStyles } from '@material-ui/core'
import QrReader from 'react-qr-reader'

const styles = theme => ({
  qr: {
    width: '50%'
  },
  paperFullScreen: {
    width: '75%',
    height: '75%'
  }
})

class ScanSecret extends Component {
  state = {
    open: false
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Button variant="contained" onClick={() => this.setState({ open: true })}>
          <CameraIcon />
          Scan Secret
        </Button>

        <Dialog
          fullScreen
          classes={{paperFullScreen: classes.paperFullScreen}}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <DialogContent>
            <QrReader
              delay={200}
              style={{width: '50%', margin: '0 auto'}}
              onError={error => console.error(error)}
              onScan={result => console.log(result)}
            />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}


export default withStyles(styles)(ScanSecret)