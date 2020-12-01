
let myApp = new Vue({

  el:"#root",

  data:{

    dischi:[],
  },

  mounted: function(){

        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((result)=> {

          console.log(result.data.response)
          this.dischi = result.data.response

        });




 },



});
