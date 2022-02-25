import { useState } from 'react';
import {SortOfferVariants} from '../../const'

type SortType = {
  sorting: string;
  setSort: Function;
}

function Sort({sorting, setSort}: SortType): JSX.Element {

  const [isSortOpen, setIsSortOpen] = useState(false)

  const onSortCLickHandler = (sort: string) => {
    setSort(sort)
    setIsSortOpen(!isSortOpen)
    
  }

  const onSortByClickHandler = () => {
    setIsSortOpen(!isSortOpen)
  };

  const sortElements = SortOfferVariants.map(sort => {
    const isActive = sorting === sort ? ' places__option--active' : ''
    return (
      <li
        key={sort}
        className={`places__option ${isActive}`}
        tabIndex={0}
        onClick={() => {onSortCLickHandler(sort)}}
      >
        {sort}
      </li>
    )
  })

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={onSortByClickHandler} className="places__sorting-type" tabIndex={0}>
          {sorting}
          <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
          </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpen ? 'places__options--opened' : ''}`}>
          {sortElements}
      </ul>
    </form>
  )
}

export default Sort;