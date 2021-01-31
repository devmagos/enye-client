import { useState } from 'react'
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import Page from './components/Page';
import './App.css'



function App({ dispatch, post, loading, err }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [updateInput, setUpdateInput] = useState('')

  const indexOfLastPost = currentPage + postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPost = post?.records?.profiles?.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const getSearch = (searchInput) => {
    setUpdateInput(searchInput)
    console.log(searchInput)
    return searchInput
  }


  console.log()
  return (
    <div className="App">
      <div className="body">
        <Navbar dispatch={dispatch} getSearch={getSearch} />
        {/* <h3 style={{ marginTop: "20%" }} className="text-dark"> Mayorwa </h3> */}
        <div style={{ marginTop: '10%' }}>
          <div className="container">
            <div className="row">
              {console.log(post)}
              <Page post={currentPost} search={updateInput} loading={loading} err={err} totalPost={post} paginate={paginate} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}



const mapStateToProps = (state) => ({
  loading: state.loading,
  post: state.post,
  err: state.err
})


export default connect(mapStateToProps)(App);
