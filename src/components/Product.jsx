import { Container, Grid } from "@material-ui/core";
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';
export default function Section(){
return (
<div id="products">
<h1>Featured Products</h1>
<Container sx={{marginY:15}}>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}><img className="img"src={product1} alt="" style={{width:"20em",height:"20em"}}/><h3>Oneplus Nord Buds</h3><h4>Price: ₹2000</h4></Grid>
      <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}><img className="img"src={product2} alt="" style={{width:"20em",height:"20em"}}/><h3>DELL inspiron 15 3000</h3><h4>Price: ₹70000</h4></Grid>
      <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}><img className="img"src={product3} alt="" style={{width:"20em",height:"20em"}}/><h3>Sony Tv Bravia Oled</h3><h4>Price: ₹100000</h4></Grid>
      <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}><img className="img"src={product4} alt="" style={{width:"20em",height:"20em"}}/><h3>Vivo V21 e 5g</h3><h4>Price: ₹20000</h4></Grid>
    </Grid>
  </Container>
  </div>
);
}