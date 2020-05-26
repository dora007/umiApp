
import { connect } from 'dva';
import React from 'react';


const mapStateToProps = state => {
  const jiraReport = state['jiraReport'];
  return {
    jiraReport,
  };
};

const JiraReport = props => {
  return <div>222</div>

}

export default connect(mapStateToProps, null)(JiraReport);