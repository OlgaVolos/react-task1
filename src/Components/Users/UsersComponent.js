import React, {Component} from 'react';
import './UsersStyle.css'
class UsersComponent extends Component {
    render() {
        let {item, clName} = this.props;
        return (
            <div className={clName}>
                <h4>
                    {item.id}+{item.name}+{item.age}+{item.status.toString()}+{item.address.city}
                </h4>
                
            </div>
        );
    }
}

export default UsersComponent;