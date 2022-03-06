
import Cities from '../../components/cities/cities';
import Tabs from '../../components/tabs/Tabs';

function Main(): JSX.Element {
 

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Cities />
      </main>
    </div>
  );
}

export default Main;
