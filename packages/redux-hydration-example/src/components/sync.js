import React from 'react'
import { connect } from 'react-redux'

class Sync extends React.Component {

  componentWillMount() {
    // If these are executed even after state is hydrated it will result in infinite loop
    if (!this.props.hydrationReducer.ready) {
      this.props.dispatch({ type: 'HYDRATE_REGISTER', resolve: ['SYNC_SUCCESS', 'SYNC_FAIL'] })
      this.props.dispatch({ type: 'SYNC_START' })
    }
  }

  render() {
    const { serverData } = this.props

    return (
      <div>
        <div>{serverData}</div>
      </div>
    )
  }
}

const mapState = (state) => ({ hydrationReducer: state.hydrationReducer, serverData: state.app.serverData })

export default connect(mapState)(Sync)
