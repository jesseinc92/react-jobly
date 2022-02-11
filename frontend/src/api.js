import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get token after logging in a user. */

  static async authUser(username, password) {
    let res = await this.request(`auth/token`, { username, password }, 'post' );
    return res.token;
  }

  /** Get user by username */

  static async getUser(token, username) {
    this.token = token;
    let res = await this.request(`users/${username}`);
    return res;
  }

  /** Apply for a job given user id and job id */

  static async applyForJob(token, username, jobId) {
    this.token = token;
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, 'post');
    return res.applied;
  }

  /** Get details on all companies.
   * 
   *  If there is a query string, perform filter operations.
   */

  static async getAllCompanies(query) {
    if (query) {

      // construct the query string from the query object
      const queryKey = Object.keys(query)[0];
      const queryValue = Object.values(query)[0];
      const queryString = `?${queryKey}=${queryValue}`;
      
      let res = await this.request(`companies${queryString}`);
      return res.companies;
    } else {
      let res = await this.request(`companies`);
      return res.companies;
    }
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all jobs.
   * 
   *  If there is a query string, perform filter operations.
   */

  static async getAllJobs(query) {
    if (query) {

       // construct the query string from the query object
      const queryKey = Object.keys(query)[0];
      const queryValue = Object.values(query)[0];
      const queryString = `?${queryKey}=${queryValue}`;
      
      let res = await this.request(`jobs${queryString}`);
      return res.jobs;
    } else {
      let res = await this.request(`jobs`);
      return res.jobs;
    }
  }
}


export default JoblyApi;