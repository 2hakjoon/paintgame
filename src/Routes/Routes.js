import { Route, Switch } from "react-router-dom";
import App from "../Components/App";
import NotFound from "./NotFound";


<Switch>
    <Route exact path="/" component={App} />
    <Route component={NotFound} />
</Switch>