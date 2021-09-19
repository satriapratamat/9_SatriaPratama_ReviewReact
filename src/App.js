import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./component/Home";
import Contact from "./component/Contact_Us";
import Review from "./component/Review";
import News from "./component/NewsPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/review" exact component={Review} />
          <Route path="/news" exact component={News} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
