
export const FetchUser = "fetchUser";

const mockList = [
        {
            "name": "管大",
            "office": "西安",
            "title": "Dev",
            "created_at": "2016-02-26 07:13:25",
            "id": 15,
            "project": "C4Media",
            "avatar": "http://www.bvgv.com/uploadfile/2013/1221/20131221101556917.jpg",
            "onboard": "2013-05-02",
            "email": "yyyyyyyyyyyy@xxxxx.com"
        },
        {
            "name": "官2",
            "office": "西安",
            "title": "QA",
            "created_at": "2016-02-26 07:31:07",
            "id": 21,
            "project": "Lever",
            "avatar": "http://himg2.huanqiu.com/attachment2010/2013/0419/20130419053208847.jpg",
            "onboard": "2014-10-10",
            "email": "xxxxxxxxxx@xxxxx.com"
        }
    ]

export function fetchUserListAction(data = mockList) {
  // body...
  return {
    type: FetchUser,
    payload: data
  }
}