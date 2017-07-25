/*
 接口API
 基于豆瓣的图片和电影
 * */
var BaseURL ="https://api.douban.com/v2/";

var Douban_APIS = {
	//图书
	book_search    : BaseURL + "book/search",
	book_detail_id : BaseURL + "book/",
	//电影
	movie_search   : BaseURL + "movie/search",
	//相册
	music_search   : BaseURL + "music/search",
	//已读的书籍
	has_read_book  : BaseURL + "book/user/82690325/collections?status=read",
    //想读的书籍
    want_read_book : BaseURL + "book/user/82690325/collections?status=wish"
}

module.exports = Douban_APIS;