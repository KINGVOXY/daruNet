import * as home from "../controllers/home_controller.ts";

export const routes = 
[
    {
        PATH: "./views/home/index.html",
        URL: ["/"],
        GET: home.get_index
    },
    {
        PATH: "./views/home/status.html",
        URL: ["/status"],
        GET: home.get_status
    }
];