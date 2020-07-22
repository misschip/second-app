import React from 'react';
import styled from "styled-components";

const PostBox = styled.div`
    height: 100px;
    width: 300px;
    border: 1px solid black;

`;

const Post = (props) => {
    return (
        <PostBox>{props.title}</PostBox>
    );
};

export default Post;