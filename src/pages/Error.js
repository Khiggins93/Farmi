//rfc: Create a React Functional Component
import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div title='404' subtitle='page not found' >
            <p> 404 Page not Found</p>
            <Link to="/">
            <button>
                return home
            </button>
            </Link>
            
        </div>
        )
    }
