import React, { DOM } from 'react';
import Image from '../ui/Image';
import TextBox from '../ui/TextBox';

class BlogItem extends React.Component {
  render() {
    const { post } = this.props;
    return DOM.div(null,

        React.createElement(Image, {
          src: post.imageSrc,
          alt: post.text,
          width: '100px' }),

        React.createElement(TextBox, { text: post.text })
    )
  }
}

export default BlogItem;
