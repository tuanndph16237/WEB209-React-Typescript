import React from "react";
import { Row, Col, Carousel } from 'antd'
import HomeMenu from "../../components/Home/Menu";
import styled from "styled-components";
import Banner1 from "../../assets/images/brand_page_banner_Hp_.jpg";
import Banner2 from "../../assets/images/Samsung-Galaxy-Social-Media-Banner-Design-scaled.jpg";
import Banner3 from "../../assets/images/laptop-acer-nitro-5-an515-55-5923(1).png";
import Banner4 from "../../assets/images/Qt7HAib66L2dUtQNfhfBS7FW93EWXtmJwGDs03Gt.png";
import Banner5 from "../../assets/images/Banner_SamManLG_RuocQuaMeLy.png";
import Banner6 from "../../assets/images/banner-1-02-scaled.jpg";


const HomePage = () => {
	const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
	return (
		<>
			<Container>
				<Row>
					<Col span={6}>
						<HomeMenu />
					</Col>
					<Col span={18}>
						<Carousel afterChange={onChange} autoplay>
							<Slider src={Banner1}/>
							<Slider src={Banner2}/>
							<Slider src={Banner3}/>
							<Slider src={Banner4}/>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</>
	)
}

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
`
const Slider = styled.img`
	/* height: 300px;
  color: '#fff',;
	text-align: center;
	background-color: #364d79; */
`

export default HomePage