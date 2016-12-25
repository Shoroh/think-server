import React, { DOM } from 'react';
import _ from 'lodash';
import BlogItem from '../ui/BlogItem';

const BlogList = ({ posts }) => (
  DOM.ul(
    null,
    _.map(
      posts,
      (post, key) => (
        DOM.li({ key },
          React.createElement(BlogItem, { post }))
      )
    )
  )
)

export default BlogList;
