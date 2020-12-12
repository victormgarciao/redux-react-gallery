import './App.css';
import Gallery from './containers/molecules/GalleryContainer/gallery.container';
import SingleView from './containers/molecules/SingleViewContainer/single-view.container';


function App() {
  return (
    <div className="App" data-testid="App">
      <h1>Hello Gif!</h1>
      <Gallery />
      <SingleView />
    </div>
  );
}


export default App;
