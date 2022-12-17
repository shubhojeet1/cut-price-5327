import React from 'react'
import "./DesignArt.css";


function DesignArt() {
    return (
        <>
            <div className="designArtPage">
                {/* Design & art page Navbar */}
                <div className='top_navbar'>
                    <div className="designArtPage_navbar">
                        <p>design</p>
                        <p>art</p>
                        <p>collaborations</p>
                    </div>
                </div>

                {/* Design & art page posters */}
                <div className="designArtPage__poster">

                    <div className="poster__left">
                        <img src="https://www.yoox.com/images/yoox80/banners/6769_1_MultiformProd_TOP1.jpg?634485886869569819#width=890&height=648" alt="Left_poster" />
                    </div>

                    <div className="poster__right">
                        <img src="https://www.yoox.com/images/yoox80/banners/6769_2_Summer_TOP2.jpg?634485886869569819#width=431&height=450" alt="right_image" />

                        <h1>bubbly personality</h1>
                        <p>The perfect pieces to freshen up your home</p>
                    </div>
                </div>

                {/* div for top heading */}
                <div className="designArtPage_heading">
                    <h1>"The concept of fluidity has become a guiding principle in how the new generations redefine the world and experience it."</h1>
                </div>

                {/* Crazy mood page */}
                <div className="designArtPage__crazyMood">
                    <img src="https://www.yoox.com/images/yoox80/banners/6769_23_Living_Middle.jpg?634485886869569819#width=897&height=615" alt="Crazy__mood" />

                    <h1>crazy mood</h1>
                    <p>The new photoshoot by Living Corriere</p>
                </div>

                {/* three image div */}
                <div className="designArtPage__threeImageDiv">

                    <div className="twoImage_div">
                        <div className="firstSecondImage">
                            <img src="https://www.yoox.com/images/yoox80/banners/6769_1_GenzDesign_Compo01.jpg?634485886869569819#width=431&height=450" alt="firstImage" />

                            <h1>in my room</h1>
                            <p>Personalise your space with special creations and colors</p>
                        </div>

                        <div className="firstSecondImage">
                            <img src="https://www.yoox.com/images/yoox80/banners/6769_2_PickedByNina_Compo2.gif?634485886869569819#width=542&height=542" alt="second_image" />

                            <h1>picked by nina yoox</h1>
                            <p>An unprecedented project of collectible design</p>
                        </div>
                    </div>

                    <div className="singleImageDiv">
                        <img src="https://www.yoox.com/images/yoox80/banners/6769_2_Seletti_Compo3.jpg?634485886869569819#width=720&height=700" alt="Single_image" />

                        <h1>seletti</h1>
                        <p>Pure creativity</p>
                    </div>
                </div>

                {/* top picks */}
                <h1 className='toppicks__title'>top picks</h1>

                <div className="designArtPage__topPicks">

                    <div className="topPicks__item">
                        <img src="https://www.yoox.com/images/items/58/58045729NM_14_f.jpg?impolicy=crop&width=306&height=390" alt="first" />

                        <h1>fornasetti</h1>
                        <p>Pillow or pillow case</p>
                        <h4>$ 697.00</h4>
                    </div>

                    <div className="topPicks__item">
                        <img src="https://www.yoox.com/images/items/58/58056560CI_14_f.jpg?impolicy=crop&width=306&height=390" alt="second" />

                        <h1>ferm living</h1>
                        <p>Vase</p>
                        <h4>$ 140.00</h4>
                    </div>

                    <div className="topPicks__item">
                        <img src="https://www.yoox.com/images/items/58/58055208QO_14_f.jpg?impolicy=crop&width=306&height=390" alt="third" />

                        <h1>ferm living</h1>
                        <p>Outdoor furniture</p>
                        <h4>$ 269.00</h4>

                    </div>

                    <div className="topPicks__item">
                        <img src="https://www.yoox.com/images/items/58/58056557CJ_14_f.jpg?impolicy=crop&width=306&height=390" alt="fourth" />

                        <h1>qeeboo</h1>
                        <p>Vase</p>
                        <h4>$ 140.00</h4>
                    </div>

                    <div className="topPicks__item">
                        <img src="https://www.yoox.com/images/items/58/58045916HC_14_f.jpg?impolicy=crop&width=306&height=390" alt="fifth" />

                        <h1>fornasetti</h1>
                        <p>Pillow or pillow case</p>
                        <h4>$ 278.00</h4>

                    </div>

                    <div className="topPicks__item">
                        <img src="https://www.yoox.com/images/items/56/56004409CB_14_f.jpg?impolicy=crop&width=306&height=390" alt="sixth" />

                        <h1>assouline</h1>
                        <p>Lifestyle Book</p>
                        <h4>$ 139.00</h4>
                    </div>

                </div>

                {/* design art page bottom */}
                <div className="designArtPage__bottom">
                    <img src="https://www.yoox.com/images/yoox80/banners/6769_1_DesignArt_BOTTOM.jpg?634485886869569819#width=1348&height=320" alt="Bottom_image" />
                </div>
            </div>

            {/* footer added */}
            
        </>
    )
}

export default DesignArt