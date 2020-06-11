import React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../redux/actionCreators'
import m from '../css/footer.module.css'

const Footer = () => (
    <div className={m.footer_wrapper}>
        <div className={m.button}>
            {/*<span>Show: </span>*/}
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                All
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </div>
    </div>
)

export default Footer
