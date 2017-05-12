/**
 * Created by wc on 2017/5/7.
 */
// var map={};
// map["title"]="我的github Pages是如何搭建的";
// map["time"]="2017年5月5日";
var list= new Array;
// list.add(new {"key1":"value1","key2":"value2"......})
list.push({"title":"我的github Pages是如何搭建的","time":"2017年5月5日","path":"github_pager"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"1"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"2"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"3"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"4"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"5"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"6"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"7"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"8"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"9"})
list.push({"title":"基于realm的通讯录搜索功能的高亮显示与查询","time":"2017年5月6日","path":"10"})

function getMapList() {
        return list;
}

function setList() {
    var dllist=document.getElementById("list");
    for (var i = 0; i < list.length; i++) {
        var map=list[i];
        var title = map["title"];
        var time = map["time"];
        var path = map["path"];
        var dt = document.createElement("dt");
        var a = document.createElement("a");
        var divider = document.createElement("div")
        var div = document.createElement("div")
        dt.setAttribute("class","cell light-layer");
        a.setAttribute("class","cell-title linktext");
        a.style.fontSize=22;
        a.innerHTML=title;
        a.href = "../pages/knowledge/knowledge_"+path+".html";
        divider.setAttribute("class","divider");
        div.setAttribute("class","timestyle darktext");
        div.style.fontSize=22;
        div.innerHTML=time;
        dt.appendChild(a).appendChild(divider).appendChild(div);
        dllist.appendChild(dt);
    }
}

function openKnowledge(path) {
    // window.location.href="./knowledge/pages/knowledge/knowledge_"+path+".html";
    document.getElementById("content").src="../knowledges/knowledge_"+path+".html";
    // window.src="./knowledge/knowledge_"+path+".html"
}
