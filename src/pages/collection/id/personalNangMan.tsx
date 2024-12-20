import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import Modal from "@widgets/Modal/Modal1";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const PersonalNangMan = () => {
    const location = useLocation();
    const data = location.state;
    // 근데 여기서 id 값이 그 게시물에 하나씩 달려있는 id 면 그거에 대한 세부 정보를 불러 올 수 있는데 만약 사람 계정에 대한 id 를 불러오면 만역 낭만 모음집에서 같은 사람의 게시물이 여러개 있으면 그때는 id 말고 다른 구별자가 필요할 것 이다.
    // 이 id 값으로 useQuery로 api 써서 데이터 불러 오면 됨
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const { id } = useParams();
    console.log(data.img);

    const navigate = useNavigate();

    return (
        <div
            onClick={() => {
                setIsModalOpen(false);
                navigate("Collection");
            }}
        >
            {data?.img ? (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    width={790}
                    height={817.17}
                >
                    <ImgStyle
                        src={data?.img}
                        style={{ width: "580px", height: "279px" }}
                    ></ImgStyle>
                    <TitleStyle>{data?.title}</TitleStyle>
                    <div style={{ width: "580px", height: "194px" }}>
                        <div>미션후기</div>
                        <PriceStyle>{data?.price}</PriceStyle>
                    </div>
                </Modal>
            ) : (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    width={790}
                    height={528.21}
                >
                    <TitleStyle>{data?.title}</TitleStyle>
                    <div style={{ width: "580px", height: "194px" }}>
                        <div>미션후기</div>
                        <PriceStyle>{data?.price}</PriceStyle>
                    </div>
                </Modal>
            )}
        </div>
    );
};
export default PersonalNangMan;

const ImgStyle = styled.img.attrs(() => ({ className: "pixel" }))`
    text-align: center;
    margin-top: 50px;
    justify-content: center;
`;
const TitleStyle = styled.div.attrs(() => ({ className: "pixel" }))`
    text-align: center;
    margin-top: 50px;
    width: 580px;
    height: 104px;
    align-content: center;
`;

const PriceStyle = styled.div.attrs(() => ({ className: "pixel" }))`
    text-align: center;
    margin-top: 50px;
    width: 580px;
    height: 155px;
    align-content: center;
`;
