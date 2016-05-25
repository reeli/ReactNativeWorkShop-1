
export const FetchUser = "fetchUser";

const mockList = [
        {
            "name": "武昆",
            "office": "西安",
            "title": "Dev",
            "created_at": "2016-02-26 07:13:25",
            "id": 15,
            "project": "C4Media",
            "avatar": "http://7xr6pw.com1.z0.glb.clouddn.com/f67301466441e3e6356d1d56b030f885.png",
            "onboard": "2013-05-02",
            "email": "kunwu@thoughtworks.com"
        },
        {
            "name": "秦五一",
            "office": "西安",
            "title": "QA",
            "created_at": "2016-02-26 07:31:07",
            "id": 21,
            "project": "Lever",
            "avatar": "http://7xr6pw.com1.z0.glb.clouddn.com/9302eb5ba1b2134c6513c873d9d4d9fc.png",
            "onboard": "2014-10-10",
            "email": "wyqin@thoughtworks.com"
        }
    ]

export function fetchUserListAction(data = mockList) {
  // body...
  return {
    type: FetchUser,
    data: data
  }
}