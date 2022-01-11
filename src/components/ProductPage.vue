<template>
  <div class="single-product">
  	<div v-if="loaded">
	   	<h3>Product details</h3>
	   	<div class="card">
	      <div class="card-header">
	        Product Details
	      </div>
	      <div class="card-body">
	      	<p >ID: {{productId}}</p>
	        <p >Product Name: {{productName}}</p>
	        <p >Product Price: ${{productPrice}}</p>
	        <router-link :to="'/'" class="btn btn-primary"> Back </router-link>
	      </div>
		</div>
    </div>
    <div v-else>
    	<h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
import db from '@/db'
export default {
  name: 'ProductPage',
  data () {
    return {
    	productId:'',
    	productName: '',
    	productPrice: '',
    	loaded: false
    }
  },
  beforeCreate (){
	var docRef = db.collection('products').doc(this.$route.params.id);
	docRef.get().then((doc)=> {
	    if (doc.exists) {
	        console.log("Document data:", doc.data().product_id);
	        this.productId = doc.data().product_id
	        this.productName = doc.data().product_name
	        this.productPrice = doc.data().product_price
	        this.loaded = true
	    } else {
	        console.log("No document!");
	    }
	}).catch(function(error) {
	    console.log("Error :", error);
	});

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}

</style>
