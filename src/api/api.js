import Server from './server';

class API extends Server {
  /**
   * 获取医生列表
   * @method post
   * @return {Promise}
   */
  async getDoctorList(data = {}) {
    try  {
      let res = await this.axios("POST", "/user/doctorList", data);
      if (res && (res instanceof Object) && res.code === 0) {
        return res.doctorList || {};
      } else {
        let err = {
          tip: "获取医生列表失败",
          response: res,
          data: data,
          url: '/user/doctorList'
        }
        throw err;
      }
    }
    catch (err) {
      throw (err);
    }
  }

  /**
   * 获取关注医生列表
   * @method post
   * @return {Promise}
   */
  async getFollowList(pageNum) {
    let userId = "ojppT0htTwajX3rbJhPy6f6piEFQ";
    try  {
      let res = await this.axios("POST", "/user/followList", { pageNum: pageNum, userId: userId });
      if (res && (res instanceof Object) && res.code === 0) {
        return res.followList || {};
      } else {
        let err = {
          tip: "获取关注医生列表失败",
          response: res,
          url: '/user/followList'
        }
        throw err;
      }
    }
    catch (err) {
      throw (err);
    }
  }

  /**
   * 获取医生详情
   * @method get
   * @param {id} openId 
   * @return {Promise}
   */
  async getDoctorDetail(openId) {
    let userId = "ojppT0htTwajX3rbJhPy6f6piEFQ";
    try  {
      let res = await this.axios("GET", "/user/userDetail?userId=" + userId + "&openId=" + openId);
      if (res && (res instanceof Object) && res.code === 0) {
        return res.userDetail || {};
      } else {
        let err = {
          tip: "获取医生详情失败",
          response: res,
          url: '/user/userDetail'
        }
        throw err;
      }
    }
    catch (err) {
      throw (err);
    }
  }

  /**
   * 获取用户详情
   * @method get
   * @param {id} userId 
   * @return {Promise}
   */
  async getUserDetail(userId) {
    if (typeof userId == "undefined") {
      userId = "ojppT0htTwajX3rbJhPy6f6piEFQ";
    }
    try  {
      let res = await this.axios("GET", "/user/personalDetail?userId=" + userId);
      if (res && (res instanceof Object) && res.code === 0) {
        return res.personalDetail || {};
      } else {
        let err = {
          tip: "获取用户详情失败",
          response: res,
          url: '/user/personalDetail'
        }
        throw err;
      }
    }
    catch (err) {
      throw (err);
    }
  }

  /**
   * 是否关注某个医生
   * @param {currentUserId} userId 
   * @param {openId} openId 
   */
  async handleFollowing(userId, openId) {
    try {
      let res = await this.axios("POST", "/user/followUser", { userId: userId, openId: openId });
      if (res && (res instanceof Object) && res.code === 0) {
        return res.msg;
      } else {
        let err = {
          tip: "获取关注信息失败",
          response: res,
          url: "/user/followUser"
        }
        throw err;
      }
    }
    catch (err) {
      throw (err);
    }
  }

  /**
   * 修改用户详情
   * @return {promise}
   */
  async updateInfo(data = {}) {
    try {
      let res = await this.axios("POST", "/user/updateInfo", data);
      if (res && (res instanceof Object) && res.code === 0) {
        return true;
      } else {
        let err = {
          tip: "修改用户详情失败",
          response: res,
          url: "/user/updateInfo"
        }
        throw err;
      }
    }
    catch (err) {
      throw (err);
    }
  }
}

// export function isFollowing(userId, openId) {
//   return axios.post('/user/followUser', { userId: userId, openId: openId });
// }

export default new API();