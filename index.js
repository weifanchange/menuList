var app = new Vue({
    el: '#app',
    data: {
        product:'0',
        price:'0',
        quantity:'0',
        lists:[
            {
                id:0,
                title1:'皮包',
                title2:10,
                title3:3
            },
            {
                id:1,
                title1:'手機',
                title2:20,
                title3:2
            },
            {
                id:2,
                title1:'課本',
                title2:30,
                title3:1
            },
        ],
        nextId:3
    },
    methods:{
        addNewList:function(){
            this.lists.push({
                id:this.nextId++,
                title1:this.product,
                title2:this.price,
                title3:this.quantity
            }),
            this.product='0',
            this.price='0',
            this.quantity='0'
        }
    },
    computed: {
        totalPrice: function(){
            var total = 0;
            for(var i=0; i < this.lists.length; i++){
                var item = this.lists[i];
                total += item.title2 * item.title3;
            }
            return total.toString();
        }
    }
})