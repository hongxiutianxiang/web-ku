/*
options:
page:请求页码
query:查询条件
projection:投影
sort:排序
populates:关联的数组
*/
async function pagination(options){
	/*
	分页：
	约定：每一页显示 2 条	   limit(2)  limit = 2

	第1页  跳过 0 条  skip(0)
	第2页  跳过 2 条  skip(2)
	第3页  跳过 4 条  skip(4)

	第page页  跳过 (page-1)*limit 条  skip( (page-1)*limit )
	*/

	let { page,model,query,projection,sort,populates } = options;

	page = parseInt(page)
	
	//每页显示条数
	const limit = 2;

	if(isNaN(page)){
		page = 1
	}

	if(page == 0){
		page = 1
	}

	const count = await model.countDocuments(query);
	//总页数 pages
	const pages = Math.ceil(count/limit)
	if(page>pages){
		page = pages
	}
	if(pages == 0){
		page = 1
	}

	//生成页码数组
	const list = [];
	for(let i = 1;i<=pages;i++){
		list.push(i)
	}
	//跳过条数
	const skip = (page-1)*limit;

	let result = model.find(query,projection)
	if(populates){
		populates.forEach(populate=>{
			result = result.populate(populate);
		})
	}

	const docs = await result.sort(sort).skip(skip).limit(limit)	

	return {
		docs,
		page,
		list,
		pages
	}

}


module.exports = pagination