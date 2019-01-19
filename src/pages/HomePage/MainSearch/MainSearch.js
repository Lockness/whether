'use-strict';

import DatePicker from './DatePicker';
import PlacesPicker from './PlacesPicker';
import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'antd';

class MainSearch extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    let { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical">
        <PlacesPicker getFieldDecorator={getFieldDecorator} />
        <DatePicker getFieldDecorator={getFieldDecorator} />
        <Form.Item>
          <Button>Search</Button>
        </Form.Item>
      </Form>
    );
  }
}

MainSearch.propTypes = {
  form: PropTypes.object
};

const WrappedMainSearch = Form.create()(MainSearch);
export default WrappedMainSearch;
