import React, { Component } from 'react';
import '../../statics/iconfont/iconfont';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  // SearchInfo,
  // SearchInfoTitle,
  // SearchInfoSwitch,
  // SearchInfoList,
  // SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <span className='icon iconfont'>&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className='iconfont'>
              &#xe60c;
						</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <span className="icon iconfont">&#xe6e5;</span>
							写文章
						</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
export default Header;