import React from 'react';
import PhonesList from '../ui/PhonesList';

const phones = [
  {
    name: 'Alex',
    phone: '+7 900 123 45 78'
  },
  {
    name: 'John',
    phone: '+7 900 123 45 78'
  },
  {
    name: 'Mary',
    phone: '+7 900 123 45 78'
  },
]

 class PhonesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phones };
  }

  render() {
    const { phones } = this.state;
    return React.createElement(PhonesList, { phones })
  }
}

export default PhonesContainer;
