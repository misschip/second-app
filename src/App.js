import React, { Component } from 'react';
import Post from "./Post";
import styled from 'styled-components';

const ContainerBox = styled.div`
display: grid;
justify-content: center;
`;

class App extends Component {

  state = {
    posts: [
      {
        id: 1,
        title: "제목1"
      },
      {
        id: 2,
        title: "제목2"
      },
      {
        id: 3,
        title: "제목3"
      },
    ]
  }

  add = () => {
    this.setState({
      posts: this.state.posts.concat({    // concat 연산자로 배열에 객체를 추가할 수도 있음
        id: 4,
        title: "제목4"
      })
    });
  }

  del = () => {
    this.setState({
      posts: this.state.posts.filter((post) => {
        return post.id !== 2;   // id가 2인 것만 필터(삭제)하고 남김
      })
    })
  }

  // 수정 버튼 클릭시 id:2 버튼의 title을 '제목200'으로 수정
  update = () => {
    const data = {
      id: 2,
      title: "제목200",
    };

    this.setState({
      posts: this.state.posts.map((post) => post.id === data.id ? data : post)
      // posts: this.state.posts.map((post) => post.id === data.id ? { ...post, ...data } : post),
    });
  };

  render() {



    return (
      <div>
        <ContainerBox>
          <button onClick={this.del}>삭제</button>
          <button onClick={this.add}>추가</button>
          <button onClick={this.update}>수정</button>
          {this.state.posts.map((post) => {
            return <Post id={post.id} title={post.title} />
          })}
        </ContainerBox>
      </div>
    );
  }
}

export default App;