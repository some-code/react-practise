import React from 'react';
import { 
  SegmentedControl,
  WingBlank,
  WhiteSpace,
} from 'antd-mobile';
import './index.less';

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = ['正在', '已过期', '已删除'];
  }
  render() {
    return (
      <div className='clocks-page'>
        <WingBlank>
          <WhiteSpace/>
          <SegmentedControl values={this.tabs} />
          <WhiteSpace/>
        </WingBlank>
      </div>
    );
  }
}

export default TabBarExample