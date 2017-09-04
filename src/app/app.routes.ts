import { Route } from "@angular/router";
import {
  HomeComponent,
} from "./home.component";

const routes: Route[] = [
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "home", pathMatch: "full"}
];

export default routes;
