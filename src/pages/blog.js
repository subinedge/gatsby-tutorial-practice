import React, { Component } from 'react';
import Layout from "../components/layout";
import blogStyles from '../components/blog.module.css'

export default class blog extends Component {
  render() {
    return (
      <Layout>
        <h1 className={blogStyles.test}>This is a class based Component</h1>
      </Layout>
    );
  }
}