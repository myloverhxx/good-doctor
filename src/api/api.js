import Server from './server';

class API extends Server {
  /**
   * 获取医生列表
   * @method get
   * @return {Promise}
   */
  async getDoctorList(data = {}) {
    try  {
      let res = await this.axios("post", "/user/doctorList", data);
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
}

export default new API();