import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = async ()=> {
    try {
        const response = await axiosWithAuth()
        .get("/articles")
        return response;
      } catch (err) {
        console.log(err);
      }
    }

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.