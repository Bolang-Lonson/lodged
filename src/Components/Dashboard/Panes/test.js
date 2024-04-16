const {exec} = require('child_process');

const apiToken = 'T1RLAQJKaJzgXYcnTcrc09TS1Ech94x/lqdPDXSEcy/OezER6RB1jwrYpQOpAEtP2FEl2CRNAADggIUY87PkIpv4ZDhaTCjEz3LfVTaIJKfNIBQpZh4+Z16zF0HyhiNA/uAvKW4UE/xrvaPGahAvS0l8UZdg8GrHhYJti9FK2iYdJdNgPS5R6ru8ch8sQd6iQIC+SR0H3i191z0nql7oSeilodj4qwZUdWy7insgMgd5XKjvgXOt/uxkiuQAyxdwrbJs69xYXo3fGpXWL3oXEANeYiBI14xdm5W570ErFIQtv+cOGVtqT7wXVpvmlvb4o8eMqq6Pzsoc7VdJtU5ttCnXJg1F0DBpvLOoThV8mE/r9F3LM1MVAGA*';

// fetch('https://api.cert.platform.sabre.com/v1.0.0/shop/hotels/image?mode=image', {
//     method: "post",
//     headers: {
//         "accept": "application/json",
//         "Content-Type": "application/json",
//         "authorization": `Bearer ${apiToken}`
//     },
//     body: {
//         "GetHotelImageRQ": {
//             "ImageRef": {
//                 "CategoryCode": 3,
//                 "LanguageCode": "EN",
//                 "Type": "ORIGINAL"
//             },
//             "HotelRefs": {
//                 "HotelRef": [
//                 {
//                     "HotelCode": "426",
//                     "CodeContext": "Sabre"
//                 }
//                 ]
//             }
//         }
//     }
// }).then((resp) => resp.json())
// .then(data => console.log(data))

exec(`curl -X 'POST' \
'https://api.cert.platform.sabre.com/v1.0.0/shop/hotels/media' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-H 'authorization: Bearer T1RLAQJKaJzgXYcnTcrc09TS1Ech94x/lqdPDXSEcy/OezER6RB1jwrYpQOpAEtP2FEl2CRNAADggIUY87PkIpv4ZDhaTCjEz3LfVTaIJKfNIBQpZh4+Z16zF0HyhiNA/uAvKW4UE/xrvaPGahAvS0l8UZdg8GrHhYJti9FK2iYdJdNgPS5R6ru8ch8sQd6iQIC+SR0H3i191z0nql7oSeilodj4qwZUdWy7insgMgd5XKjvgXOt/uxkiuQAyxdwrbJs69xYXo3fGpXWL3oXEANeYiBI14xdm5W570ErFIQtv+cOGVtqT7wXVpvmlvb4o8eMqq6Pzsoc7VdJtU5ttCnXJg1F0DBpvLOoThV8mE/r9F3LM1MVAGA*' \
-d '{
    "GetHotelMediaRQ": {
      "HotelRefs": {
        "HotelRef": [
          {
            "HotelCode": "310417",
            "CodeContext": "Sabre",
            "ImageRef": {
              "MaxImages": "6",
              "Images": {
                "Image": [
                  {
                    "Type": "ORIGINAL"
                  }
                ]
              },
              "Categories": {
                "Category": [
                  {
                    "Code": 3
                  }
                ]
              },
              "AdditionalInfo": {
                "Info": [
                  {
                    "Type": "CAPTION",
                    "content": true
                  }
                ]
              },
              "Languages": {
                "Language": [
                  {
                    "Code": "EN"
                  }
                ]
              }
            }
          }
        ]
      }
    }
}'`, (error, stdout, stderr) =>{
    let data = JSON.parse(stdout);
    try{
        let image = data.GetHotelMediaRS.HotelMediaInfos.HotelMediaInfo[0].ImageItems.ImageItem[0].Images.Image[0].Url;
        console.log('Image link: ',image);
    }catch{
        console.log('No image data availaible');
    }
    console.log(stdout);
});

let data = {
    "GetHotelImageRS":{
        "ApplicationResults":{
            "Success":[{"timeStamp":"2024-04-16T08:11:25.045Z"}]
        },
        "HotelImageInfos":{
            "HotelImageInfo":[{
                "HotelInfo":{
                    "HotelCode":"426","CodeContext":"Sabre","ChainCode":"SI","Marketer":"MARRIOTT","Logo":"http://vcmp-hotels.cert.sabre.com/image/upload/f_auto,q_auto:best,t_vcmp_logo/hotel/l/si/SI.png"
                },
                "ImageItem":{
                    "Id":"460085","Ordinal":63,"Format":"JPG","LastModifedDate":"2016-04-09",
                    "Image":{
                        "Url":"http://vcmp-hotels.cert.sabre.com/image/upload/hotel/i/426/immp2tparruduokaruf1.jpg","Type":"ORIGINAL","Height":705,"Width":1024
                    },
                    "Category":{
                        "CategoryCode":3,
                        "Description":{
                            "Text":[{
                                "Language":"en","content":"Pool view"
                            }]
                        }
                    },
                    "AdditionalInfo":{
                        "Info":[{
                            "Type":"CAPTION",
                            "Description":{
                                "Text":[{
                                    "Language":"en","content":"Swimming Pool"
                                }]
                            }
                        }]
                    }
                }
            }]
        }
    },
        "Links":[{"rel":"self","href":"https://api.cert.platform.sabre.com/v1.0.0/shop/hotels/image?mode=image"},{"rel":"linkTemplate","href":"https://api.cert.platform.sabre.com/<version>/shop/hotels/image?mode=<mode>"}]
}

let hotelMedia = {
    "Links": [
      {
        "rel": "self",
        "href": "https://api.platform.sabre.com/v1.0.0/shop/hotels/media"
      }
    ],
    "GetHotelMediaRS": {
      "ApplicationResults": {
        "status": "Complete",
        "Success": [
          {
            "type": "string",
            "timeStamp": "2016-02-15T09:37:08.609-06:00",
            "SystemSpecificResults": [
              {
                "timeStamp": "string",
                "reference": "string",
                "ShortText": {},
                "Element": {},
                "RecordID": {},
                "DocURL": {},
                "HostCommand": {
                  "LNIATA": "string"
                },
                "Message": {
                  "code": "string"
                }
              }
            ]
          }
        ],
        "Error": [
          {
            "type": "string",
            "timeStamp": "string",
            "SystemSpecificResults": [
              {
                "timeStamp": "string",
                "reference": "string",
                "ShortText": {},
                "Element": {},
                "RecordID": {},
                "DocURL": {},
                "HostCommand": {
                  "LNIATA": "string"
                },
                "Message": [
                  {
                    "code": "string"
                  }
                ]
              }
            ]
          }
        ],
        "Warning": [
          {
            "type": "string",
            "timeStamp": "string",
            "SystemSpecificResults": [
              {
                "timeStamp": "string",
                "reference": "string",
                "ShortText": {},
                "Element": {},
                "RecordID": {},
                "DocURL": {},
                "HostCommand": {
                  "LNIATA": "string"
                },
                "Message": [
                  {
                    "code": "string"
                  }
                ]
              }
            ]
          }
        ]
      },
      "HotelMediaInfos": {
        "HotelMediaInfo": [
          {
            "HotelInfo": {
              "HotelCode": "426",
              "CodeContext": "Sabre",
              "ChainCode": "OZ",
              "Marketer": "WYNDHAM",
              "Logo": "http://vcmp-hotels.cert.sabre.com/image/upload/f_auto,q_auto:best,t_vcmp_logo/hotel/l/si/SI.png"
            },
            "ImageItems": {
              "ImageItem": [
                {
                  "Id": "9158061",
                  "Ordinal": 0,
                  "Format": "JPG",
                  "LastModifedDate": "2016-02-07-06:00",
                  "Images": {
                    "Image": [
                      {
                        "Url": "http://vcmp-hotels.sabre.com/image/upload/t_vcmp_thumb/hotel/i/62580/ja0yhobqo3fstdb7gh0k.jpg",
                        "Type": "THUMBNAIL",
                        "Height": 100,
                        "Width": 150
                      }
                    ]
                  },
                  "Category": {
                    "CategoryCode": 1,
                    "Description": {
                      "Text": [
                        {
                          "Language": "en",
                          "content": "Exterior view"
                        }
                      ]
                    }
                  },
                  "AdditionalInfo": {
                    "Info": [
                      {
                        "Type": "CAPTION",
                        "Description": {
                          "Text": [
                            {
                              "Language": "en",
                              "content": "Welcome to the Super 8 West Haven"
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }