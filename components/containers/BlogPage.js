import React from 'react';
import BlogList from '../ui/BlogList';

const posts = [
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #1'
  },
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #2'
  },
  {
    imageSrc: "http://jobstr.com/user_images/international-flower-buyer-4426.jpg",
    text: 'This is the text string #3'
  }
]

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
  }
  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { posts });
  }
}

export default BlogPage;
