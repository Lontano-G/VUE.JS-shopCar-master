var vm = new Vue({
	el:'.container',
	data:{
		limitNumber:3,
		addressList:[],
		currentIndex:0,
		shippingMethod:1
	},
	mounted:function(){
		this.$nextTick(function(){
			this.getAddressList();
		});
	},
	computed:{
		filterAddress:function(){
			return this.addressList.slice(0,this.limitNumber);
		}
	},
	methods:{
		getAddressList:function(){
			this.$http.get("data/address.json").then(function(res){
				var _this = this;
				var res = res.data;
				if(res.status =="0"){
					_this.addressList = res.result;
				}
			});
		},
		loadMore:function(){
			this.limitNumber = this.addressList.length;
		},
		setDeafault:function(addressId){
			this.addressList.forEach(function(address,index){
				if(address.addressId == addressId){
					address.isDefault = true;
				}else{
					address.isDefault = false;
				}
			});
		}
	}
	
})