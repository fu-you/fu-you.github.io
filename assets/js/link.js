/**
 * Created by WHY on 2017/3/13.
 */
$(document).ready(function () {
    $.getJSON(
        "./../data/links.json", function (data) {
            var public = data.public;
            var nsu = data.nsu;
            var str = /\{"(.+?)\":\[/g;

            function toS(e) {
                return JSON.stringify(e);
            }

            $.each(public, function (i) {
                m(public, i, 1);
            });
            $.each(nsu, function (i) {
                m(nsu, i, 2);
            });
            function m(e, i, k) {
                var reg = toS(e[i]).match(str).toString().replace(/[\[|\{|\:|\"]/g, "");
                $("#links>div").eq(k - 1).append("<div class='col s2'>" + "<h5><blockquote>" + reg + "</blockquote></h5>" + " </div>")
                $.each(e[i][reg], function (j) {
                    var Jid = toS(e[i][reg][j].id).replace(/\"/g, "");
                    var Jstyle = toS(e[i][reg][j].style).replace(/\"/g, "");
                    var Jimg = toS(e[i][reg][j].img).replace(/\"/g, "");
                    var Jurl = toS(e[i][reg][j].url);
                    if (Jimg == "") {
                        $("#links>div").eq(k - 1).find($(".col:last-child")).append("<a class='chip blue-grey-text grey lighten-4 waves-effect btn " + Jstyle + "'" + "href=" + Jurl + ">" + Jid + "</a>");
                    } else {
                        $("#links>div").eq(k - 1).find($(".col:last-child")).append("<a class='chip blue-grey-text grey lighten-4 waves-effect btn " + Jstyle + "'" + "href=" + Jurl + ">" + "<img src='../assets/img/" + Jimg + ".png'>" + Jid + "</a>");
                    }
                });
            }
        }
    )
});
