import { useState, useEffect } from 'react';
import { getPost } from '../actions'

const Navbar = ({ post, dispatch, getSearch }) => {

    // state
    const [input, setInput] = useState('')

    useEffect(() => {
        dispatch(getPost())
    }, []);


    // handlers
    const handleChange = (e) => {
        const { name, value } = e.target
        setInput(() => ({ [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getSearch(input)
    }

    return (
        <header className="header shadow-lg mb-5">
            <div className="header__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                {/* header logo */}
                                <a href="index.html" className="header__logo">
                                    <h2 className="text-secondary font-weight-bold">ENYE</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header search */}
            <form onSubmit={handleSubmit} className="header__search">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__search-content">
                                <input className="text-dark" onChange={handleChange} name='search' type="text" placeholder="Search names here" />
                                <button type="button">search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* end header search */}
        </header>

    )
}


export default Navbar;