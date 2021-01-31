import React from 'react';
import Pagination from './Pagination'
import { connect } from 'react-redux'
import Item from './Item'
import Nominate from './Nominate';


const Page = ({ loading, post, totalPost, paginate, err, nomination, search }) => {

    console.log(totalPost, post)
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPost?.records?.profiles?.length / post?.length); i++) {
        pageNumber.push(i)
        console.log(i)
    }

    console.log(totalPost?.records?.profiles[0].FirstName, '>>>>>>', search?.search)

    const Displaying = () => {
        if (loading) {
            return <h2 id="loading" className="mx-auto"></h2>
        } else if (search.search.length > 1 && totalPost) {
            <div className="t-5 border-0" style={{ width: '100%', background: 'transparent' }} >
                {totalPost?.records?.profiles.map((each, i) => {
                    if (search?.search?.length > 0 && search?.search?.toLowerCase() === each?.FirstName?.toLowerCase()) {
                        return <h2 className="text-light" key={i + 1}>{each.FirstName} {each.LastName}</h2>
                    }
                })
                }
            </div>
        } else {
            return (
                <div className="t-5 border-0" style={{ width: '100%', background: 'transparent' }} >
                    {post?.map((each, index) => <h2 className="text-light" key={index + 1} id={index}>{each.FirstName} {each.LastName}</h2>)}
                </div>
            )
        }
    }


    return (
        <>
            <div className="col-xl-7 col-lg-7 col-md-8 mt-2 pt-5 ">
                {Displaying()}
                <div className="d-flex">
                    {pageNumber.map((num, i) => <ul className="px-4 pagination">
                        <li key={i + 1} className="page-item text-white">
                            <button onClick={() => paginate(num)} className="page-link">
                                <h5 className="text-dark text-weight-bold">{num}</h5>
                            </button>
                        </li>
                    </ul>)}
                </div>
            </div>
        </>

    )
}

export default Page;