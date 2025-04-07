import React from "react";
import s1 from '../images/logoonpage.svg'
import s2 from '../images/user.svg'
import s3 from '../images/cart.svg'
import s4 from '../images/seller.svg'
import s5 from '../images/more.svg'
import s6 from '../images/cat1.png'
import s7 from '../images/cat2.png'
import s8 from '../images/cat3.png'
import s9 from '../images/cat4.png'
import s10 from '../images/cat5.png'
import s11 from '../images/cat6.png'
import s12 from '../images/cat7.png'
import s13 from '../images/cat8.png'
import s14 from '../images/cat9.png'
import s15 from '../images/shirt1.png'
import s16 from '../images/shoe.png'
import s17 from '../images/watch.png'
import s18 from '../images/rebook.png'
import s19 from '../images/belts.png'
import s20 from '../images/ethinic.png'
import s21 from '../images/mobile1.png'
import s22 from '../images/mobile2.png'
import s23 from '../images/mobile3.png'
import s24 from '../images/mobile4.png'
import s25 from '../images/mobile5.png'
import s26 from '../images/mobile6.png'

function Home() {
    return (
        <div>
            <div className="navbar"/>
        
        <div className="logo">
           <img src={s1} alt=""/>
        </div>
        <div className="search"/>
            <div className="searchbar"/>
                <span>
                    <svg width="24" height="24" className="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
                <input type="search" size="60" placeholder="Search For Products,Brands and More.."/>
            <div/>
        <div/>
    
        <div className="links">
            <a href="" className="icon-btn-active">
                <img src={s2}/>
                <span>Login</span>
            </a>
            
            <a href="" className="icon-btn">
                <img src={s3}/>
                <span>Cart</span>
            </a>
    
            <a href="" className="icon-btn">
                <img src={s4}/>
                <span>Become a Seller</span>
            </a>
    
            <a href="" className="icon-btn">
                <img src={s5}/>
            </a>
               
    
            
        </div>
    
    <div/>
    
    <div className="items">
        <div className="kilo"/>
            <img src={s6}/>
            <span>Kilos</span>
        <div/>
        <div className="kilo"/>
            <img src={s7}/>
            <span>Mobiles</span>
        <div/>
        <div className="kilo"/>
            <img src={s8}/>
            <span>Fashion</span>
        <div/>
        <div className="kilo"/>
            <img src={s9}/>
            <span>Electronicss</span>
        <div/>
        <div className="kilo"/>
            <img src={s10}/>
            <span>Home & Furniture</span>
        <div/>
        <div className="kilo"/>
            <img src={s11}/>
            <span>Appliances</span>
        <div/>
        <div className="kilo"/>
            <img src={s12}/>
            <span>Flight Bookings</span>
        <div/>
    
        <div className="kilo"/>
            <img src={s13}/>
            
           
            <span>Beauty,Toys & More</span>
        <div/>
    
        <div className="kilo"/>
            <img src={s14} width="500px"/>
            <span>Two Wheelers</span>
        <div/>
    </div>
    
    <div className="bigpricture"/>
    
    
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1c26da03bd93c9f5.jpg?q=20"/>
    <div/>
    
    <div className="minipicture"/>
    <b>499 Only</b>
    
    <div className="photo"/>
    <img src={s15}/>
    <br/>
    <span>T Shirts,Shirts..</span>
    <br/>
    <b>Under Rs 499</b>
    <div/>
    
    <div className="photo"/>
        <img src={s16}/>
        <br/>
        <span>Top Offers</span>
        <br/>
        <b>Under Rs 499</b>
        <div/>
       
    
        <div className="photo"/>
            
            <img src={s17}/>
            <br/>
            <span>Watches</span>
                <br/>
                <b>Under Rs 499</b>
            <div/>
    
            <div className="photo"/>
                <img src={s18} height="220px
                "/>
                <br/>
                <span>Rebook,HRX..</span>
                <br/>
                <b>Min 70% Off</b>
                
                <div/>
    
                <div className="photo"/>
                    <img src={s19} height="220px
                    "/>
                    <br/>
                    <span>Accessories Combo</span>
                    <br/>
                    <b>Under Rs 499</b>
                    
                    <div/>
    
                    <div className="photo"/>
                        <img src={s20} height="220px
                        "/>
                        <br/>
                        <span>Boys & Girls Ethinic Wear..</span>
                        <br/>
                        <b>Under Rs 499</b>
                        
                        <div/>
    
    <div/>
    
    
    
    
    
    <div className="mobilepicture"/>
        <b>Best Deals On Smartphones</b>
        
        <div className="mobile"/>
        <img src={s21}/>
        <br/>
        <span>Motorola Edge 50 Pro 5G</span>
        <br/>
        <b>Just Rs 20,999</b>
        <div/>
        
        <div className="mobile"/>
            <img src={s22}/>
            <br/>
            <br/>
            <span>Vivo T3 5G</span>
            <br/>
            
            <b>Just Rs 16,999</b>
            <div/>
           
        
            <div className="mobile"/>
                
                <img src={s23} height="210px"/>
                <br/>
                <br/>
                <span>CMF Phone 1</span>
                    <br/>
                    
                    <b>Just Rs 12,999</b>
                <div/>
        
                <div className="mobile"/>
                    <img src={s24} height="230px
                    "/>
                    <br/>
                    <span>Moto G3 5G</span>
                    <br/>
                    <b>From Rs 9,999</b>
                    
                    <div/>
        
                    <div className="mobile"/>
                        <img src={s25} height="230px
                        "/>
                        <br/>
                        <span>Moto G64 5G</span>
                        <br/>
                        <b>Just Rs 12,999</b>
                        
                        <div/>
        
                        <div className="mobile"/>
                            <img src={s26} height="230px
                            "/>
                            <br/>
                            <span>Realme P1 5G</span>
                            <br/>
                            <b>From Rs 13,999</b>
                            
                            <div/>
        
        <div/>
    
        <hr/>
        <h3>Top Stories: Brand Directory: </h3>
        <div className="hr1"/>
            
            <p><b>MOST SEARCHED FOR ON FLIPKART</b>
            <a href="">Mobile |</a>
            <a href="">POCO |</a>
            <a href="">SAMSUNG |</a>
            <a href="">IPHONE 16 |</a>
            <a href="">SAMSUNG S25 |</a>
        </p>
        <div/>
        
        <hr/>
        <div className="last"/>
        <div className="list"/>
            <p><b>ABOUT</b>
          <li><a href="">Contact us</a></li>  
            <li><a href="">About us</a></li>
            <li><a href="">Carrers</a></li>
            <li><a href="">Flipkart Stories</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Corporate Information</a></li>
        </p>
        <div/>
    
        <div className="last"/>
        <div className="list"/>
            <p><b>ABOUT</b>
          <li><a href="">Contact us</a></li>  
            <li><a href="">About us</a></li>
            <li><a href="">Carrers</a></li>
            <li><a href="">Flipkart Stories</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Corporate Information</a></li>
        </p>
        <div/>
    
    
        <div className="last"/>
        <div className="list"/>
            <p><b>ABOUT</b>
          <li><a href="">Contact us</a></li>  
            <li><a href="">About us</a></li>
            <li><a href="">Carrers</a></li>
            <li><a href="">Flipkart Stories</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Corporate Information</a></li>
        </p>
        <div/>
    
    
        <div className="last"/>
        <div className="list"/>
            <p><b>ABOUT</b>
          <li><a href="">Contact us</a></li>  
            <li><a href="">About us</a></li>
            <li><a href="">Carrers</a></li>
            <li><a href="">Flipkart Stories</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Corporate Information</a></li>
        </p>
        <div/>
    
    
        <div className="last"/>
        <div className="list"/>
            <p><b>ABOUT</b>
             <li><a href="">Contact us</a></li>  
            <li><a href="">About us</a></li>
            <li><a href="">Carrers</a></li>
            <li><a href="">Flipkart Stories</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Corporate Information</a></li>
        </p>
        <div/>
            
        <div/>
     <div/>
        </div>
    );
}

export default Home;