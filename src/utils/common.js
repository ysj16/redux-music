const Util = {
	removeClass:function(eles,sel){
		if(!eles.length){
			eles = [eles] 
		}
		eles.forEach(function(ele,n){
			var style = ele.className||"";
			var reg = new RegExp("\\s?\\b"+ sel +"\\b","g")
			ele.className = style.replace(reg,"")
		})
	},
	hasClass:function(ele,sel){
		var reg = new RegExp("\\s?\\b"+ sel +"\\b","g")
		return reg.test(ele.className)
	},
	addClass:function(eles,sel){
		var hasClass = this.hasClass;
		if(!eles.length){
			eles = [eles] 
		}
		eles.forEach(function(ele,n){
			if(!hasClass(ele,sel)){
				ele.className = ele.className + " " + sel;
			}
		})
	}
}
export default Util;