import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from 'styled-components';


const Blog = () => (
  <div>
    <SEO title="Page two" />
    <h1>ぶろぐだよ</h1>
    <Sample>さんぷるでーす</Sample>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

const Sample = styled.div`
  color: red;
`;

export default Blog
