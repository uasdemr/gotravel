import { Link } from "react-router-dom"
import { CITY_NAMES } from '../../const'

type TabsPropsType = {
    cityName: string
    onTabClick: (string: string) => void
}

const tabsCreator = ({cityName, onTabClick}: TabsPropsType): JSX.Element[] => {
    return CITY_NAMES.map((city) => {
        return (
            <li key={city} className="locations__item">
                <Link
                    className={cityName === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
                    to="/#"
                    onClick={(evt) => {
                        onTabClick(evt.currentTarget.innerText)}
                    }
                    >
                    <span>{city}</span>
                </Link>
            </li>
        )
    })
}

function Tabs({ cityName, onTabClick }: TabsPropsType): JSX.Element {
    return (
        <div className="tabs">
            <section className="locations container">
                <ul className="locations__list tabs__list">
                    {tabsCreator({cityName, onTabClick})}
                </ul>
            </section>
        </div>
    )
}

export default Tabs