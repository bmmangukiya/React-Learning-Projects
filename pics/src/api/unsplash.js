import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID l-lCQL3XuuZ9sGb0Ymj57BHROMNZ14YVAF8udqWoh1A",
  },
});
