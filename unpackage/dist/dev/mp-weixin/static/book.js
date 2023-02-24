"use strict";
let books = [
  {
    id: 1e3,
    name: "\u671D\u82B1\u5915\u62FE",
    author: `\u9C81\u8FC5`,
    synopsis: `\u671D\u82B1\u5915\u62FE\u300B\u539F\u540D\u300A\u65E7\u4E8B\u91CD\u63D0\u300B\uFF0C\u662F\u73B0\u4EE3\u6587\u5B66\u5BB6\u9C81\u8FC5\u7684\u6563\u6587\u96C6\uFF0C\u6536\u5F55\u9C81\u8FC5\u4E8E1926\u5E74\u521B\u4F5C\u768410\u7BC7\u56DE\u5FC6\u6027\u6563\u6587\uFF0C1928\u5E74\u7531\u5317\u4EAC\u672A\u540D\u793E\u51FA\u7248\uFF0C\u73B0\u7F16\u5165\u300A\u9C81\u8FC5\u5168\u96C6\u300B\u7B2C2\u5377\u3002
\u6B64\u6587\u96C6\u4F5C\u4E3A\u201C\u56DE\u5FC6\u7684\u8BB0\u4E8B\u201D\uFF0C\u591A\u4FA7\u9762\u5730\u53CD\u6620\u4E86\u4F5C\u8005\u9C81\u8FC5\u9752\u5C11\u5E74\u65F6\u671F\u7684\u751F\u6D3B\uFF0C\u5F62\u8C61\u5730\u53CD\u6620\u4E86\u4ED6\u7684\u6027\u683C\u548C\u5FD7\u8DA3\u7684\u5F62\u6210\u7ECF\u8FC7\u3002\u524D\u4E03\u7BC7\u53CD\u6620\u4ED6\u7AE5\u5E74\u65F6\u4EE3\u5728\u7ECD\u5174\u7684\u5BB6\u5EAD\u548C\u79C1\u587E\u4E2D\u7684\u751F\u6D3B\u60C5\u666F\uFF0C\u540E\u4E09\u7BC7\u53D9\u8FF0\u4ED6\u4ECE\u5BB6\u4E61\u5230\u5357\u4EAC\uFF0C\u53C8\u5230\u65E5\u672C\u7559\u5B66\uFF0C\u7136\u540E\u56DE\u56FD\u6559\u4E66\u7684\u7ECF\u5386\uFF1B\u63ED\u9732\u4E86\u534A\u5C01\u5EFA\u534A\u6B96\u6C11\u5730\u793E\u4F1A\u79CD\u79CD\u4E11\u6076\u7684\u4E0D\u5408\u7406\u73B0\u8C61\uFF0C\u540C\u65F6\u53CD\u6620\u4E86\u6709\u62B1\u8D1F\u7684\u9752\u5E74\u77E5\u8BC6\u5206\u5B50\u5728\u65E7\u4E2D\u56FD\u832B\u832B\u9ED1\u591C\u4E2D\uFF0C\u4E0D\u754F\u8270\u9669\uFF0C\u5BFB\u627E\u5149\u660E\u7684\u56F0\u96BE\u5386\u7A0B\uFF0C\u4EE5\u53CA\u6292\u53D1\u4E86\u4F5C\u8005\u5BF9\u5F80\u65E5\u4EB2\u53CB\u3001\u5E08\u957F\u7684\u6000\u5FF5\u4E4B\u60C5\u3002
\u6587\u96C6\u4EE5\u8BB0\u4E8B\u4E3A\u4E3B\uFF0C\u9971\u542B\u7740\u6D53\u70C8\u7684\u6292\u60C5\u6C14\u606F\uFF0C\u5F80\u5F80\u53C8\u5939\u4EE5\u8BAE\u8BBA\uFF0C\u505A\u5230\u4E86\u6292\u60C5\u3001\u53D9\u4E8B\u548C\u8BAE\u8BBA\u878D\u4E3A\u4E00\u4F53\uFF0C\u4F18\u7F8E\u548C\u8C10\uFF0C\u6734\u5B9E\u611F\u4EBA\u3002\u4F5C\u54C1\u5BCC\u6709\u8BD7\u60C5\u753B\u610F\uFF0C\u53C8\u4E0D\u65F6\u7A7F\u63D2\u7740\u5E7D\u9ED8\u548C\u8BBD\u55BB\uFF1B\u5F62\u8C61\u751F\u52A8\uFF0C\u683C\u8C03\u660E\u6717\uFF0C\u6709\u5F3A\u70C8\u7684\u611F\u67D3\u529B\u3002`,
    imgurl: "/static/indexListImg/indexListImg4.png"
  },
  {
    id: 1001,
    name: "\u4EBA\u95F4\u8349\u6728",
    author: `\u6C6A\u66FE\u797A`,
    synopsis: `\u8FD9\u672C\u4E66\u5176\u5B9E\u662F\u6C6A\u66FE\u797A\u5148\u751F\u7684\u4F18\u79C0\u6563\u6587\u96C6\u3002\u6C6A\u66FE\u797A\u7684\u6587\u5B57\u5927\u90FD\u5341\u5206\u6709\u5473\u9053\uFF0C\u4ED6\u662F\u4E00\u4E2A\u5341\u5206\u61C2\u5F97\u751F\u6D3B\u7684\u4EBA\uFF0C\u5728\u5F53\u4EE3\u4F5C\u5BB6\u4E2D\uFF0C\u80FD\u591F\u5728\u6563\u6587\u548C\u5C0F\u8BF4\u65B9\u9762\u72EC\u6811\u4E00\u5E1C\uFF0C\u62E5\u6709\u81EA\u5DF1\u7279\u8272\u98CE\u683C\u7684\u4F5C\u5BB6\u4E0D\u591A\uFF0C\u6C6A\u66FE\u797A\u5148\u751F\u7EDD\u5BF9\u662F\u5176\u4E2D\u7684\u91CD\u8981\u4E00\u4F4D\u3002\u5728\u8FD9\u672C\u4E66\u4E2D\uFF0C\u6C6A\u66FE\u797A\u5148\u751F\u7684\u6563\u6587\u529F\u5E95\u548C\u827A\u672F\u7279\u8272\u4F53\u73B0\u7684\u6DCB\u6F13\u5C3D\u81F4\uFF01`,
    imgurl: "/static/indexListImg/indexListImg5.png"
  },
  {
    id: 1002,
    name: "\u884C\u8005\u65E0\u7586",
    author: `\u4F59\u79CB\u96E8`,
    synopsis: `	15\u5E74\u524D\u4F59\u79CB\u96E8\u5F00\u59CB\u4EE5\u957F\u9014\u65C5\u884C\u65B9\u5F0F\u5B9E\u5730\u8003\u5BDF\u6587\u5316\u3002\u4ED6\u4ECE\u56FD\u5185\u8D70\u5230\u56FD\u5916\uFF0C\u4ECE\u4E2D\u534E\u6587\u660E\u8D70\u5230\u4E86\u5176\u4ED6\u6587\u660E\u3002\u8FD9\u671F\u95F4\uFF0C\u4ED6\u4EE5\u300A\u6587\u5316\u82E6\u65C5\u300B\u548C\u300A\u5C71\u6CB3\u4E4B\u4E66\u300B\u4F5C\u4E3A\u8003\u5BDF\u4E2D\u534E\u6587\u660E\u7684\u8BB0\u5F55\uFF0C\u4EE5\u300A\u5343\u5E74\u4E00\u53F9\u300B\u4F5C\u4E3A\u8003\u5BDF\u4F0A\u65AF\u5170\u6587\u660E\u7684\u8BB0\u5F55\uFF0C\u4EE5\u300A\u884C\u8005\u65E0\u7586\u300B\u4F5C\u4E3A\u8003\u5BDF\u897F\u65B9\u6587\u660E\u7684\u8BB0\u5F55\u3002\u81F3\u6B64\uFF0C\u4F59\u79CB\u96E8\u5BF9\u4EBA\u7C7B\u5386\u53F2\u7684\u4E09\u5927\u6587\u660E\u8FDB\u884C\u4E86\u5B8C\u6574\u7684\u5173\u6CE8\u548C\u8BB0\u5F55\u3002
	\u4F59\u79CB\u96E8\u5728\u300A\u884C\u8005\u65E0\u7586\u300B\u4E2D\u611F\u53F9\u9053\uFF1A\u201C\u6B27\u6D32\u6587\u660E\u786E\u5B9E\u4F18\u79C0\u800C\u53C8\u6210\u719F\uFF0C\u80FD\u628A\u53E4\u5178\u4F20\u7EDF\u548C\u73B0\u4EE3\u6587\u660E\u3001\u4E2A\u4EBA\u81EA\u7531\u548C\u793E\u4F1A\u516C\u5FB7\u878D\u4F1A\u8D2F\u901A\u3002\u66F4\u7FA1\u6155\u8857\u8FB9\u5496\u5561\u5EA7\u91CC\u5FAE\u7B11\u7684\u76EE\u5149\uFF0C\u53EA\u4E00\u95EA\uFF0C\u4FBF\u89C9\u5F97\u76EE\u5149\u60A0\u957F\uFF0C\u5C71\u6CB3\u65E0\u6059\u3002\u4F46\u8FD9\u4E9B\u5E74\uFF0C\u5374\u56E0\u8FC7\u5EA6\u7684\u81EA\u6EE1\u3001\u81EA\u4EAB\u800C\u81EA\u95ED\uFF0C\u5BF9\u4E16\u754C\u5BF9\u81EA\u5DF1\u6709\u4E0D\u5C11\u65F6\u7A7A\u9519\u89C9\u3002\u201D
	\u300A\u884C\u8005\u65E0\u7586\u300B\u5206\u5357\u6B27\u3001\u4E2D\u6B27\u3001\u897F\u6B27\u3001\u5317\u6B274\u5377\uFF0C\u6536\u5F55\u6563\u658780\u7BC7\u3002\u5168\u4E66\u5728\u601D\u8003\u7684\u5B8C\u6574\u6027\u548C\u6DF1\u523B\u6027\u3001\u6587\u4F53\u7684\u5F20\u529B\u548C\u81EA\u7531\u4E0A\uFF0C\u66F4\u80DC\u4F59\u79CB\u96E8\u4EE5\u524D\u7684\u51E0\u90E8\u8457\u4F5C\u3002\u5168\u65B0\u7248\u7684\u300A\u884C\u8005\u65E0\u7586\u300B\u7ECF\u8FC7\u4F59\u79CB\u96E8\u5148\u751F\u5927\u5E45\u5EA6\u4FEE\u6539\u589E\u5220\uFF0C\u5168\u65B0\u4FEE\u8BA2\u518D\u5EA6\u51FA\u7248\u3002`,
    imgurl: "/static/indexListImg/indexListImg6.png"
  },
  {
    id: 1003,
    name: "\u4EBA\u7C7B\u7B80\u53F2",
    author: `\u5C24\u74E6\u5C14\xB7\u8D6B\u62C9\u5229`,
    synopsis: `\u4F5C\u8005\u5C24\u74E6\u5C14\xB7\u8D6B\u62C9\u5229\u4E3A1976\u5E74\u751F\u4EBA\uFF0C\u6765\u81EA\u4EE5\u8272\u5217\u3002\u725B\u6D25\u5927\u5B66\u5386\u53F2\u5B66\u535A\u58EB\uFF0C\u73B0\u4E3A\u8036\u8DEF\u6492\u51B7\u5E0C\u4F2F\u6765\u5927\u5B66\u7684\u5386\u53F2\u7CFB\u6559\u6388\u3002\u4ED6\u7684\u300A\u4EBA\u7C7B\u7B80\u53F2\u300B\u4E00\u4E66\u8BA9\u4ED6\u4E00\u4E3E\u6210\u540D\uFF0C\u6210\u4E3A\u4EE5\u8272\u5217\u8D85\u7EA7\u7545\u9500\u4E66\uFF0C\u76EE\u524D\u8FD9\u672C\u4E66\u5DF2\u638830\u591A\u4E2A\u56FD\u5BB6\u7248\u6743\u3002`,
    imgurl: "/static/indexListImg/indexListImg1.png"
  },
  {
    id: 1004,
    name: "\u6781\u7B80\u6B27\u6D32\u53F2",
    author: `\u7EA6\u7FF0\xB7\u8D6B\u65AF\u7279`,
    synopsis: `\u672C\u4E66\u4F5C\u8005\u7EA6\u7FF0\xB7\u8D6B\u65AF\u7279\uFF0C\u4E3A\u6FB3\u5927\u5229\u4E9A\u4E0E\u82F1\u8054\u90A6\u6743\u5A01\u7684\u793E\u4F1A\u66A8\u653F\u6CBB\u5386\u53F2\u5B66\u5BB6\u3001\u6B27\u6D32\u53F2\u4E13\u5BB6\u3002\u73B0\u4EFB\u58A8\u5C14\u672C\u7684\u62C9\u7B79\u4F2F\u5927\u5B66\uFF08La Trobe University\uFF09\u5386\u53F2\u7CFB\u6559\u6388\u3002`,
    imgurl: "/static/indexListImg/indexListImg2.png"
  },
  {
    id: 1005,
    name: "\u5168\u7403\u901A\u53F2",
    author: `\u65AF\u5854\u592B\u91CC\u963F\u8BFA\u65AF`,
    synopsis: `\u4F5C\u8005\u65AF\u5854\u592B\u91CC\u963F\u8BFA\u65AF\u662F\u7F8E\u56FD\u52A0\u5DDE\u5927\u5B66\u7684\u5386\u53F2\u5B66\u6559\u6388\uFF0C\u4EAB\u8A89\u4E16\u754C\u7684\u5386\u53F2\u5B66\u5BB6\uFF0C\u66FE\u83B7\u5F97\u8FC7\u53E4\u6839\u6D77\u59C6\u5956\u3001\u798F\u7279\u6770\u51FA\u6559\u5E08\u5956\u548C\u6D1B\u514B\u83F2\u52D2\u57FA\u91D1\u5956\u7B49\u4E00\u7CFB\u5217\u5B66\u672F\u8363\u8A89\u3002`,
    imgurl: "/static/indexListImg/indexListImg3.png"
  },
  {
    id: 1006,
    name: "\u8046\u542C\u97F3\u4E50",
    author: `\u65AF\u5854\u592B\u91CC\u963F\u8BFA\u65AF`,
    synopsis: `\u8BFB\u5B8C\u672C\u4E66\uFF0C\u4F60\u4F1A\u53D1\u73B0\u4F60\u7684\u8111\u888B\u91CC\u591A\u4E86\u4E00\u680B\u5EFA\u7B51\uFF0C\u5B83\u7684\u540D\u5B57\u53EB\u505A\u53E4\u5178\u97F3\u4E50\u53F2\u3002\u800C\u4E14\uFF0C\u8FD9\u4E2A\u5EFA\u7B51\u7CBE\u5DE7\uFF0C\u6BCF\u4E00\u4E2A\u5730\u65B9\uFF0C\u6BCF\u4E00\u5904\u547D\u540D\uFF0C\u90FD\u662F\u7CBE\u5DE7\u800C\u53C8\u51C6\u786E\u7684\u3002`,
    imgurl: "/static/indexListImg/indexListImg7.png"
  },
  {
    id: 1007,
    name: "\u5FC3\u91CC\u7684\u70E6\u607C",
    author: `\u6D77\u6797`,
    synopsis: `\u4E16\u754C\u4E0A\u6700\u91CD\u8981\u7684\u8FEA\u4F26\u7814\u7A76\u4E13\u5BB6\u4E3A\u9C8D\u52C3\u8FEA\u4F26\u7684\u798F\u97F3\u65F6\u671F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6DF1\u5165\u7684\u8FA9\u89E3\u2014\u2014\u4ECE1979\u5E74\u52301981\u5E74\uFF0C\u8FD9\u6BB5\u8FEA\u4F26\u7684\u798F\u97F3\u65F6\u671F\u4E00\u76F4\u5E7F\u53D7\u4E89\u8BAE\uFF08\u8FD9\u672C\u4E66\u51FA\u7248\u7684\u65F6\u95F4\u4E5F\u6070\u9022\u8FEA\u4F26\u7684\u798F\u97F3\u7CFB\u5217\u4E13\u8F91\u5957\u88C5\u7248\u300AThe Bootleg Series\u300B\u53D1\u884C\uFF09\u3002
\u6D77\u6797\u901A\u8FC7\u89C2\u6469\u4E86\u4E00\u573A\u53C8\u4E00\u573A\u7684\u6F14\u51FA\u548C\u4E00\u4E2A\u53C8\u4E00\u4E2A\u65F6\u671F\uFF0C\u7EC8\u4E8E\u4F7F\u5F97\u8FD9\u4E00\u6BB5\u9ED1\u6697\u4E0D\u4E3A\u4EBA\u719F\u77E5\u7684\u65F6\u671F\u53D8\u5F97\u6E05\u6670\u8D77\u6765\uFF0C\u8FD9\u4E5F\u8BA9\u4EBA\u4EEC\u53EF\u4EE5\u76F8\u4FE1\uFF0C\u8FEA\u4F26\u572870\u5E74\u4EE3\u540E\u671F\u7684\u4F5C\u54C1\u51E0\u4E4E\u548C60\u5E74\u4EE3\u4E2D\u671F\u4E00\u6837\u7684\u91CD\u8981\u3002
\u8FD9\u662F\u6447\u6EDA\u4FEE\u6B63\u4E3B\u4E49\u7684\u4E00\u4E2A\u4F1F\u5927\u4F5C\u54C1\u3002`,
    imgurl: "/static/indexListImg/indexListImg8.png"
  },
  {
    id: 1008,
    name: "\u68A6\u5230\u62AB\u5934\u58EB",
    author: `\u8C22\u83F2\u5C14\u5FB7`,
    synopsis: `\u6EDA\u77F3\u6742\u5FD7\u8D44\u6DF1\u8BC4\u8BBA\u5BB6\u8C22\u83F2\u5C14\u5FB7\u5BF9\u8FC7\u53BB\u7684\u51E0\u5341\u5E74\u91CC\u62AB\u5934\u58EB\u4E50\u961F\u9020\u6210\u7684\u5F71\u54CD\u8FDB\u884C\u4E86\u6DF1\u5165\u5730\u63A2\u7D22\uFF0C\u8FD9\u662F\u6709\u53F2\u4EE5\u6765\u5173\u4E8E\u201Cthe Fab Four\uFF08\u4E13\u95E8\u5BF9\u62AB\u5934\u58EB\u8FDB\u884C\u6A21\u4EFF\u7684\u4E50\u961F\uFF09\u201D\u6700\u6709\u521B\u610F\u548C\u6700\u6709\u6D1E\u5BDF\u529B\u7684\u4E66\u7C4D\u4E4B\u4E00\u3002
\u5728\u8FD9\u672C\u4E66\u91CC\u6211\u4EEC\u8FD8\u80FD\u8BFB\u5230\u4E54\u6CBB\xB7\u54C8\u91CC\u68EE1974\u5E74\u707E\u96BE\u6027\u7684\u5355\u98DE\u5DE1\u6F14\uFF0C\u4EE5\u53CA\u6BD4\u5409\u65AF\u5144\u5F1F\u5173\u4E8E\u80E1\u6912\u519B\u58EB\u7684\u7535\u5F71\u3002\u8C22\u83F2\u5C14\u5FB7\u5199\u9053\uFF1A\u201C\u4E16\u754C\u4E00\u76F4\u5728\u68A6\u60F3\u7740\u62AB\u5934\u58EB\uFF0C\u5373\u4F7F\u4ED6\u4EEC\u81EA\u5DF1\u5728\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\u5C31\u8BA4\u4E3A\u4ED6\u4EEC\u7684\u68A6\u5DF2\u7ECF\u7ED3\u675F\u4E86\u3002\u201D`,
    imgurl: "/static/indexListImg/indexListImg9.png"
  },
  {
    id: 1009,
    name: "\u827A\u672F\u7684\u6545\u4E8B",
    author: `E.H\u8D21\u5E03\u91CC\u5E0C`,
    synopsis: `\u662F\u6709\u5173\u827A\u672F\u7684\u4E66\u7C4D\u4E2D\u6700\u8457\u540D\u3001\u6700\u6D41\u884C\u7684\u8457\u4F5C\u4E4B\u4E00\u3002\u5B83\u6982\u62EC\u5730\u53D9\u8FF0\u4E86\u4ECE\u6700\u65E9\u7684\u6D1E\u7A9F\u7ED8\u753B\u5230\u5F53\u4ECA\u7684\u5B9E\u9A8C\u827A\u672F\u7684\u53D1\u5C55\u5386\u7A0B\uFF0C\u4EE5\u9610\u660E\u827A\u672F\u53F2\u662F\u201C\u5404\u79CD\u4F20\u7EDF\u4E0D\u65AD\u8FC2\u56DE\u3001\u4E0D\u65AD\u6539\u53D8\u7684\u5386\u53F2\uFF0C\u6BCF\u4E00\u4EF6\u4F5C\u54C1\u5728\u8FD9\u5386\u53F2\u4E2D\u90FD\u65E2\u56DE\u987E\u8FC7\u53BB\u53C8\u5BFC\u5411\u672A\u6765\u201D\u3002`,
    imgurl: "/static/indexListImg/indexListImg10.png"
  },
  {
    id: 1010,
    name: "\u8A79\u68EE\u827A\u672F\u53F2",
    author: `H.W.\u8A79\u68EE`,
    synopsis: `\u300A\u8A79\u68EE\u827A\u672F\u53F2\u300B\u662F2013\u5E74\u4E16\u754C\u56FE\u4E66\u51FA\u7248\u516C\u53F8\u51FA\u7248\u7684\u56FE\u4E66\uFF0C\u300A\u8A79\u68EE\u827A\u672F\u53F2\u300B\u662F\u4E00\u90E8\u5728\u5B66\u754C\u548C\u793E\u4F1A\u5927\u4F17\u4E2D\u5F88\u6709\u5F71\u54CD\u7684\u5B66\u672F\u8457\u4F5C\u3002\u5728\u4E00\u6B21\u6B21\u65B0\u7248\u4E2D\u4E0D\u65AD\u4FEE\u8BA2\u548C\u8865\u5145\u65B0\u5185\u5BB9\uFF0C\u5F15\u5BFC\u8BFB\u8005\u601D\u8003\u548C\u63D0\u51FA\u95EE\u9898\uFF0C\u628A\u827A\u672F\u53F2\u7684\u5B66\u4E60\u3001\u7814\u7A76\u548C\u63D0\u9AD8\u4EBA\u4EEC\u7684\u6587\u5316\u7D20\u8D28\u8054\u7CFB\u8D77\u6765\uFF0C\u9F13\u52B1\u548C\u542F\u53D1\u4EBA\u4EEC\u63A2\u7A76\u672A\u77E5\u3002`,
    imgurl: "/static/indexListImg/indexListImg11.png"
  },
  {
    id: 1011,
    name: "\u52A0\u5FB7\u7EB3\u827A\u672F\u901A\u53F2",
    author: `\u5F17\u96F7\u5FB7\xB7S. \u514B\u83B1\u7EB3 / \u514B\u91CC\u65AF\u5EF7\xB7J. \u9A6C\u7C73\u4E9A`,
    synopsis: `\u300A\u52A0\u5FB7\u7EB3\u827A\u672F\u901A\u53F2\u300B\u9075\u5FAA\u52A0\u5FB7\u7EB3\u7684\u57FA\u672C\u6846\u67B6\uFF0C\u4EE5\u201C\u5168\u666F\u5316\u201D\u7684\u89C6\u89D2\u6765\u9610\u91CA\u827A\u672F\u53D1\u5C55\u7684\u4E3B\u65E8\uFF0C\u5185\u5BB9\u4ECE\u53F2\u524D\u523020\u4E16\u7EAA\u7684\u540E\u73B0\u4EE3\u4E3B\u4E49\u827A\u672F\uFF0C\u6D89\u53CA\u7ED8\u753B\u3001\u96D5\u5851\u3001\u5EFA\u7B51\u3001\u8BBE\u8BA1\u3001\u6444\u5F71\u53CA\u5DE5\u827A\u7F8E\u672F\u7B49\u591A\u4E2A\u827A\u672F\u95E8\u7C7B\uFF0C\u4F53\u73B0\u51FA\u6743\u91CD\u5E73\u8861\u7684\u6574\u4F53\u89C2\u548C\u5BA2\u89C2\u6027\u3002`,
    imgurl: "/static/indexListImg/indexListImg12.png"
  },
  {
    id: 2001,
    name: "\u897F\u6E38\u8BB0",
    author: "\u5434\u627F\u6069",
    synopsis: `\u300A\u897F\u6E38\u8BB0\u300B\u662F\u4E2D\u56FD\u53E4\u4EE3\u7B2C\u4E00\u90E8\u6D6A\u6F2B\u4E3B\u4E49\u7AE0\u56DE\u4F53\u957F\u7BC7\u795E\u9B54\u5C0F\u8BF4\u3002\u73B0\u5B58\u660E\u520A\u767E\u56DE\u672C\u300A\u897F\u6E38\u8BB0\u300B\u5747\u65E0\u4F5C\u8005\u7F72\u540D\u3002\u6E05\u4EE3\u5B66\u8005\u5434\u7389\u6422\u7B49\u9996\u5148\u63D0\u51FA\u300A\u897F\u6E38\u8BB0\u300B\u4F5C\u8005\u662F\u660E\u4EE3\u5434\u627F\u6069\u3002\u8FD9\u90E8\u5C0F\u8BF4\u4EE5\u201C\u5510\u50E7\u53D6\u7ECF\u201D\u8FD9\u4E00\u5386\u53F2\u4E8B\u4EF6\u4E3A\u84DD\u672C\uFF0C\u901A\u8FC7\u4F5C\u8005\u7684\u827A\u672F\u52A0\u5DE5\uFF0C\u6DF1\u523B\u5730\u63CF\u7ED8\u4E86\u5F53\u65F6\u7684\u793E\u4F1A\u73B0\u5B9E\u3002\u5168\u4E66\u4E3B\u8981\u63CF\u5199\u4E86\u5B59\u609F\u7A7A\u51FA\u4E16\u53CA\u5927\u95F9\u5929\u5BAB\u540E\uFF0C\u9047\u89C1\u4E86\u5510\u50E7\u3001\u732A\u516B\u6212\u3001\u6C99\u50E7\u548C\u767D\u9F99\u9A6C\uFF0C\u897F\u884C\u53D6\u7ECF\uFF0C\u4E00\u8DEF\u964D\u5996\u4F0F\u9B54\uFF0C\u7ECF\u5386\u4E86\u4E5D\u4E5D\u516B\u5341\u4E00\u96BE\uFF0C\u7EC8\u4E8E\u5230\u8FBE\u897F\u5929\u89C1\u5230\u5982\u6765\u4F5B\u7956\uFF0C\u6700\u7EC8\u4E94\u5723\u6210\u771F\u7684\u6545\u4E8B\u3002`,
    imgurl: "/static/Rebook/Rebook1.jpg"
  }
];
exports.books = books;
