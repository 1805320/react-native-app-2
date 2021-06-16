import axios from "axios";

const id = "8FBRhTJvVHUqApq2v28QM9yXfL19WFxKYHBZ-Rqntk8";

export const getSearchResult = (term) => {
    return axios({
        method: "get",
        url: `https://api.unsplash.com/search/photos/?client_id=${id}&query=${term}`
    })
}