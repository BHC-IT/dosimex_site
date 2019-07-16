import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

import { BrowserRouter as Redirect, withRouter } from "react-router-dom";

class MenuExamplePointing extends Component {


        constructor(props){
                super(props);
                this.redirectTo = this.redirectTo.bind(this);
                this.handleItemClick = this.handleItemClick.bind(this);
                this.state = {
                        activeItem:'Home'
                }
        }

        handleItemClick = (e, { name }) => this.setState({ activeItem: name })

        redirectTo(props, name, link){
                this.props.history.push(link);
                this.handleItemClick(props, name);
        }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        {/* <this.redirectTo link={"/about"}/> */}
        <Menu pointing style={{backgroundColor: "red"}}>
                <Menu.Item 
                        style={{color: "white"}}
                        name='Home' 
                        active={activeItem === 'Home'} 
                        onClick={(e, name) => this.redirectTo(e, name, "/")} 
                />
                <Menu.Item
                        style={{color: "white"}}
                        name='A propos'
                        active={activeItem === 'A propos'}
                        onClick={(e, name) => this.redirectTo(e, name, "/about")}
                />
                <Menu.Item
                        style={{color: "white"}}
                        name='Notre équipe'
                        active={activeItem === 'Notre équipe'}
                        onClick={(e, name) => this.redirectTo(e, name, "/equipe")}
                />
                 <Menu.Item
                        style={{color: "white"}}
                        name='Les offres Dosimex'
                        active={activeItem === 'Les offres Dosimex'}
                        onClick={(e, name) => this.redirectTo(e, name, "/offres")}
                />
                <Menu.Item
                        style={{color: "white"}}
                        name='Nos tutos'
                        active={activeItem === 'Nos tutos'}
                        onClick={(e, name) => this.redirectTo(e, name, "/tutos")}
                />
                {/* <Menu.Menu position='right'>
                <Menu.Item>
                <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                </Menu.Menu> */}
        </Menu>
        {/* <Segment>
{        console.log(this.props) }
        {this.props.children.map(i => i.type(i.props))}

        
        </Segment> */}
      </div>
    )
  }
}

const MenuExamplePointingWithRouter = withRouter(MenuExamplePointing);

export default MenuExamplePointingWithRouter