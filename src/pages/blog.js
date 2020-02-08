import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components';

const Blog = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>ぶろぐだよ</h1>
    <Sample>さんぷるでーす</Sample>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

const Sample = styled.div`
  color: red;
`;

export default Blog
